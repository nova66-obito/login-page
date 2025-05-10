import React from 'react'
import './App.css'
import Login from "./login";
import Sign from "./sign-in";
import { BrowserRouter, Route, Routes,Router } from 'react-router-dom'
export default function App (){
   return(
      <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='sign-in' element={<Sign/>}/>
            </Routes>
        </BrowserRouter>
      </>
   )
}