import React from 'react'
import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.logoBox}>
            <img src="file/bahr.png" alt="" />
            <img src="file/logoBahr.png" alt="" />
        </div>
        <div className={styles.menuBox}>
            <div>خانه</div>
            <div>دوره ها</div>
            <div>اخبار و مقالات</div>
            <div>ارتباط باما</div>
        </div>
        <div className={styles.btnBox}></div>
    </div>
  )
}

export default Header