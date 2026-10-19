import React, { Fragment } from 'react'
import AboutCss from './AboutUs.module.css'
import { GoArrowUpLeft } from "react-icons/go";
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
            <h2 className={AboutCss.SummerCourseTitle} > دوره های جدید تابستانه! </h2>
            <GoArrowUpLeft className={AboutCss.SummerCourseTitleGoArrowUpLeft} color='black' size={24} />
          </div>
          <p className={AboutCss.SummerCourseP} > شروع دوره های جدید<br/> مبتدی و پیشرفته برای<br/> همین تابستان </p>
        </div>
        <div className={AboutCss.ReadMoreAboutUs} >
          <div className={AboutCss.ReadMoreAboutUsTop} >
            <p className={AboutCss.ReadMoreAboutUsTopP} > درباره ما <br/>بیشتر بخوانید </p>
            <GoArrowUpLeft className={AboutCss.ReadMoreAboutUsGoArrowUpLeft} color='white' size={24} />
          </div>
          <div className={AboutCss.ReadMoreAboutUsMiddle} >
            <p style={{margin:'15px'}} > <b style={{
              fontSize:'32px'
            }} > 1000+ </b> <br/> دانشجو آنلاین در دوره </p>
          </div>
          <div className={AboutCss.ReadMoreAboutUsDown} >
            <p style={{margin:'15px'}} > <b style={{
              fontSize:'32px'
            }} > 13+ </b> <br/> سال سابقه آموزش تخصصی </p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default AboutUs
