import React from 'react'
import {Helmet} from "react-helmet"

const data = ({title}) => {
  return (
   <Helmet>
(<title>{title}</title>)
   </Helmet>
)
}

export default data
