import React from 'react'
import styles from './WeekNews.module.css'
import NewsCard from '../../NewsCard/NewsCard';
const WeekNews = () => {
    const news = [1, 2, 3, 4];
  return (
        <div className={styles.weekNews}>
            <h1 className={styles.weekNewsTitle}>محبوب ترین دوره ها</h1>
            <p className={styles.weekNewsDetail}>دوره هایی که بین دانشجو های ما محبوبیت بالایی داشتند</p>
            <div className={styles.newsBox}>
                {
                    news.map(() => {
                        return(
                        <NewsCard/>  
                        )
                    })
                }
            </div>
        </div>  )
}

export default WeekNews