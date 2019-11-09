export default function validateLogin(values){
    let errors={}

    if(!values.email){
        errors.email="Email required"

    }else if(!/^[A-Z0-9.+%+-1]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email="Invalid email address"
    }
    if(!values.password){
        errors.password="Password requires"

    }else if(values.password.length<6){
        errors.password="Password must be at least 6 chars"
    }

    return errors

}