import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/profile.png'
//import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik' 

import styles from '../styles/Username.module.css'

const Username = () => {
    const formik = useFormik({
        initialValues : {
            username : ''
        },
        validateOnBlur :false,
        validateOnChange :false,
        onSubmit : async values =>{
            console.log(values)
        }
    })
  return (
    <div className='container mx-auto'>
        <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass}>
            <div className='title flex flex-col items-center'>
            <h1 className='text-5xl font-bold'> hello</h1>
            <span className='py-4 text-xl text-center text-gray-500'>explore more by connecteing with us</span>
            <form className='py-1' onSubmit={formik.handleSubmit}>
                <div className='profile flex justify-center py-4'>
                    <img src={avatar} className={styles.profile_img} alt='avatar'/>
                </div>
                <div className='texbox flex flex-col items-center gap-6'>
                    <input {...formik.getFieldProps('username')} className={styles.textbox}
                        type='text'
                        placeholder='Usename'
                    />
                    <button className={styles.btn} type='submit'>let's go</button>

                </div>
                <div className='text-center py-4'>
                    <span className='text-gray-500'>Not a member <Link className='text-red-500' to='/register'>register Now</Link></span>
                </div>


            </form>

            </div>
        </div>

        </div>


    </div>
  )
}

export default Username