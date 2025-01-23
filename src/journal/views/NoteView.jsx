import {Button, Grid, IconButton, TextField, Typography} from "@mui/material";
import {DeleteOutlined, SaveOutlined, UploadOutlined} from "@mui/icons-material";
import {ImageGallery} from "../components/index.js";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "../../hooks/index.js";
import {useEffect, useMemo, useRef} from "react";
import {setActiveNote, startDeletingNote, startSavingNote, startUploadingFiles} from "../../store/journal/index.js";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css'

export const NoteView = () => {

    const dispatch = useDispatch();
    const {active: note, messageSaved, isSaving} = useSelector(state => state.journal)
    const {title,body,date,onInputChange,formState} = useForm(note)

    const dateString = useMemo(()=>{
        const newDate = new Date(date);
        return newDate.toUTCString();
    },[date])

    const fileInputRef = useRef();
    useEffect(()=>{
        dispatch(setActiveNote(formState))
    },[formState])
    useEffect(()=>{
        if(messageSaved.length>0){
            Swal.fire('Nota actualizada',messageSaved, 'success')
        }
    },[messageSaved])
    const onSaveNote = () =>{
        dispatch(startSavingNote())
    }
    const onFileInputChange = ({target}) =>{
        if(target.files.length === 0) return;
        console.log('subiendo archivos')
        dispatch(startUploadingFiles(target.files))
    }

    const onDeleteNote = () =>{
        dispatch(startDeletingNote())
    }
    return (
        <Grid
            className='animate__animated animate__fadeIn animate__faster'
            container direction='row' justifyContent='space-between' alignItems='center' sx={{mb: 1}}>
            <Grid item>
                <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
            </Grid>
            <Grid item>
                <input
                    type="file"
                    multiple
                    ref={fileInputRef}
                    onChange={onFileInputChange}
                    style={{ display: 'none' }}
                />
                <IconButton
                    color='primary'
                    disabled={isSaving}
                    onClick={()=>fileInputRef.current.click()}
                >
                    <UploadOutlined />
                </IconButton>
                <Button disabled={isSaving} onClick={onSaveNote} color='primary' sx={{padding: 2}}>
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
            <Grid
                container
                justifyContent='end'
            >
                <Button
                    onClick={onDeleteNote}
                    sx={{mt:2}}
                    color='error'
                >
                    <DeleteOutlined/>
                    Borrar
                </Button>
            </Grid>
            <ImageGallery images={note.imageUrls}/>
        </Grid>
    );
};
