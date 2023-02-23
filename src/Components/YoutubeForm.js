import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const YoutubeForm = () => {
    const initialValues = {
        name: '',
        email: '',
        channelname: ''
    };
    const onSubmit = values => {
        console.log(values);
    }
    const validationSchema =Yup.object({
        name:Yup.string().required('REquired'),
        email:Yup.string().email('Invalid email format').required('Required'),
        channelname:Yup.string().required('Required')
    })

    const validate = values => {
        let errors = {}
        
        if (!values.name) {
            errors.name = 'Required'
        }
        if (!values.email) {
            errors.email = 'Required'
        }
        if (!values.channelname) {
            errors.channelname = 'Required' 
        }
        return errors
    }

    const formik = useFormik({

        initialValues,
        onSubmit,
        validationSchema ,

    });
    console.log(formik.errors);


    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-control'>
                <label htmlFor='name' >Name</label>
                <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}/>
                {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div >:null}
                </div>
                <div className='form-control'>
                <label htmlFor='email' >Emai </label>
                <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email}  onBlur={formik.handleBlur}/>
                {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div >:null}
                </div>
                <div className='form-control'>
                <label htmlFor='channelname' >channelname </label>
                <input type='text' id='channelname' name='channelname' onChange={formik.handleChange} value={formik.values.channelname} onBlur={formik.handleBlur}/>
                {formik.touched.channelname && formik.errors.channelname ? <div className='error'>{formik.errors.channelname}</div >:null}
                </div>
                <button type='submit'>submit</button>
            </form>


        </div>
    )
}

export default YoutubeForm

