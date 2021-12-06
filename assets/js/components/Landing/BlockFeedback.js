import React, { useState } from "react";
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Field, Form, Formik } from "formik";
import {LinearProgress } from "@mui/material";
import { styled } from '@mui/system';
import MuiTextField from '@mui/material/TextField';
import { Autocomplete,
    TextField,
    Select,
    Switch,
    ToggleButtonGroup,
    CheckboxWithLabel,
    Checkbox} from "formik-mui";
import Container from "@mui/material/Container";

import Paper from '@mui/material/Paper';
import bgFeedback from '../../../images/backgrounds/feedback.jpg'
import * as url from "url";
import { red } from "@mui/material/colors";

const FeedbackWrapper = styled('div')({
    backgroundImage: `url(${bgFeedback})`,
    backgroundPosition:'right center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})
const MyPaper = styled(Paper)(({theme})=>({
    padding: '50px 40px',
    borderRadius:'10px',
}))

const MyTextField = styled(TextField)(({theme})=> ({
    paddingBottom: '20px',
}))

const BlockFeedback = () => {

    const [sent,setSent] = useState(false);
    const [feederror, setFeederror] = useState(false);
    
    return (
            <FeedbackWrapper className="bgFeedback">
                <Container maxWidth='sm' >
                    <MyPaper elevation={10}>
                    {!sent && <Formik
                            initialValues={{
                                fname: "",
                                femail: "",
                                ftel: "",
                                ftext: "",
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
                                        if (this.status == 200 && this.getResponseHeader("Content-Type") == "aplication/json") {
                                            setSent(true);
                                        } else {
                                            setSubmitting(false)
                                            setFeederror(true)
                                        }
                                    }
                                };
                                xhttp.open("POST", "/feedback", true);
                                xhttp.setRequestHeader("Content-type", "application/json");
                                xhttp.send(JSON.stringify(values));
                            }}
                    >
                        {({values, submitForm, isSubmitting, errors}) => (
                            <Form>
                                {feederror && <div style={{color:"red", margin: "5px"}}>При отправке произошла ошибка. Повторите попытку или свяжитесь с нами любым способом указанным в контактах.</div>}
                                <Field
                                        component={MyTextField}
                                        name="fname"
                                        label="Как к вам можно обращаться?"
                                        type="text"
                                        variant="outlined"
                                        fullWidth
                                />
                                <Field
                                        component={MyTextField}
                                        name="femail"
                                        label="Пожалуйста, укажите вашу электронную почту"
                                        type="email"
                                        variant="outlined"
                                        fullWidth
                                />
                                <Field
                                        component={MyTextField}
                                        name="ftel"
                                        label="Вы также можете указать номер телефона"
                                        type="tel"
                                        variant="outlined"
                                        fullWidth
                                />
                                <Field
                                        component={MyTextField}
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
                                        sx={{ mt: 3, pt:2, pb:2, borderRadius: 2}}
                                        disabled={isSubmitting}
                                        onClick={submitForm}
                                >
                                    Отправить
                                </Button>
                            </Form>
                        )}
                    </Formik>}
                    {sent && <div>Мы обязательно свяжемся с вами!</div>}
                </MyPaper>
                </Container>
            </FeedbackWrapper>
    
    );
}

 
export default BlockFeedback;