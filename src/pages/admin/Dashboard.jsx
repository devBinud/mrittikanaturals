import React from 'react';
import styles from './dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <h2 className={styles.logo}>Admin</h2>
        <ul className={styles.navList}>
          <li><a href="/admin/dashboard">Dashboard</a></li>
          <li><a href="/admin/add-product">Add Product</a></li>
          <li><a href="/admin/all-products">Manage Products</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className={styles.main}>
        <h1 className={styles.heading}>Dashboard Overview</h1>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Total Products</h3>
            <p>128</p>
          </div>
          <div className={styles.card}>
            <h3>Orders</h3>
            <p>52</p>
          </div>
          <div className={styles.card}>
            <h3>Users</h3>
            <p>32</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
