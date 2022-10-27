import React from 'react';
import Typical from 'react-typical';
import "./Profile.css";

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                    <a href='https://www.linkedin.com/in/randy-reina'>
                        <i className='fa fa-linkedin-square'></i>
                    </a>
                    <a href='https://github.com/ReiCode28'>
                        <i className='fa fa-github-square'></i>
                    </a>
                    </div>
                </div>
                <div className="profile-details-name">
                    <span className="primary-text">
                        {" "}
                        Hello, I'm <span className="highlighted-text">Randy</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            {" "}
                            <Typical 
                            loop={Infinity}
                            steps={[
                                "Creative 👨‍🎨",
                                1500,
                                "Visionary 😎",
                                1500,
                                "Passionate ❤️‍🔥",
                                1500,
                                "Life-long learner 📚",
                                1500,
                                "Critical Thinker 🧠",
                                1500,
                            ]}
                            />
                        </h1>
                        <span className='profile-role-tagline'> 
                            Building applications with front end and back end operations.
                        </span> 
                    </span>
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn'>
                        {""}
                        Hire Me{" "}
                    </button>
                    <a href='RandyR_ResumeUpdated.pdf' download='RandyR_ResumeUpdated.pdf'>
                    <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'>

                </div>
            </div>
        </div>
    </div>
  )
}
