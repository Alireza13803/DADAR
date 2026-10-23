import React from 'react'
import styles from './Error404.module.css'
const Error404 = () => {
  return (
    <>

      <div className={styles.container}>
        <div className={styles.box}>
          <p className={styles.error404}>404</p>
          <p>ما صفحه‌ای که دنبالش هستی رو نتونستیم پیدا کنیم!</p>
          <div className={styles.homeBtn}>صفحه اصلی</div>
          <div className={styles.rightObject}></div>
          <div className={styles.leftObject}></div>
        </div>
      </div>


      {/* <div className={styles.mainBox}>

      </div>
        <p>404</p>
        <p>ما صفحه‌ای که دنبالش هستی رو نتونستیم پیدا کنیم!</p>
        <div>صفحه اصلی</div> */}

        
    </>
  )
}

export default Error404