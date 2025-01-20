import {AuthLayout} from "../layout/AuthLayout.jsx";
import {Button, Grid, Link, TextField, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router";
import {useForm} from "../../hooks/index.js";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {startCreatingUserWithEmailAndPassword} from "../../store/auth/index.js";

const formData={
    displayName: '',
    email: '',
    password: ''
}

const formValidations={
    email: [(value) => value.includes('@'),'El correo debe de tener una @'],
    password: [(value) => value.length >= 6,'El password debe de tener más de 6 letras'],
    displayName: [(value) => value.length >= 1,'El nombre es obligatorio'],
}

export const RegisterPage = () => {
    const [formSubmited, setFormSubmited] = useState(false)
    const dispatch = useDispatch();
    const {
        displayName, email, password, onInputChange, formState,
        isFormValid, displayNameValid, emailValid, passwordValid
    } = useForm(formData, formValidations)

    const onSubmit = (e) => {
        e.preventDefault();
        setFormSubmited(true)
        if(!isFormValid) return
        console.log(formState)
        dispatch(startCreatingUserWithEmailAndPassword(formState))
    }

    return (
        <AuthLayout title="Create Account">
            <h1>FormValid: {isFormValid? 'Válido': 'Incorrecto'}</h1>
            <form onSubmit={onSubmit}>
                <Grid container>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField
                            label='Fullname'
                            type='text'
                            placeholder='John Doe'
                            fullWidth
                            name="displayName"
                            value={displayName}
                            onChange={onInputChange}
                            error={!!displayNameValid && formSubmited}
                            helperText={displayNameValid}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField
                            label='Email'
                            type='email'
                            placeholder='youremail@gmail.com'
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
                            error={!!emailValid && formSubmited}
                            helperText={emailValid}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField
                            label='Password'
                            type='password'
                            placeholder='Password'
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onInputChange}
                            error={!!passwordValid && formSubmited}
                            helperText={passwordValid}
                        />
                    </Grid>
                    <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
                        <Grid item xs={12}>
                            <Button type='submit' variant='contained' fullWidth>
                                Sign Up
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container direcction='row' justifyContent='end'>
                        <Typography sx={{mr: 1}}>Already have an account?</Typography>
                        <Link component={RouterLink} color='inherit' to='/auth/login'>
                            Sign in
                        </Link>

                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};
