import {AuthLayout} from "../layout/AuthLayout.jsx";
import {Button, Grid, Link, TextField, Typography} from "@mui/material";
import {Google} from "@mui/icons-material";
import {Link as RouterLink} from "react-router";

export const RegisterPage = () => {
    return (
        <AuthLayout title="Create Account">
            <form>
                <Grid container>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField
                            label='Fullname'
                            type='text'
                            placeholder='John Doe'
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField
                            label='Email'
                            type='email'
                            placeholder='youremail@gmail.com'
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField
                            label='Password'
                            type='password'
                            placeholder='Password'
                            fullWidth
                        />
                    </Grid>
                    <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
                        <Grid item xs={12} >
                            <Button variant='contained' fullWidth>
                                Sign Up
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container direcction='row' justifyContent='end'>
                        <Typography sx={{mr:1}}>Already have an account?</Typography>
                        <Link component={RouterLink} color='inherit' to='/auth/login'>
                            Sign in
                        </Link>

                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};
