import React, {useState,useEffect, useCallback, useMemo} from "react";
import { createEditor, Editor, Transforms, Text } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import { Button } from "@mui/material";

const RichBlockEditor = ({block, callback}) => {

    // console.log(JSON.parse(block.text))

    const handleGallery = (e, block, index) => {
        setGalleryOpen(galleryOpen.map((b, bindex)=> {
            if (bindex === index && !b) return true
            return false
        }))
        fetch('https://localhost:8000/images', {
            method: "POST"
        })
        .then(async (res)=> {
            if(!res.ok ?? res.status != 200) {
               throw Error('could not fetch') 
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data)
            setGallery(data)
            setIsPending(false)
            setError(null)
        })
        .catch(err => {
            if (err.name === 'AbortError') {
                console.log('fetch aborted')
            } else {
                setError(err.message)
                setIsPending(false)
            }
        })
    }

    const editor = useMemo(() => withReact(createEditor()), [])
    const [value, setValue] = useState(JSON.parse(block.text))

    const renderElement = useCallback(props => {
        switch (props.element.type) {
            case 'code':
                return <CodeElement {...props} />
            case 'image':
                return <ImageElement {...props} />
            default:
                return <DefaultElement {...props} />
            }
    },[])

    const renderLeaf = useCallback(props => {
        return <Leaf {...props} />
    }, [])

    return (
    <Slate
        editor={editor}
        value={value}
        onChange={newValue => setValue(newValue)}
    >
        <div>
            <Button onMouseDown={(event) => {
                event.preventDefault()
                CustomEditor.toggleCodeBlock(editor)
            }}>
                CODE
            </Button>
            <Button onMouseDown={(event) => {
               event.preventDefault()
               CustomEditor.toggleBoldMark(editor)
            }}>
                BOLD
            </Button>
            <Button onMouseDown={(event) => {
                event.preventDefault()
                // const image = { type: 'img', url: 'https://localhost:8000/build/images/cardPic.27d1aa35.jpg', alt: 'office green', children: [text] }
                Transforms.insertNodes(editor, { type: 'image', url: 'https://localhost:8000/build/images/cardPic.27d1aa35.jpg', alt: 'office green', children: [{text: ''}] })
                console.log(value)
            }}>
                IMAGE
            </Button>
            <Button onMouseDown={(event) => {
                event.preventDefault()
                callback({...block, text: JSON.stringify(value)})
            }}>
                SAVE
            </Button>
        </div>
        <Editable 
            editor={editor}
            renderElement={renderElement}
            renderLeaf={renderLeaf}
        />
    </Slate>
    )

}

export default RichBlockEditor

const Leaf = props => {
    return (
      <span
        {...props.attributes}
        style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal' }}
      >
        {props.children}
      </span>
    )
}
const CodeElement = props => {
    return (
        <pre {...props.attributes}>
            <code>{props.children}</code>
        </pre>
    )
}
const ImageElement = ({ attributes, children, element }) => {
    return (
        <div>{children}
        <img src={element.url} alt={element.alt}/>
        </div>
    )
}
const DefaultElement = props => {
    return <p {...props.attributes}>{props.children}</p>
}

const CustomEditor = {
    isBoldMarkActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.bold === true,
        universal: true,
      })
  
      return !!match
    },
  
    isCodeBlockActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.type === 'code',
      })
  
      return !!match
    },
  
    toggleBoldMark(editor) {
      const isActive = CustomEditor.isBoldMarkActive(editor)
      Transforms.setNodes(
        editor,
        { bold: isActive ? null : true },
        { match: n => Text.isText(n), split: true }
      )
    },
  
    toggleCodeBlock(editor) {
      const isActive = CustomEditor.isCodeBlockActive(editor)
      Transforms.setNodes(
        editor,
        { type: isActive ? null : 'code' },
        { match: n => Editor.isBlock(editor, n) }
      )
    },
}