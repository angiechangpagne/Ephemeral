import React, {useState,useEffect } from "react"

function useFormValidation(initialState,validate){
    const [values,setValues]= useState(initialState)
    const [errors,setErrors] = useState({})
    const [isSubmitting, setSubmitting] = useState(false)


    useEffect(() => {
        if(isSubmitting){
            const noError = Object.keys(error).length === 0
        }
    })
}