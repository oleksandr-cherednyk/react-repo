import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({ children }) => {
  const currentUser = localStorage.getItem('currentUser')
  return currentUser ? children : <Navigate to="/login" />
}
