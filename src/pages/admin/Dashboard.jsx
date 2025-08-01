import React, { useEffect, useState } from 'react';
import styles from './dashboard.module.css';
import { getDatabase, ref, onValue } from 'firebase/database';

const Dashboard = () => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);
  const [addedToday, setAddedToday] = useState(0);
  const [addedLast10Days, setAddedLast10Days] = useState(0);

  useEffect(() => {
    const db = getDatabase();
    const productsRef = ref(db, 'products');

    onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) return;

      const productList = Object.values(data);
      const now = Date.now();
      const oneDay = 86400000;
      const tenDays = oneDay * 10;

      let countToday = 0;
      let count10Days = 0;
      const categorySet = new Set();

      productList.forEach((product) => {
        if (product.createdAt) {
          const diff = now - product.createdAt;

          if (diff <= oneDay) countToday++;
          if (diff <= tenDays) count10Days++;
        }
        if (product.category) {
          categorySet.add(product.category);
        }
      });

      setTotalProducts(productList.length);
      setTotalCategories(categorySet.size);
      setAddedToday(countToday);
      setAddedLast10Days(count10Days);
    });
  }, []);

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <h2 className={styles.logo}>Admin</h2>
        <ul className={styles.navList}>
          <li><a href="/admin/dashboard" className={styles.active}>Dashboard</a></li>
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
            <p>{totalProducts}</p>
          </div>
          <div className={styles.card}>
            <h3>Total Categories</h3>
            <p>{totalCategories}</p>
          </div>
          <div className={styles.card}>
            <h3>Products Added Today</h3>
            <p>{addedToday}</p>
          </div>
          <div className={styles.card}>
            <h3>Added in Last 10 Days</h3>
            <p>{addedLast10Days}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
