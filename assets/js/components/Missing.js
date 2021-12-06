import React from 'react';
import bgMain from './../../images/backgrounds/001.jpg'

const Missing = () => {
    return (
        <div className="blockCover" style={{
            backgroundImage: `url(${bgMain})`
        }}>
            <div className="blockCover__titles">
                <div className="blockCover__titles__header">404</div>
                <div className="blockCover__titles__subheader">Такой страницы не существует, но она может появиться.</div>
            </div>
        </div>
    )
}

export default Missing;