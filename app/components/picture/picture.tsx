import React from 'react';
import styles from './picture.module.css'

const My_Picture = () => {
  return (
    <div>
      <img src="/my_picture.jpg" alt="A Picture of Me" className={styles.imgStyle}/>
    </div>
  );
}

export default My_Picture;
