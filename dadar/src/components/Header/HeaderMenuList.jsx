import React from 'react'
import { Link } from "react-router-dom";

const HeaderMenuList = ({pageName, pageRouter}) => {
  return (
    <Link to={pageRouter}>{pageName}</Link>
)
}

export default HeaderMenuList