import React from 'react';
import style from './Logo.module.css'

export const Logo = (props) => {
  return (
    <p className={style.logoText}>
      <span className={style.netflix}>netlfix</span> roulette
    </p>
  );
}