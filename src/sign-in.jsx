import React, { useState } from "react";
import './sign.css';
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
export default function Sign() {
    const [pass, setPass] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [p_word, setP_word] = useState("");
    const [confrom, setconform] = useState("");
    const [nameError, setNameError] = useState("")
    const [passError, setpassError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [confromError, setconformError] = useState("")
    const [submitSuccess, setSubmitSuccess] = useState(false);
    // this for the passwordvisible
    const passwordvisiblity = () => {
        setPass(!pass)
    }
    // this for the for the value
    const handle = (e) => {
        e.preventDefault();

        let valid = true;

        if (!name.trim()) {
            setNameError("name require...!")
            valid = false
        }

        if (!email.trim()) {
            setEmailError("email require...!")
            valid = false
        }

        if (!p_word.trim()) {
            setpassError("password require...!")
            valid = false
        }
          console.log(valid)
        // this for the final validation

        if (valid) {
            console.log("userdata :", { name, email, p_word, confrom })
            setSubmitSuccess(!submitSuccess);
        }
    }
    return (
        <>
            <main>
                {submitSuccess ? <div className="success">
                    <h2>sign-in success...😊</h2>
                </div> :
                    <form className="sign-in login" action="" onSubmit={handle}>
                        <div>
                            <h1 className="text-center">sign-in</h1>
                        </div>
                        {/* this for the name */}
                        <div className="value">
                            <input type="text"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label className={`lab ${name ? "top" : ""}`} htmlFor="name">enter your name*</label>
                            {nameError && <p>{nameError}</p>}
                            <div className="icon">
                                <FaUser />
                            </div>
                        </div>
                        {/* this for the email */}
                        <div className="value">
                            <input type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label className={`lab ${email ? "top" : ""}`} htmlFor="name">enter your email*</label>
                            {emailError && <p>{emailError}</p>}
                            <div className="icon">
                                <MdEmail />
                            </div>
                        </div>
                        {/* this for the email */}
                        <div className="value">
                            <input type={`${pass ? 'text' : "password"}`}
                                onChange={(e) => setP_word(e.target.value)}
                            />
                            <label className={`lab ${p_word ? "top" : ""}`} htmlFor="name">enter the password*</label>
                            {passError && <p>{passError}</p>}
                            <div className="icon">
                                {pass ? <FaEye onClick={passwordvisiblity} style={{ cursor: "pointer" }} />
                                    : <FaEyeSlash onClick={passwordvisiblity} style={{ cursor: "pointer" }} />}
                            </div>
                        </div>
                        {/* this for the email */}
                        <div className="value">
                            <input type="text"
                                value={p_word}
                                onChange={(e) => setconform(e.target.value)}
                            />
                            <label className={`lab ${p_word ? "top" : ""}`} htmlFor="name">confrom password*</label>
                            {/* {confromError && <p>{confromError}</p>} */}
                            <div className="icon">
                                <FaEye />
                            </div>
                        </div>
                        <div className="f-btn2 btn-c d-flex gap-3">
                            <button >sign-in</button>
                            <button>guest</button>
                        </div>
                        <div className="link lnk2 text-center">
                            <Link to="/">if you already have account...!</Link>
                        </div>
                    </form>
                }
            </main>
        </>
    )
}