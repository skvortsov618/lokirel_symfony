import React from "react";
import styled from "styled-components";
import TextField from '@mui/material/TextField';

const BlockFeedback = () => {

    const image_src = "https://images7.alphacoders.com/451/451013.jpg";
    const image_alt = "sdfsd";
    const header    = "Lokirel";
    const subheader = "Озеленение и профессиональный уход за растениями";

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
        //TODO add validation
        //TODO make json and send to backend
        //TODO change form to "form submitted"
    }
    const SIF = styled.div`
        background-color: white;`

    return ( 
        <div className="blockFeedback" style={{
            width: "100%",
            height: "100vh",
            backgroundColor: "white"
        }}>
            <h2 className="blockFeedback__title" style= {{
                textAlign: "center",
                color: "black", fontSize: "50px"
            }}>CONFIDE IN US</h2>
            <div id="formholder">
                <div id="afterform"></div>
                <form className="blockFeedback__form" autoComplete="on" style={{
                    backgroundColor: "lightgrey",
                    border: "2px lightgrey solid",
                    borderRadius: 20, margin: 100, padding: 30
                }}>
                    <SIF>
                    <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="family-name"
                    />
                    </SIF>
                    <input type="text" id="fname" name="fname" maxLength="50" placeholder="Как к вам обращаться?"/><br />
                    <fieldset>
                        <legend>Контакты</legend>
                        <input type="email" id="femail" name="femail" maxLength="50" placeholder="email" /><br />
                        <div id="femail_error"></div>
                        <input type="tel" id="ftel" name="ftel" maxLength="50" placeholder="Телефон" /><br />
                        <div id="ftel_error"></div>
                    </fieldset>
                    <textarea rows="10" cols="30" id="ftext" name="ftext" maxLength="220" placeholder="Дополнительное сообщение" /><br />
                    <input type="checkbox" id="fcheck" name="fcheck" required/>
                    <label htmlFor="fcheck">Принимаю условия пользовательского соглашения и политики конфиденциальности</label><br />
                    <div id="fcheck_error"></div>
                    <input type="submit" onClick={handleSubmit} value="Submet" />
                </form>
            </div>
        </div>
    );
}
 
export default BlockFeedback;