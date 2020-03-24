import React from 'react';
import Madlib from '../containers/Madlib';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import styles from './App.css';


export default function App() {
  return (
    <>
      <Header className={styles.App} /> 
      <Madlib /> 
      <Footer className={styles.App} />
    </>
  );
}
