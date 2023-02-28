import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextErrorrmsg from './TextErrorrmsg';
import { useState } from 'react';
 
const RefractoringYform = () => {
     const [formValues, setFormValues] = useState(null);

    const initialValues = {
        name: '',
        email: '',
        channelname: '',
        comments: '',
        address: ''
    };
    const savedValues = {
        name: 'Nuthan',
        email: 'nuthan@gmail.com',
        channelname: 'Content',
        comments: 'Please SUbscribe',
        address: 'Nizamabad'
    };
    const onSubmit = (values,onSubmitProps)=> {
        console.log(values);
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
    }
    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email format').required('Required'),
        channelname: Yup.string().required('Required'),
        comments: Yup.string().required("Required")
    })



    return (
        <Formik initialValues={formValues || initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnMount enableReinitialize   >
            {formik =>{
                // console.log('formik',formik)
                return( <Form >
                    <div className='form-control'>
                        <label htmlFor='name' >Name</label>
                        <Field type='text' id='name' name='name' />
                        {<ErrorMessage name='name' component={TextErrorrmsg}/>}
                    </div>
                    <div className='form-control'>
                        <label htmlFor='email' >Emai </label>
                        <Field type='email' id='email' name='email' />
                        {<ErrorMessage name='email' component={TextErrorrmsg}/>}
                    </div>
                    <div className='form-control'>
                        <label htmlFor='channelname' >channelname </label>
                        <Field type='text' id='channelname' name='channelname' />
                        {<ErrorMessage name='channelname' component={TextErrorrmsg}/>}
                    </div>
                    <div className='form-control'>
                        <label htmlFor='comments'>Comments</label>
                        <Field as='textarea' id='comments' name='comments' />
                        <ErrorMessage name='comments'>{(error)=><div className='error'>{error}</div>}</ErrorMessage>
                    </div>
                    <div className='form-control'>
                        <label htmlFor='address'>address</label>
                        <Field name="address">
                            {props => {
                                const {field,Form,meta}=props
                                return (<div><input type='text' id='address' {...field}/>
                                {meta.touched && meta.error ?<div>{meta.error}</div>:null}
                                </div>)
                            }}
                        </Field>
                    </div>
                    {/* 
                    used for button disable on valdation
                    <button type='submit'disabled={!formik.isValid}>submit</button> */}
                    <button type='button' onClick={()=>setFormValues(savedValues)}>Saved load button</button>
                    <button type='submit'disabled={formik.isSubmitting}>submit</button>

                </Form>)
            }}
           


        </Formik>
    )
}

export default RefractoringYform