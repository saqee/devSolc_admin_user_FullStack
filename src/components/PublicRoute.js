import React from "react"
import { Navigate, useNavigate } from "react-router-dom"

const PublicRoute = ({ children }) => {
  const navigate = useNavigate()
  if (!localStorage.getItem("token")) {
    return children
  } else {
    return navigate("/")
  }
}

export default PublicRoute
