import React, { useState } from 'react'
import Typical from 'react-typical'
import imgBack from '../../../src/images/mailz.jpeg'
import load1 from '../../../src/images/load2.gif'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'



export default function ContactMe(props) {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };
      const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

        const [name, setName] = useState("")
        const [email, setEmail] = useState("")
        const [message, setMessage] = useState("")
        const [banner, setBanner] = useState("")
        const [bool, setBool] = useState(false)

        const handleName = (e)=>{
            setName(e.target.value);
        };
        const handleEmail = (e)=>{
            setEmail(e.target.value);
        };
        const handleMessage = (e)=>{
            setMessage(e.target.value);
        };
        console.log(name);


  return (
    <div className='main-container' id={props.id || ''}>
        <ScreenHeading
        subHeading={"Let's keep in touch"}
        title={'Contact Me'}
        />
        <div className='central-form'>
            <div className='col'>

            <h2 className='title'>
                {" "}
                 <Typical 
                    oop={Infinity}
                    steps={[
                    "Get in touch 📧",
                    1500,
                ]}
                />
                </h2>
                <a href='https://www.linkedin.com/in/randy-reina'>
                        <i className='fa fa-linkedin-square'></i>
                    </a>
                    <a href='https://github.com/ReiCode28'>
                        <i className='fa fa-github-square'></i>
                    </a>
            </div>
            <div className='back-form'>
                <div className='img-back'>
                    <h4>Send your Email here!</h4>
                    <img src={imgBack} alt='image not found'/>
                </div>
                <form>

                    <p>{banner}</p>
                    <label htmlFor='name'>Name</label>
                    <input type='text'
                    onChange={handleName}
                    value={name}
                    />

                    <label htmlFor='email'>Email</label>
                    <input type='email'
                    onChange={handleEmail}
                    value={email}
                    />

                    <label htmlFor='message'>Message</label>
                    <textarea type='submit'
                    onChange={handleMessage}
                    value={message}
                    />

                    <div className='send-btn'>
                        <button>
                            <button type='submit'>
                                send
                                <i className='fa fa-paper-plane'/>
                            </button>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
