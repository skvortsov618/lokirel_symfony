import React from "react";
import styled from "styled-components";
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Field, Form, Formik } from "formik";
import { LinearProgress } from "@mui/material";

import MuiTextField from '@mui/material/TextField';
import { Autocomplete,
    TextField,
    Select,
    Switch,
    ToggleButtonGroup,
    CheckboxWithLabel,
    Checkbox} from "formik-mui";

const BlockFeedback = () => {

    const Feedback = styled.div`
        background-color: lightblue`
        
    return ( 
        <Feedback>
            <Formik
                initialValues={{
                    fname: "dfghdgfh",
                    femail: "dfg@fdg.gfh",
                    ftel: "",
                    ftext: "Добрый день! Хотим озелениение, удобнее всего будет созвониться по указанному номеру завтра или послезавтра",
                    fpolicycheck: false,
                    fmailing: false
                }}
                validate={(values)=>{
                    const errors = {};
                    if (!values.fpolicycheck) {
                        errors.fpolicycheck = "Для продолжения необходимо согласиться с политикой конфиденциальности"
                    } else if (!values.fname.trim().match(/^([0-9a-zA-Zа-яА-Я\s]{2,50})$/)) {
                        errors.fname = 'Только русские и латинские буквы и цифры от 2 до 50 элементов'
                    } else if (!values.femail.trim().toLowerCase().match(/^([a-z0-9_\.-]{1,50})@([\da-z\.-]{1,50})\.([a-z\.]{1,30})$/)) {
                        errors.femail = "Укажите корректный адрес электронной почты"
                    } else if (values.ftext.trim().length>250) {
                        errors.ftext = "Только русские и латинские буквы и цифры, до 250 элементов"
                    }
                    if (!values.ftel.trim().match(/^([\d\+ -\\\/]{0,50})$/)) {
                        errors.ftel = "Number invalid"
                    }                    
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) =>{
                    const xhttp = new XMLHttpRequest();
                    xhttp.onreadystatechange = function() {
                        if (this.readyState == 4) {
                            if (this.status == 200) {
                                console.log(JSON.parse(this.response))
                                setSubmitting(false)
                            } else {
                                setSubmitting(false)
                                console.log("ERROR HAPPENED PLS TRY AGAIN OR CONTACT US DIRECTLY")
                            }
                        }
                    };
                    // xhttp.onload = function(data) {
                    //     console.log(data);
                    // }
                    xhttp.open("POST", "/feedback", true);
                    // xhttp.open("POST", "https://dimmyraves.ru", true);
                    xhttp.setRequestHeader("Content-type", "application/json");
                    xhttp.send(JSON.stringify(values));
                    // setTimeout(()=>{
                    //     setSubmitting(false);
                    //     alert(JSON.stringify(values, null, 2));
                    // }, 5000)
                }}
            >
                {({values, submitForm, isSubmitting, errors}) => (
                    <Form style={{margin:100}}>
                        <Field
                            component={TextField}
                            name="fname"
                            label="Как к вам можно обращаться?"
                            type="text"
                            variant="outlined"
                            fullWidth
                        />
                        <Field
                            component={TextField}
                            name="femail"
                            label="Пожалуйста, укажите вашу электронную почту"
                            type="email"
                            variant="outlined"
                            fullWidth
                        />
                        <Field
                            component={TextField}
                            name="ftel"
                            label="Вы также можете указать номер телефона"
                            type="tel"
                            variant="outlined"
                            fullWidth
                        />
                        <Field
                            component={TextField}
                            label="Дополнительное сообщение"
                            name="ftext"
                            variant="outlined"
                            fullWidth
                        />
                        <Field
                            component={CheckboxWithLabel}
                            type="checkbox"
                            name="fmailing"
                            Label={{ label: "Хочу иногда получать предложения и новости"}}
                        /><br />
                        <Field
                            component={CheckboxWithLabel}
                            type="checkbox"
                            name="fpolicycheck"
                            Label={{ label: "Согласен с политикой конфиденциальности"}}
                        />
                        {isSubmitting && <LinearProgress />}
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            disabled={isSubmitting}
                            onClick={submitForm}
                        >
                            Отправить
                        </Button>
                    </Form>
                )}
            </Formik>
        </Feedback>    
    );
}
 
export default BlockFeedback;