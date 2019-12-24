import React from 'react';
import style from './Logo.module.css'
import { Link } from 'react-router-dom'

const Logo = (props) => {
  return (
  
    <Link to="/" className={style.logoText}>
      <p className={style.logoText}>
        <span className={style.netflix}>netlfix</span> roulette
      </p>
    </Link>
  );
}

export default Logo;