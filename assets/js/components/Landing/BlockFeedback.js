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
import bg_image from '../../../images/backgrounds/feedback.jpg'
import * as url from "url";
import { red } from "@mui/material/colors";
import {MyBGBox} from "./CustomComponents/FirstPageComponents";
import {myTheme} from "./CustomComponents/customTheme";
import {MyPaper, MyTextField, SentError, SentSuccess} from "./CustomComponents/FifthPageComponents";

const BlockFeedback = () => {

    const [sent,setSent] = useState(false);
    const [feedError, setFeedError] = useState(false);

    return (
        <MyBGBox sx={{background: `url(${bg_image})`,
            [myTheme.breakpoints.down('sm')]: {
                marginTop: '-3vh'
            },}}>
            <Container maxWidth='md' sx={{
                [myTheme.breakpoints.down('md')]: {
                    maxWidth:myTheme.breakpoints.values.sm,
                    // padding:'0'
                },
                [myTheme.breakpoints.down('sm')]: {
                    maxWidth:myTheme.breakpoints.values.xs
                },
            }} >
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
                                        setFeedError(true)
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
                                {feedError && <SentError>
                                    При отправке произошла ошибка. Повторите попытку или свяжитесь с нами любым способом указанным в контактах.
                                </SentError>}
                                <Field
                                    component={MyTextField}
                                    name="fname"
                                    label="Как вас зовут?"
                                    type="text"
                                    variant="outlined"
                                    // fullWidth
                                    style={{width:'100%'}}
                                />
                                <Field
                                    component={MyTextField}
                                    name="femail"
                                    label="Ваш email"
                                    type="email"
                                    variant="outlined"
                                    // fullWidth
                                    style={{width:'100%'}}
                                />
                                <Field
                                    component={MyTextField}
                                    name="ftel"
                                    label="Ваш номер телефона"
                                    type="tel"
                                    variant="outlined"
                                    // fullWidth
                                    // sx={{fontSize:'0.2rem'}}
                                    style={{width:'100%'}}
                                />
                                <Field
                                    component={MyTextField}
                                    label="Дополнительное сообщение"
                                    name="ftext"
                                    variant="outlined"
                                    // fullWidth
                                    style={{width:'100%'}}
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
                                    sx={{ mt: 2, pt:2, pb:2, borderRadius: 2}}
                                    disabled={isSubmitting}
                                    onClick={submitForm}
                                >
                                    Отправить
                                </Button>
                            </Form>
                        )}
                    </Formik>}
                    {sent && <SentSuccess>Мы обязательно свяжемся с вами!</SentSuccess>}
                </MyPaper>
            </Container>

        </MyBGBox>

    // const [sent,setSent] = useState(true);
    // const [feederror, setFeederror] = useState(false);
    //
    // return (
    //         <FeedbackWrapper className="bgFeedback">
    //             <Container maxWidth='sm' >
    //                 <MyPaper elevation={10}>
    //                 {!sent && <Formik
    //                         initialValues={{
    //                             fname: "",
    //                             femail: "",
    //                             ftel: "",
    //                             ftext: "",
    //                             fpolicycheck: false,
    //                             fmailing: false
    //                         }}
    //                         validate={(values)=>{
    //                             const errors = {};
    //                             if (!values.fpolicycheck) {
    //                                 errors.fpolicycheck = "Для продолжения необходимо согласиться с политикой конфиденциальности"
    //                             } else if (!values.fname.trim().match(/^([0-9a-zA-Zа-яА-Я\s]{2,50})$/)) {
    //                                 errors.fname = 'Только русские и латинские буквы и цифры от 2 до 50 элементов'
    //                             } else if (!values.femail.trim().toLowerCase().match(/^([a-z0-9_\.-]{1,50})@([\da-z\.-]{1,50})\.([a-z\.]{1,30})$/)) {
    //                                 errors.femail = "Укажите корректный адрес электронной почты"
    //                             } else if (values.ftext.trim().length>250) {
    //                                 errors.ftext = "Только русские и латинские буквы и цифры, до 250 элементов"
    //                             }
    //                             if (!values.ftel.trim().match(/^([\d\+ -\\\/]{0,50})$/)) {
    //                                 errors.ftel = "Number invalid"
    //                             }
    //                             return errors;
    //                         }}
    //                         onSubmit={(values, {setSubmitting}) =>{
    //                             const xhttp = new XMLHttpRequest();
    //                             xhttp.onreadystatechange = function() {
    //                                 if (this.readyState == 4) {
    //                                     if (this.status == 200 && this.getResponseHeader("Content-Type") == "aplication/json") {
    //                                         setSent(true);
    //                                     } else {
    //                                         setSubmitting(false)
    //                                         setFeederror(true)
    //                                     }
    //                                 }
    //                             };
    //                             xhttp.open("POST", "/feedback", true);
    //                             xhttp.setRequestHeader("Content-type", "application/json");
    //                             xhttp.send(JSON.stringify(values));
    //                         }}
    //                 >
    //                     {({values, submitForm, isSubmitting, errors}) => (
    //                         <Form>
    //                             {feederror && <div style={{color:"red", marginBottom: "15px"}}>При отправке произошла ошибка. Повторите попытку или свяжитесь с нами любым способом указанным в контактах.</div>}
    //                             <Field
    //                                     component={MyTextField}
    //                                     name="fname"
    //                                     label="Как к вам можно обращаться?"
    //                                     type="text"
    //                                     variant="outlined"
    //                                     fullWidth
    //                             />
    //                             <Field
    //                                     component={MyTextField}
    //                                     name="femail"
    //                                     label="Пожалуйста, укажите вашу электронную почту"
    //                                     type="email"
    //                                     variant="outlined"
    //                                     fullWidth
    //                             />
    //                             <Field
    //                                     component={MyTextField}
    //                                     name="ftel"
    //                                     label="Вы также можете указать номер телефона"
    //                                     type="tel"
    //                                     variant="outlined"
    //                                     fullWidth
    //                             />
    //                             <Field
    //                                     component={MyTextField}
    //                                     label="Дополнительное сообщение"
    //                                     name="ftext"
    //                                     variant="outlined"
    //                                     fullWidth
    //                             />
    //                             <Field
    //                                     component={CheckboxWithLabel}
    //                                     type="checkbox"
    //                                     name="fmailing"
    //                                     Label={{ label: "Хочу иногда получать предложения и новости"}}
    //                             /><br />
    //                             <Field
    //                                     component={CheckboxWithLabel}
    //                                     type="checkbox"
    //                                     name="fpolicycheck"
    //                                     Label={{ label: "Согласен с политикой конфиденциальности"}}
    //                             />
    //                             {isSubmitting && <LinearProgress />}
    //                             <Button
    //                                     fullWidth
    //                                     variant="contained"
    //                                     sx={{ mt: 3, pt:2, pb:2, borderRadius: 2}}
    //                                     disabled={isSubmitting}
    //                                     onClick={submitForm}
    //                             >
    //                                 Отправить
    //                             </Button>
    //                         </Form>
    //                     )}
    //                 </Formik>}
    //                 {sent && <div>Мы обязательно свяжемся с вами!</div>}
    //             </MyPaper>
    //             </Container>
    //         </FeedbackWrapper>
    //
    );
}

 
export default BlockFeedback;