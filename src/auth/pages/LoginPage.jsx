import {Button, Grid, Link, TextField, Typography} from "@mui/material";
import {Google} from "@mui/icons-material";
import {Link as RouterLink} from "react-router";
import {AuthLayout} from "../layout/AuthLayout.jsx";
import {useForm} from "../../hooks/index.js";
import {useDispatch, useSelector} from "react-redux";
import {checkingAuthentication, startGoogleSignIn} from "../../store/auth";
import {useMemo} from "react";


export const LoginPage = () => {

    const dispatch = useDispatch();
    const {status}  = useSelector( state => state.auth );
    const {email, password, onInputChange} = useForm({
        email: 'apalaciosc0109@gmail.com',
        password: '123456'
    })

    const isAuthenticating = useMemo( ()=> status==='checking'
        ,[status])

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({email, password});

        dispatch(checkingAuthentication(email, password));
    }

    const onGoogleSignIn = () => {
        console.log('onGoogleSignIn');
        dispatch(startGoogleSignIn());
    }

    return (
        <AuthLayout title="Login">
            <form onSubmit={onSubmit}>
                <Grid container>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField
                            label='Email'
                            type='email'
                            placeholder='correo@gmail.com'
                            fullWidth
                            name='email'
                            value={email}
                            onChange={onInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField
                            label='Password'
                            type='password'
                            placeholder='Password'
                            fullWidth
                            name='password'
                            value={password}
                            onChange={onInputChange}
                        />
                    </Grid>
                    <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
                        <Grid item xs={12} sm={6}>
                            <Button disabled={isAuthenticating} type='submit' variant='contained' fullWidth>
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button disabled={isAuthenticating} onClick={onGoogleSignIn} variant='contained' fullWidth>
                                <Google/>
                                <Typography sx={{ml: 1}}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container direcction='row' justifyContent='end'>
                        <Link component={RouterLink} color='inherit' to='/auth/register'>
                            Create account
                        </Link>

                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};
