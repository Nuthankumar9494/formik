import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextErrorrmsg from './TextErrorrmsg';

const RefractoringYform = () => {
    const initialValues = {
        name: '',
        email: '',
        channelname: '',
        comments: '',
        address: ''
    };
    const onSubmit = values => {
        console.log(values);
    }
    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email format').required('Required'),
        channelname: Yup.string().required('Required'),
        comments: Yup.string().required("Required")
    })



    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form >
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
                <button type='submit'>submit</button>
            </Form>


        </Formik>
    )
}

export default RefractoringYform