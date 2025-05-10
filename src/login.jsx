import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Cart() {
  const [pass, setPass] = useState(false);
  const [name, setName] = useState("");
  const [p_word, setP_word] = useState("");
  const [nameError , setNameError] = useState("")
  const [passError , setpassError] = useState("")
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const passwordvisiblity = () => {
    setPass(!pass);
  }
  
  // this for the form submit
  const handleSubmit = (e) =>{
    e.preventDefault();

    let valid = true;

    if(!name.trim()){
      setNameError("name require..!")
      valid = false
    }

    if(!p_word.trim()){
      setpassError("password require..!")
      valid = false
    }

    if(valid){
      console.log("userdata:",{name,p_word});
      setSubmitSuccess(true); 
    }
  }
  return (
    <>
      <main>
         {submitSuccess ? <div className="success">
            <h2>login success...😊</h2>
         </div> : 
           <form className="login" action="#" onSubmit={handleSubmit}>
           <h1>login</h1>
           <div className="value">
             <input
               value={name} 
               type="text"
               onChange={(e) => setName(e.target.value)}
             />
             <label className={`lab ${name ? "top" : ""}`} htmlFor="name">enter your user name*</label>
             {nameError && <p>{nameError}</p>}
             <div className="icon">
               <FaUser />
             </div>
           </div>
           <div className="value">
             <input
               type={`${pass ? "text" : "password"}`}
               onChange={(e) => setP_word(e.target.value)}
             />
             <label className={`lab ${p_word ? "top" : ""}`} htmlFor="password">enter your password*</label>
              {passError && <p>password required..!</p>}
             <div className="icon eye">
               {pass ? <FaRegEye onClick={passwordvisiblity} style={{ fontSize: "20px", cursor: "pointer" }} />
                 : <FaRegEyeSlash onClick={passwordvisiblity} style={{ fontSize: "20px", cursor: "pointer" }} />}
             </div>
           </div>
           <div className="f-btn">
             <div className="f-btn2">
               <button >login</button>
               <button>guest</button>
             </div>
             <div className="link">
               <Link to="/">forget pasword...?</Link>
               <Link to="sign-in">create account...!</Link>
             </div>
           </div>
         </form> 
         }
      </main>
    </>
  )
}