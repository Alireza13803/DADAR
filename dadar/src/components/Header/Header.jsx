import React from 'react'
import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.logoBox}>
            <img src="file/bahr.png" alt="1" />
            <img src="file/logoBahr.png" alt="2" />
        </div>
        <div className={styles.menuBox}>
            <div>خانه</div>
            <div>دوره ها</div>
            <div>اخبار و مقالات</div>
            <div>ارتباط باما</div>
        </div>
        <div className={styles.btnBox}>
            <div>ورود یا ثبت نام</div>
            <div></div>
        </div>
    </div>
  )
}

export default Header