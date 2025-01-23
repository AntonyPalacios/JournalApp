export const fileUpload = async (file) =>{
    const cloudUrl = 'https://api.cloudinary.com/v1_1/jorunal-app/upload';

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload-preset','react-journal')

    try {
        const response = await fetch(cloudUrl, {
            method: 'POST',
            body: formData,
        })

        if(!response.ok) throw new Error('No se pudo subir imagen');
        const cloudResponse = await response.json();
        return cloudResponse.secure_url;
    }catch(error){
        console.log(error)
        throw new Error(error.message)
    }
}