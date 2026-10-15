import React from 'react'
import styles from './Header.module.css'
import bahr from './file/bahr.png';
import logoBahr from './file/logoBahr.png';


const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.logoBox}>
            <img className={styles.logoBahr} src={logoBahr} alt="" />
            <img className={styles.bahr} src={bahr} alt="" />
        </div>
        <div className={styles.menuBox}>
            <div>خانه</div>
            <div>دوره ها</div>
            <div>اخبار و مقالات</div>
            <div>ارتباط باما</div>
        </div>
        <div className={styles.btnBox}>
            <div className={styles.loginBtn}>ورود یا ثبت نام</div>
            <div className={styles.moonBtn}></div>
        </div>
    </div>
  )
}

export default Header