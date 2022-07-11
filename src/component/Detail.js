import React,{ createContext, useState } from 'react'
import { useEffect } from 'react'

export const store=createContext()

const Detail = (props) => {
    const [detail,setDetail]=useState([])
    
    useEffect(()=>{
        const serverApi="https://serverblogapp.herokuapp.com/api/details"
        fetch(serverApi).then(res => res.json()).then(result => setDetail(result) )
    })
    
    
  return (
    <div>

        <store.Provider value={[detail,setDetail]}>

        {props.children}

        </store.Provider>

    </div>
  )
}

export default Detail