import React from 'react'

const Register = () => {
    return (
        <div className=' w-full h-[100vh] flex items-center justify-center'>
            <div className=' font-semibold flex flex-col justify-start items-start bg-green-500 p-10 shadow-lg rounded-xl gap-y-8'>
                <h1 className=' text-4xl self-center font-bold'>
                    Register
                </h1>
                <div>
                    <h3>
                        Email
                    </h3>
                    <input type='text'>

                    </input>
                </div>
                <div>
                    <h3>
                        Password
                    </h3>
                    <input type='text'>

                    </input>
                </div>
                <div>
                    <h3>
                        Confirm password
                    </h3>
                    <input type='text'>

                    </input>
                </div>
                <p>Have an account?<br /> <a href='/login'>
                    Login
                </a></p>
                <button className=' self-center px-8 py-1 bg-white rounded-xl'>
                    Register
                </button>
            </div>
        </div>
    )
}

export default Register