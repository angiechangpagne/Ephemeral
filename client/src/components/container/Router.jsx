import React from './node_modules/react'
import {BrowserRouter ,Switch, Route, Redirect} from './node_modules/react-router-dom'
import Dashboard from '../container/Dashboard'
import CreateLink from './Link/CreateLink'
import LinkList from './Link/LinkList'
import SearchLinks from './Link/SearchLinks'
import Login from './Auth/Login'
import ForgotPassword from './Auth/ForgotPassword'
import LinkDetail from './Link/LinkDetail'
import Header from './Header'
export const getRouter =() =>{
    return (
        <BrowerRouter> 
            <Dashboard/>
        </BrowserRouter>

    )
}