import React from 'react'
import ProductCard from '../../ProductCard/ProductCard'
import styles from './MostCourses.module.css'
const MostCourses = () => {
    const Products = [1, 2, 3, 4];

    return (
        <div className={styles.mostCourses}>
            <h1 className={styles.mostCoursesTitle}>محبوب ترین دوره ها</h1>
            <p className={styles.mostCoursesDetail}>دوره هایی که بین دانشجو های ما محبوبیت بالایی داشتند</p>
            <div className={styles.productBox}>
                {
                    Products.map(() => {
                        return(
                        <ProductCard/>  
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MostCourses