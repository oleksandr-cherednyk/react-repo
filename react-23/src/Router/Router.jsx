import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { Register } from '../pages/Register/Register'
import { Login } from '../pages/Login/Login'
import { ProtectedRoute } from '../components/ProtectedRoute/ProtectedRoute'
import { Profile } from '../pages/Profile/Profile'

export const Router = () => {
  const routes = [
    { path: '/', component: <Home /> },
    { path: '/login', component: <Login /> },
    { path: '/register', component: <Register /> },
    {
      path: '/profile',
      component: (
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      ),
    },
  ]

  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.component}
        />
      ))}
    </Routes>
  )
}
