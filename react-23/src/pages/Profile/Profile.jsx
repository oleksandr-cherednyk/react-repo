import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout, resetState } from '../../store/authSlice'

export const Profile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { currentUser } = useSelector((state) => state.auth)

  const handleLogout = () => {
    dispatch(logout())        // чистим currentUser и localStorage
    dispatch(resetState())    // по желанию: сбросить сообщения/флаги
    navigate('/login')        // редирект на страницу авторизации
  }

  return (
    <div>
      <h1>User {currentUser.email} authorized</h1>

      <div>
        <p>Email: {currentUser.email}</p>
        <p>password: {currentUser.password}</p>
      </div>

      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
