import React, { useEffect, useState } from 'react'
import WritingPad from '../../Components/WritingPad/WritingPad'
import { AxiosInstance } from '../../config/axiosConfig';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
    const [value, setValue] = useState('');
    const [file, setFile] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(value);

    }, [value])

    const handleImage = (e) => {
        setFile(e.target.files[0])
    }

    const handleCreate = async () => {
        let imagePath = undefined;
        if (file) {
            const formDataImage = new FormData()
            formDataImage.append('img', file)
            imagePath = await AxiosInstance({
                url: 'posts/addImage',
                method: 'post',
                data: formDataImage,
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            console.log({ imagePath });

        }

        AxiosInstance.post('/posts/createpost', { content: value, imagePath: imagePath?.data?.path }).then((res) => {
            console.log(res);
            navigate('/posts')

        })
    }


    return (
        <div>
            <div className='container mt-5'>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 border rounded p-5 bg-light">
                    <h1 className='mb-sm-3'>Create a Post</h1>
                        <div className='border rounded p-3 mb-sm-3'>
                        <input className='mb-sm-3' type="file" onChange={handleImage} accept='image/*' />
                        </div>
                        {file && <img className='mb-3' src={URL.createObjectURL(file)} alt="" width={200} height={200} />}
                        <WritingPad value={value} setValue={setValue} readOnly={false} theme={'snow'} />
                        <button className='btn btn-primary mt-3' onClick={handleCreate}>create Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePost