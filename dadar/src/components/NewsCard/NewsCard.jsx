import React from 'react'
import styles from './NewsCard.module.css'

const NewsCard = () => {
  return (
    <div className={styles.newsBox}>
        <div className={styles.newsPic}></div>
        <div className={styles.newsContent}>
            <p className={styles.newsName}>ری اکت چیست و چرا باید ازش استفاده کنیم؟</p>
            <p className={styles.newsDetail}>ری اکت (React) یک کتابخانه جاوا اسکریپتی برای ساخت رابط کاربری بوده که برای ایجاد برنامه‌های تحت وب با استفاده از کامپوننت‌ها، قابل استفاده است.</p>
            <p className={styles.newsWriter}>سعید قربانی</p>
            <p className={styles.newsViewCount}>225</p>
            <div className={styles.newsMoreContent}>
                <div className={styles.likeBox}>
                    <div className={styles.likeBtn}>
                        <div className={styles.like}></div>
                        <span>22</span>
                    </div>
                    <div className={styles.dislikeBtn}>
                        <div className={styles.dislike}></div>
                        <span>1</span>
                    </div>
                </div>
                <div className={styles.readMore}>بیشتر بخوانید</div>
            </div>
        </div>
    </div>
  )
}

export default NewsCard