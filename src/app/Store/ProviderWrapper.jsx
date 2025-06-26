'use client'
import { useEffect } from "react"
import { Provider, useDispatch, useSelector } from "react-redux"
import Store from "./Store"

const ProviderWrapper = ({children}) => {
 
return (
    <Provider store={Store}>
       {children}
    </Provider>
)
}

export default ProviderWrapper;