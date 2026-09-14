'use client'
import './contact_form.css'
import { useState ,useRef, useEffect } from "react"

export default function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        msg: ""
    })

    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)

    const inputRef = useRef(null)

    useEffect(()=>{
        inputRef.current.focus()
    },[])

    function handleSubmit(e) {

        e.preventDefault()

        setError("")
        setSuccess(false)

     
            if (formData.name === "") {
                setError("Please Enter Your Name")
                return
            }
            if (formData.email === "" && !formData.email.includes("@")) {
                setError("Please Enter Your Email propelry")
                return
            }
            if (formData.msg === "") {
                setError("Please Enter Your Message")
                return
            }

            setSuccess(true)
       

            

        console.log({ formData })


        setFormData({
            name: "",
            email: "",
            msg: "",
        })
    }

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (

        <div className="contact_form">
            <h1>Contact Us</h1>

            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>

                        <tr>
                            <td>Name:</td>
                            <td>
                                <input type="text" name="name" value={formData.name}
                                    ref={inputRef}
                                    onChange={(handleChange)} />
                            </td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>
                                <input type="email" name="email" value={formData.email}
                                    onChange={(handleChange)} />
                            </td>
                        </tr>
                        <tr>
                            <td>Message:</td>
                            <td>
                                <textarea name="msg" value={formData.msg}
                                    onChange={(handleChange)} >
                                </textarea>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <input style={{ padding: "8px 28px", border: "1px solid #000", borderRadius: "30px", cursor: "pointer" }} type="submit" value="Submit" />
                            </td>
                        </tr>
                    </tbody>

                </table>
            </form>

            {error && (
                <p style={{color: "red"}}>{error}</p>
            )}

            {success && (
                <p style={{color: "Green"}}>Form Submitted Successfullyy!!!!</p>
            )}
        </div>
    )
}