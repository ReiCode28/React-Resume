import React, { useState, useEffect } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './Resume.css'

export default function Resume(props) {
    /* STATES */
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carouselOffsetStyle, setCarouselOffsetStyle] = useState({});

    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen !== props.id)
        return;
        Animations.animations.fadeInScreen(props.id)
      };
      const fadeInSubscription = 
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    /* REUSEABLE MINOR COMPONENTS */  
    const ResumeHeading = (props) =>{
        return (
        <div className='resume-heading'>
            <div className='resume-main-heading'>
                <div className='heading-bullet'></div>
                    <span>{props.heading ? props.heading : ''}</span>
                    {props.fromDate && props.toDate ?(
                        <div className='heading-date'>
                            {props.fromDate + "_" + props.toDate}
                        </div>
                    ): (
                        <div></div>
                    )}
                </div>
                <div className='resume-sub-heading'>
                    <span>{props.subHeading ? props.subHeading : ''}</span>
                </div>
                <div className='resume-heading-description'>
                    <span>{props.description ? props.description : ''}</span>
                </div>
            </div>
        );
    };

    /* STATIC RESUME DATA FOR THE LABELS */
    const resumeBullets =[
        {label: "Education", logoSrc: "education.svg"},
        {label: "Work History", logoSrc: "work-history.svg"},
        {label: "Programming Skills", logoSrc: "programming-skills.svg"},
        {label: "Projects", logoSrc: "projects.svg"},
        {label: "Interests", logoSrc: "interests.svg"},

    ];

    const programmingSkillsDetails = [
        {skill: "Core Java", ratingPercentage: 85},
        {skill: "Spring Boot", ratingPercentage: 85},
        {skill: "ReactJS", ratingPercentage: 85},
        {skill: "ExpressJS", ratingPercentage: 85},
        {skill: "HTML", ratingPercentage: 85},
        {skill: "CSS", ratingPercentage: 85},
        {skill: "Version Control", ratingPercentage: 85},
        {skill: "SQL", ratingPercentage: 85},

    ];
    const projectsDetails = [
        {
            title: "Personal Portfolio Website",
            duration: {fromDate: "2022", toDate: "2022"},
            description: 
            "A full stack Personal Portfolio website to showcase my resume details, skills and projects in one place. The app is mobile responsive with email functionality. ",
            subHeading: 
            "Technologies Used: React JS, NodeJS, Express, CSS, HTML, Bootstrap",
        },
        {
            title: "Blog Application",
            duration: {fromDate: "2022", toDate: "2022"},
            description: 
            "Collaborated with 4 software engineers to create a full stack web application that allows users to create, read, update and delete blog posts within a community.  The app conforms to the REST architectural style and leverages the MVC design pattern.",
            subHeading: 
            "Technologies Used: MongoDB, ExpressJS, ReactJS, NodeJS",
        },
        {
            title: "Covid Tracker",
            duration: {fromDate: "2022", toDate: "2022"},
            description: 
            "A web app that tracks public reported data of confirmed covid cases globally; raw data is puled from a repo that is updated and maintained on a daily bases by John Hopkins University; parsed, formatted and rendered in a user interface.",
            subHeading: 
            "Technologies Used: Spring Boot, Java, Thymeleaf, Commons CSV, Bootstrap",
        },
    ];

    const resumeDetails = [
        <div className='resume-screen-container' key="education">
            <ResumeHeading
            heading={"Zip Code Wilmington"}
            subHeading={"12 Week Intensive Coding Bootcamp"}
            fromDate={"2022"}
            toDate={"2022"}
            />

            <ResumeHeading
            heading={"James H. Groves High School"}
            subHeading={"High School Diploma"}
            fromDate={"2012"}
            toDate={"2012"}
            />
        </div>,

        /* WORK EXPERIENCE */
        <div className='resume-screen-container' key="work-experience">
            <div className='experience-container'>
            <ResumeHeading
            heading={"Zip Code Wilmington"}
            subHeading={"Software Engineer"}
            fromDate={"2022"}
            toDate={"Present"}
            />
            <div className='experience-description'>
                <span className='resume-description-text'>
                    Currently continuing my education, practicing what I've learned during the bootcamp and collaborating on projects with friends made in the bootcamp.
                </span>
            </div>
            <div className='experience-description'>
                <span className='resume-description-text'>
                - Utilized Agile and Scrum methodologies in 1000+ hours of software development projects 
                </span>
                <br />
                <span className='resume-description-text'>
                - Gained experience with multiple object-oriented programming languages and frameworks
                </span>
                <br/>
                <span className='resume-description-text'>
                - Collaborated in teams of up to 6 sofware developers to build web applications
                </span>
                <br/>
            </div>
        </div>
    </div>,


            /* PROGRAMMING SKILLS */        
            <div 
            className='resume-screen-container programming-skills-container'
            key="programming-skills"
            >
                {programmingSkillsDetails.map((skill, index)=>(
                    <div className='skill-parent' key={index}>
                        <div className='heading-bullet'></div>
                        <span>{skill.skill}</span>
                        <div className='skill-percentage'>
                            <div 
                            style={{width: skill.ratingPercentage + "%"}}
                            className='active-percentage-bar'
                            ></div>
                        </div>
                    </div>
                ))}
            </div>,

            /* PROJECTS */
            <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

            /* INTERESTS */
            <div className="resume-screen-container" key="interests">
                <ResumeHeading
                heading='Electronic Tinkering'
                description='Accepting everything at face value is boring. Discovering how it works, what clever tricks were pulled to make it work, and how it can be improved - is fascinating to me. I strive to understand how things work.'
                />
                <ResumeHeading
                heading='Self Taught Auto Mechanic'
                description='I am a fixer at heart. When things break down, I take on the challenge to document, troubleshoot, diagnose and repair them. I see value and potential in the broken things and have found many similarities between being a Software Programmer and an Auto Mechanic. For example, when you build a program from start to finish, and it compiles, runs, and passes all your tests, it’s a very similar feeling to when you get the engine back into the car, turn the key and it hums to life, good as new. '
                />
                <ResumeHeading
                heading='Reading'
                description='Reading is like creating a window in a room within four brick walls. Every time you take a look through the window, you learn something new about the outside world. You can look out at whatever you wish and learn about whatever you would like. The more you read, the more windows open up within the brick walls until eventually there are no bricks left and the room has expanded; full of everything you have chosen to learn. '
                />
                {/* <ResumeHeading
                heading='Video Games'
                description='I enjoy playing video games not only because it is entertaining but also because it bolsters creativity, problem solving skills, competitiveness, and team work. '
                /> */}
        </div>,
    ];

    const handleCarousel =(index)=>{
        let offsetHeight = 360;

        let newCarouselOffset ={
            style: {transform: "translateY("+ index * offsetHeight * -1 +"px)"},
        };
        setCarouselOffsetStyle(newCarouselOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = () => {
        return resumeBullets.map((bullet, index)=>(
            <div 
            onClick={()=>handleCarousel(index)}
            className={
                index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
            }
            key={index}
            >
                <img 
                className='bullet-logo'
                src={require(`../../assets/Resume/${bullet.logoSrc}`)}
                alt='oops... No internet connection.'
                />
                <span className="bullet-label">{bullet.label}</span>
            </div>
        ));
    };

    const getResumeScreen =()=>{
        return (
            <div
            style ={carouselOffsetStyle.style}
            className='resume-details-carousel'
            >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        );
    };

    useEffect(() =>{
        return () => {
        /* UNSUBSCRIBE THE SUBSCRIPTIONS */
        fadeInSubscription.unsubscribe();
        };
    }, [fadeInSubscription]);
    
  return (
    <div 
    className='resume-container screen-container fade-in' 
    id ={props.id || ""}
    >
        <div className='resume-content'>
            <ScreenHeading title={'Resume'} subHeading={'My Formal Bio'}/>
            <div className='resume-card'>
                <div className='resume-bullets'>
                    <div className='bullet-container'>
                        <div className='bullet-icons'></div>
                        <div className='bullets'>{getBullets()}</div>
                    </div>
                </div>

                <div className='resume-bullet-details'>{getResumeScreen()}</div>
            </div>
        </div>
    </div>
  );
};

