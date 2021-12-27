import React from 'react';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import { Field, Form, Formik } from "formik";
import { Autocomplete,
	TextField,
	Select,
	Switch,
	ToggleButtonGroup,
	CheckboxWithLabel,
	Checkbox} from "formik-mui";
import Button from '@mui/material/Button';

const AdminLogin = () => {
    return (
        <Box sx={{backgroundColor: "white", zIndex:6000}}>
            <Formik
                initialValues={{
                    lemail: "",
                    lpassword: ""
                }}
                validate={(values)=>{
                    const errors={}
                    return errors
                }}
                onSubmit={(values) => {
                    const xhttp = new XMLHttpRequest();
                    xhttp.onreadystatechange = function() {
                        if (this.readyState == 4) {
                            if (this.status == 200 && this.getResponseHeader("Content-Type") == "aplication/json") {
                                console.log("submitted");
                                console.log(this.responseText);
                                // setSent(true);
                            } else {
                                console.log("request error");
                                // setSubmitting(false)
                                // setFeedError(true)
                            }
                        }
                    };
                    xhttp.open("POST", "/adminlogin", true);
                    xhttp.setRequestHeader("Content-type", "application/json");
                    xhttp.send(JSON.stringify(values));
                }}
            >
                {({submitForm}) => (
                <Form>
                    <Field
                        component={TextField}
                        name="lemail"
                        label="EMAIL"
                        type="email"
                        variant="outlined"
                        style={{width:'100%'}}
                    />
                    <Field
                        component={TextField}
                        name="lpassword"
                        label="PASSWORD"
                        type="email"
                        variant="outlined"
                        style={{width:'100%'}}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2, pt:2, pb:2, borderRadius: 2}}
                        onClick={submitForm}
                    >
                        Отправить
                    </Button>
                </Form>
                )}
            </Formik>
        </Box>
    );
}
export default AdminLogin;