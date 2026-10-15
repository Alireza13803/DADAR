import React from 'react'
import styles from './ProductCard.module.css'

const ProductCard = () => {
  return (
    <div className={styles.productBox}>
        <div className={styles.productPic}></div>
        <div className={styles.productContent}>
            <p className={styles.productName}>ری‌اکت جی‌اس</p>
            <p className={styles.productDetail}>آموزش صفر تا صد کتابخانه پرطرفدار جی‌اس یعنی ری‌اکت همراه تسک های م...</p>
            <p className={styles.productTeacher}>محسن اسفندیاری , مهدی اصغری</p>
            <p className={styles.productDate}>20 اردیبهشت 1403</p>
            <p className={styles.productCount}>80 دانشجو</p>
            <p className={styles.productPriceContent}>
                <div className={styles.productPriceBox}>
                    <span>1,800,000</span>
                    <span>تومان</span>
                </div>
                <div></div>
            </p>

        </div>
    </div>
  )
}

export default ProductCard