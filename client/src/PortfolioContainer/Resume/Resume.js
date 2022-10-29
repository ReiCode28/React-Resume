import React, { useState } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'

export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carouselOffSetStyle, setCarouselOffSetStyle] = useState({});

    const ResumeHeading = (props) =>{
        <div className='resume-heading'>
            <div className='resume-main-heading'>
                <div className='heding-bullet'>
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
        </div>
    }

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

    ];
    const projectDetails = [
        {
            title: "Personal Portfolio Website",
            duration: {fromDate: "2022", toDate: "2022"},
            description: "A Personal Portfolio website to showcase all my details and projects in one place",
            subHeading: "Technologies Used: React JS, Bootstrap"
        },
        {
            title: "Blog Application",
            duration: {fromDate: "2022", toDate: "2022"},
            description: "A web application that allows users to create and share blog posts within its community.",
            subHeading: "Technologies Used: MongoDB, ExpressJS, ReactJS, NodeJS",
        },
        {
            title: "Covid Tracker",
            duration: {fromDate: "2022", toDate: "2022"},
            description: "A web app that tracks reported data of confirmed covid cases globally",
            subHeading: "Technologies Used: Spring Boot, Java, Thymeleaf, Commons CSV, Bootstrap",
        }
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
        <div className='resume-screen-container' key="work-experience">
            <ResumeHeading
            heading={"Zip Code Wilmington"}
            subHeading={"Software Engineer"}
            fromDate={"2022"}
            toDate={"present"}
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
                <br/>
                <span className='resume-description-text'>
                - Gained experience with multiple object-oriented programming languages and frameworks
                </span>
                <br/>
                <span className='resume-description-text'>
                - Collaborated in teams of up to 6 sofware developers to build web applications
                </span>
            </div>
        </div>
    ];



    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)
      }
      const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  return (
    <div className='resume-container screen-container' id ={props.id || ""}>
        <div className='resume-content'>
            <ScreenHeading title={'Resume'} subHeading={'My Formal Bio'}/>
        </div>
      
    </div>
  )
}
