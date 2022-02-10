import { useState } from "react";
import MainLayout from "../components/homePage/MainLayout";
import axios from "axios";
import Head from 'next/head';

import { Mail, LocalPhone, LocationOn } from "@material-ui/icons";

import Popup from "../components/utils/popup";


const contact = () => {

    const [state, setState] = useState({
        email: "",
        name: "",
        message: ""
    });

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [showPopUp, setShowPopup] = useState(false);
    const [color, setColor] = useState("");

    const onNameChange = (e) => {
        setState((state) => ({
            ...state,
            name: e.target.value
        }))
        let namePattern = /^[a-zA-Z][a-zA-Z\s]*$/g;
        if (e.target.value !== "" && e.target.value !== null && isNaN(e.target.value)) {
            if (namePattern.test(e.target.value)) {
                e.persist();
                setState((state) => ({
                    ...state,
                    name: e.target.value
                }))
            } else {
                setNameError(true);
            }
        }
    }

    const onEmailChange = (e) => {
        setState((state) => ({
            ...state,
            email: e.target.value
        }))
        const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
        if (pattern.test(e.target.value)) {
            e.persist();
            console.log("hit here!");
            setState((state) => ({
                ...state,
                email: e.target.value
            }))
            // setEmail(mail);
            setEmailError(false);
        } else {
            setEmailError(true);
        }
    }

    const onMessageChange = (e) => {
        if (e.target.value !== "" || e.target.value !== null) {
            e.persist();
            setState((state) => ({
                ...state,
                message: e.target.value
            }))
            // setMessage(e.target.value);
            console.log("the message hit here!");
        } else {
            setMessageError(true);
        }

        if (nameError === false && emailError === false && messageError === false) {
            setIsDisabled(false);
        }
    }

    const onSubmit = (e) => {
        const { name, email, message } = state;
        e.preventDefault();
        console.log("its working");
        setLoading(true);
        console.log(messageError);
        console.log(emailError);
        console.log(nameError);
        if (nameError === false && emailError === false && messageError === false) {
            const data = {
                name,
                email,
                message,
                from: "my portfolio website"
            }
            console.log(data);
            setLoading(false);
            try {
                //"http://127.0.0.1:5000/api/v1/me"
                console.log(process.env.NEXT_PUBLIC_POST_API);
                axios.post(process.env.NEXT_PUBLIC_POST_API, data)
                    .then((res) => {
                        if (res.data.status === "success") {
                            console.log("here!");

                            setErrorMsg("sent successfully");
                            setColor("success");
                            setShowPopup(true);
                        }
                    })
                    .catch(err => {
                        setErrorMsg("server not reachable!");
                        setColor("danger");
                        setShowPopup(true);
                    })
            } catch (err) {
                setErrorMsg("unable to upload data!");
                setColor("danger");
                setShowPopup(true);
            }
        }
    };

    if (showPopUp)
        setTimeout(() => {
            setShowPopup(false);
        }, 5000);

    return <section>
        <Head>
            <title>say hello to mr zuby</title>
            <meta name="description" content="i'm open for consultation, mentoring, hire and gigs, just hit me up" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        {showPopUp && <Popup content={errorMsg} color={color} />}
        <MainLayout>
            <div className="contact">
                <div className="contact-box1">
                    <h2 className="contact-box1-header_text">
                        connect with me
                    </h2>
                    <div className="contact-box1-detail">
                        <Mail className="contact-box1-icon" />
                        <span>ikezuby2012@gmail.com</span>
                    </div>
                    <div className="contact-box1-detail">
                        <LocalPhone className="contact-box1-icon" />
                        <span> (+234) 906 031 1932</span>
                    </div>
                    <div className="contact-box1-detail">
                        <LocationOn className="contact-box1-icon" />
                        <span>chilling in mars 🚀🚀</span>
                    </div>
                </div>

                <div className="contact-box2">
                    <form noValidate className="contact_form" onSubmit={(e) => onSubmit(e)}>
                        <div className="contact_form-group">
                            <input type="text"
                                className="contact_form-input"
                                placeholder="name"
                                value={state.name}
                                id="name"
                                name="name"
                                onChange={(e) => onNameChange(e)}
                                required
                            />
                            <label htmlFor="name" className="contact_form-label">
                                your name
                            </label>
                            {nameError ? (<p className="contact-warningText">
                                please make sure your name only contain string e.g john doe
                            </p>) : ""}
                        </div>
                        <div className="contact_form-group">
                            <input type="email"
                                onChange={(e) => onEmailChange(e)}
                                className="contact_form-input"
                                placeholder="yourmail@mail.com"
                                id="email"
                                name="email"
                                value={state.email}
                                required
                            />
                            <label htmlFor="email" className="contact_form-label">
                                Email address
                            </label>
                            {emailError && (<p className="contact-warningText">
                                please enter a valid email!
                            </p>)}
                        </div>
                        <div className="contact_form-group">
                            <textarea
                                required
                                className="contact_form-input contact_form-input-text"
                                placeholder="Enter Your Message"
                                id="message"
                                name="message"
                                value={state.message}
                                onChange={(e) => onMessageChange(e)}
                            />
                            <label htmlFor="message" className="contact_form-label">
                                message
                            </label>
                            {messageError ? (<p className="contact-warningText">
                                please drop a message!
                            </p>) : ""}
                        </div>
                        <div className="contact_form_buttons">
                            <button className={`${isDisabled && "contact-disabled"} contact_form_btn btn btn-white`} type={"submit"} disabled={isDisabled}>
                                {/* {loading ? <div className="contact-button" /> : "send message"} */}
                                send message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </MainLayout>
    </section>
};

export default contact;


// // const [name, setName] = useState("");
// // const [email, setEmail] = useState("");
// // const [message, setMessage] = useState("");


// const validateEmail = (mail) => {

// }






// // const onChange = (e) => {

// //     setState({
// //         [e.target.id]: e.target.value
// //     });
// //     if (e.target.name === "name") {
// //         if (e.target.value !== "" && e.target.value !== null && isNaN(e.target.value)) {
// //             if (namePattern.test(e.target.value)) {

// //                 // setName(e.target.value)
// //                 setNameError(false);
// //                 console.log("ok from here");
// //             }
// //         }
// //     }
// //     if (e.target.name === "email") {
// //         e.persist();
// //         validateEmail(e.target.value);
// //     }
// //     if (e.target.name === "message") {

// //     }

// //     if (nameError === false && emailError === false && messageError === false) {
// //         setIsDisabled(false);
// //     }
// }

