import React from 'react'
import styles from './Logo.module.css'
import logoImage from '../../assets/logo.svg';

export default function Logo() {
  return (
    <div className={styles.logo}>
        <img src={logoImage} alt="logo" className={styles.logoImage}/>
    </div>
  )
}
