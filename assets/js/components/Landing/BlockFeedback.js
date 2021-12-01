import React from "react";
import styled from "styled-components";
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import { Field, Form, Formik } from "formik";
import { LinearProgress } from "@mui/material";

import MuiTextField from '@mui/material/TextField';
import { Autocomplete,
    TextField,
    Select,
    Switch,
    ToggleButtonGroup,} from "formik-mui";

const BlockFeedback = () => {

    const Feedback = styled.div`
        background-color: lightblue`

    return ( 
        <Feedback>
            <Formik
                initialValues={{
                    femail: "",
                }}
                validate={(values)=>{
                    const errors = {};
                    // if (!values.femail) {
                    //     errors.femail = 'Required'
                    // }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) =>{
                    setTimeout(()=>{
                        setSubmitting(false);
                        alert(JSON.stringify(values, null, 2));
                    }, 5000)
                }}
            >
                {({submitForm, isSubmitting, touched, errors}) => (
                    <Form style={{margin:100}}>
                        <Field
                            component={TextField}
                            name="femail"
                            label="email"
                            type="email"
                            variant="outlined"
                            fullWidth
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        {isSubmitting && <LinearProgress />}
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            disabled={isSubmitting}
                            onClick={submitForm}
                        >
                            Sign In
                        </Button>
                    </Form>
                )}
            </Formik>
        </Feedback>    
    );
}
 
export default BlockFeedback;