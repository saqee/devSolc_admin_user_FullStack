import React, { useEffect, useState, useMemo } from "react"
import { Button, Form, Input, message } from "antd"
import axios from "axios"
import { showLoading, hideLoading } from "../redux/features/alertSlice"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { userAdd } from "../redux/features/userSlice"
const UserProfile = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)

  const onFinish = async (values) => {
    try {
      dispatch(showLoading())
      const res = await axios.post(
        "/api/v1/user/updateProfile",
        {
          userId: params.id,
          ...values,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      message.success("profile updated")
      dispatch(hideLoading())
      dispatch(userAdd(res.data.data))
      window.location.reload()
    } catch (error) {
      message.error("something went wrong")
    }
  }

  return (
    <>
      <h4 className="text-center p-4">mY Profile</h4>
      <Form
        onFinish={onFinish}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={user}
      >
        <Form.Item label="Username" name="username">
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="Address" name="address">
          <Input />
        </Form.Item>
        <Form.Item label="phone Number" name="phonenumber">
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default UserProfile
