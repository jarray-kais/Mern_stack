import React from 'react'
import { Link } from 'react-router-dom'

const Username = () => {
  return (
    <div className='container mx-auto'>
        <div className='flex justify-center items-center h-screen'>
        <div>
            <div className='title flex flex-col items-center'>
            <h1 className='text-5xl font-bold'> hello</h1>
            <span className='py-4 text-xl text-center text-gray-500'>explore more by connecteing with us</span>
            <form className='py-1'>
                <div className='profile flex justify-center py-4'>
                    <img src='' alt='avatar'/>
                </div>
                <div className='texbox'>
                    <input 
                        type='text'
                        placeholder='Usename'
                    />
                    <button type='submit'>let's go</button>

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