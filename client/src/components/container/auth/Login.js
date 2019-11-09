import React from "react"
import useFormValidation from "./useFormValidation"
import validateLogin from './validateLogin'

const INITIAL_STATE={
    name:'',
    email:'',
    password:''
}
//blur change add a css particles with headlines to make users want to sign up and create account. 


function Login(props){
    const {handleChange,
            handleSubmit,
            handleBlur,
            values,
            errors,
            isSubmitting
        } = useFormValidation(INITIAL_STATE, validateLogin)
        const [login,setLogin]=React.useState(true)

        return (
            <div>
                <h2 className=''>
                    {login ? "Login" : "Create Accoun"}
                </h2>
                <form onSubmit={handleSubmits}
                className='flex flex-column'>
                    {!login && 
                    <input type="text"
                    onChange={handleChange}
                    onBlue={handleBlur}
                    name="name"
                    value={values.name}
                    placeholder='Your Name'
                    autoComplete='off'
                    />}
                    <input 
                    type="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.email}
                    name="email"
                    placeholder="Your Email"
                    autoComplete='off'
                    className={errors.email && "error-input"}
                    />

                    <input
                     name="password"
                     type='password'
                     value={values.password}
                     onBlur={handleBlur}
                     onChange={handleChange}
                     placeholder="Choose a good password"
                     className={errors.password && "error-password"}
                     />
                     {errors.password && <p className="error-text">{errors.password}</p>}
                     <div className='flex mt3'>
                         <button
                         type='submit'
                         className='btton pointer mr2'
                         disabled={isSubmitting}
                         style={{background:isSubmitting ? "grey" : "white"}}
                         >
                             {login ? "Create Accound?": "Already have one?"}

                         </button>
                     </div>
                </form>
            </div>
        )
}

export default Login