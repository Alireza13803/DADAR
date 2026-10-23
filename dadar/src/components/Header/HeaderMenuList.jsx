import React from 'react'

const HeaderMenuList = ({pageName, pageRouter}) => {
  return (
    <Link to={pageRouter}>{pageName}</Link>
)
}

export default HeaderMenuList