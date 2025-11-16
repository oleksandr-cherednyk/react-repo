import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { resetState } from '../../store/authSlice'
import styles from './Navbar.module.css'

export const Navbar = () => {
  const dispatch = useDispatch()

  return (
    <nav className={styles.nav}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </nav>
  )
}
