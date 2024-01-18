import React from 'react'
import { Link } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik' 
import { resetPasswordValidation } from '../helper/validate'

import styles from '../styles/Username.module.css'

const Reset = () => {
    const formik = useFormik({
        initialValues : {
            password : 'admin@123',
            confirm_pwd : 'admin@123'
        },
        validate :resetPasswordValidation,
        validateOnBlur :false,
        validateOnChange :false,
        onSubmit : async values =>{
            console.log(values)
        }
    })
  return (
    <div className='container mx-auto'>
    <Toaster position='top-center' reverseOrder={false}></Toaster>
        <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass} style={{width : "50%"}}>
            <div className='title flex flex-col items-center'>
            <h1 className='text-5xl font-bold'> Reset</h1>
            <span className='py-4 text-xl text-center text-gray-500'>enter your password</span>

            <form className='py-20' onSubmit={formik.handleSubmit}>
                
                <div className='texbox flex flex-col items-center gap-6'>
                    <input {...formik.getFieldProps('password')} className={styles.textbox}
                        type='password'
                        placeholder='New password'
                    />
                     <input {...formik.getFieldProps('confirm_pwd')} className={styles.textbox}
                        type='password'
                        placeholder='Repeat password'
                    />
                  
                    <button className={styles.btn} type='submit'>Sign in</button>

                </div>
               


            </form>

            </div>
        </div>

        </div>


    </div>
  )
}

export default Reset