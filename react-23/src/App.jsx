import { Router } from './Router/Router'
import styles from './App.module.css'
import { useEffect } from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function App() {
  const { currentUser } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  useEffect(() => {
    if (currentUser) {
      navigate('profile')
    }
  }, [])
  return (
    <div className={styles.app}>
      <Navbar />
      <Router />
    </div>
  )
}

export default App
