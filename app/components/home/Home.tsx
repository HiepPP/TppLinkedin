import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';
import styles from '../../styles/main.css';

export default function Home() {
  return (
    <div className={styles.container} data-tid="container">
      <h2>TPP Linkedin</h2>
      <Link to={routes.DASHBOARD}>to Dashboard</Link>
    </div>
  );
}
