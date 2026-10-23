import React, {useState} from 'react'
import styles from './Header.module.css'
import bahr from './file/bahr.png';
import logo from './file/logo.png';
import HeaderMenuList from './HeaderMenuList';


const Header = () => {
    const   [menuState, setmenuState] = useState([
        {id: 1, name: "خانه", pageRoute: "/"},
        {id: 2, name: "دوره ها", pageRoute: "/courses"},
        {id: 3, name: "اخبار و مقالات", pageRoute: "/news"},
        {id: 4, name: "ارتباط باما", pageRoute: "/contact-us"}
    ])
  return (
    <div className={styles.header}>
        <div className={styles.logoBox}>
            <img className={styles.logo} src={logo} alt="" />
            <img className={styles.bahr} src={bahr} alt="" />
        </div>
        <div className={styles.menuBox}>
            {
                menuState.map((item, index) => {
                    return(
                        <HeaderMenuList key={index} pageName={item.name} pageRouter={item.pageRoute}/>
                    )
                })
            }
        </div>
        <div className={styles.btnBox}>
            <div className={styles.moonBtn}></div>
            <div className={styles.loginBtn}>ورود یا ثبت نام</div>
        </div>
    </div>
  )
}

export default Header