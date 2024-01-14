import React from "react"
import { useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"

const PrivateRouteAdmin = ({ children }) => {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.user)
  if (user?.isAdmin) {
    return children
  } else {
    console.log("admin error")
  }
}

export default PrivateRouteAdmin
