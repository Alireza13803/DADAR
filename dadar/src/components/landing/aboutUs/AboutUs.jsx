import React, { Fragment } from 'react'
import AboutCss from './AboutUs.module.css'

const AboutUs = () => {
  return (
    <Fragment>
      <div className={AboutCss.About}>
        <div className={AboutCss.DedicatedStudentPanel} >
          <p className={AboutCss.StudentPanel} > پنل اختصاصی دانشجو </p>
          <p className={AboutCss.StudentPanelP} > پنل های اختصاصی دانشجویی<br/> برای مدیریت دوره و تمرین ها </p>
        </div>
        <div className={AboutCss.SummerCourse} >
          <div className={AboutCss.SummerCourseTop} >
            <h2 className={AboutCss.SummerCourseTitle} > دوره های جدید تبستانه! </h2>
            
          </div>
        </div>
        <div className={AboutCss.ReadMoreAboutUs} ></div>
      </div>
    </Fragment>
  )
}

export default AboutUs
