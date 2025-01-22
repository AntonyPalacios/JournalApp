import {Button, Grid, TextField, Typography} from "@mui/material";
import {SaveOutlined} from "@mui/icons-material";
import {ImageGallery} from "../components/index.js";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "../../hooks/index.js";
import {useEffect, useMemo} from "react";
import {setActiveNote, startSavingNote} from "../../store/journal/index.js";

export const NoteView = () => {

    const dispatch = useDispatch();
    const {active: note} = useSelector(state => state.journal)
    const {title,body,date,onInputChange,formState} = useForm(note)

    const dateString = useMemo(()=>{
        const newDate = new Date(date);
        return newDate.toUTCString();
    },[date])

    useEffect(()=>{
        dispatch(setActiveNote(formState))
    },[formState])

    const onSaveNote = () =>{
        dispatch(startSavingNote())
    }
    return (
        <Grid
            className='animate__animated animate__fadeIn animate__faster'
            container direction='row' justifyContent='space-between' alignItems='center' sx={{mb: 1}}>
            <Grid item>
                <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
            </Grid>
            <Grid item>
                <Button onClick={onSaveNote} color='primary' sx={{padding: 2}}>
                    <SaveOutlined sx={{fontSize: 30, mr: 1}}/>
                    Guardar
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type="text"
                    variant='filled'
                    fullWidth
                    placeholder='Ingrese un título'
                    label="Título"
                    sx={{border: 'none', mb: 1}}
                    value={title}
                    name='title'
                    onChange={onInputChange}
                />
                <TextField
                    type="text"
                    variant='filled'
                    fullWidth
                    multiline
                    placeholder='¿Qué sucedió hoy?'
                    label="Nota"
                    minRows='5'
                    sx={{border: 'none', mb: 1}}
                    value={body}
                    name='body'
                    onChange={onInputChange}
                />
            </Grid>
            <ImageGallery></ImageGallery>
        </Grid>
    );
};
