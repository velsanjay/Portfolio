import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { Button, Input, TextField } from '@mui/material'; 
import SendIcon from '@mui/icons-material/Send';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';

function Contact() {
    const form = useRef();
    

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('default_service', 'template_wh20mdn', form.current, 'XvuttI8guIGVDozXe')
            .then((result) => {
                console.log(result.text);
                console.log('messege Send');
                toast.success('Email Send Successfully')
            }, (error) => {
                console.log(error.text);
                toast.error('Email Not Valid')
            });
            let a=document.querySelectorAll('input')
           for(let i of a){
            i.value='';
           }

    }

    

    return <>
        <div id='form'>
            <h1>Contact Me</h1>
            <form className='form' ref={form} onSubmit={sendEmail}>

                <TextField
                className='textfield'
                    type="text"
                    fullWidth
                    id="outlined-basic a"
                    name='user_name'
                    label="Name"
                    variant="outlined"
                    required
                />
              
              <TextField
                className='textfield'
                type="email"
                    fullWidth
                    id="outlined-basic b"
                    name="user_email"
                    label="Email"
                    variant="outlined"
                    required
                />
                
                <TextField
                className='textfield'
                type="text"
                    fullWidth
                    id="outlined-basic c"
                    name="message"
                    label="Messege"
                    variant="outlined"
                    required
                />

<Button  className='button' type="submit" value="Send" variant="contained" endIcon={<SendIcon />}>
  Send
</Button>

            </form>
        
  </div>
        
        <div className='arrow'>
    <a href='#'><FontAwesomeIcon icon={faAngleUp} size="2xl" style={{color: "#fff",}} /></a>
  </div>
    </>
}

export default Contact;