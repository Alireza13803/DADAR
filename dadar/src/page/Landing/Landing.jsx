import React from 'react'
import AboutUs from "../../components/landing/aboutUs/AboutUs";
import Certificate from "../../components/landing/certificate/Certificate";
import WeekNews from '../../components/landing/WeekNews/WeekNews';
import MostCourses from '../../components/landing/MostCourses/MostCourses';


const Landing = () => {
  return (
    <div>
      <AboutUs />
      <Certificate />
      <MostCourses/>
      <WeekNews/>
    </div>
  )
}

export default Landing
