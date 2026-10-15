import React from 'react'
import styles from './Header.module.css'
const Header = () => {
  return (
    <div className='header'>
        <div className='logoBox'>
            <img src="file/bahr.png" alt="" />
            <img src="file/logoBahr.png" alt="" />
        </div>
        <div className='menuBox'>
            <div>خانه</div>
            <div>دوره ها</div>
            <div>اخبار و مقالات</div>
            <div>ارتباط باما</div>
        </div>
        <div className='btnBox'></div>
    </div>
  )
}

export default Header