import React, { useState, useEffect } from 'react';
import styles from './allproducts.module.css';
import { getDatabase, ref, onValue } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

// ✅ Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAyoM6Lok3cRrogONmb5v10IYmwda1l4QY",
  authDomain: "mrittikanaturals-e0674.firebaseapp.com",
  projectId: "mrittikanaturals-e0674",
  storageBucket: "mrittikanaturals-e0674.appspot.com",
  messagingSenderId: "1074134155290",
  appId: "1:1074134155290:web:9f6c837ba0fe32dcefd1a3",
  measurementId: "G-GQ2JE9C3FD"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const categories = ['All', 'Fruits', 'Vegetables', 'Spices'];

// ✅ Normalize and fuzzy match helper
const normalize = (text) =>
  text ? text.toLowerCase().trim().replace(/[^a-z]/g, '') : '';

const isCategoryMatch = (productCategory, selectedCategory) => {
  const cat = normalize(productCategory);
  const sel = normalize(selectedCategory);

  if (sel === 'all') return true;
  if (!cat || !sel) return false;

  // partial (fuzzy) match
  return cat.includes(sel) || sel.includes(cat);
};

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const productsRef = ref(db, 'products');
    const unsubscribe = onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const productList = Object.entries(data).map(([id, item]) => ({
          id,
          ...item,
          category: item.category ? item.category.trim() : '',
        }));
        setProducts(productList);
      } else {
        setProducts([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ✅ Filter with fuzzy category match
  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) =>
          isCategoryMatch(product.category, selectedCategory)
        );

  return (
    <>
      <h2 className={styles.headingText}>
        Explore the Essence of Mrittika Natural Products
      </h2>

      <div className={styles.shopContainer}>
        {/* Sidebar */}
        <div className={styles.sidebar}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.categoryPill} ${
                selectedCategory === cat ? styles.active : ''
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className={styles.productsGrid}>
          {loading ? (
            <p>Loading products...</p>
          ) : filteredProducts.length === 0 ? (
            <p>No products available.</p>
          ) : (
            [...filteredProducts]
              .sort(() => Math.random() - 0.5)
              .map((product) => (
                <div key={product.id} className={styles.productCard}>
                  <Link
                    to={`/product-details/${product.id}`}
                    className={styles.clickableBox}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className={styles.productImage}
                    />
                    <h4 className={styles.productTitle}>
                      {product.name.length > (isMobile ? 17 : 20)
                        ? product.name.slice(0, isMobile ? 17 : 20) + '...'
                        : product.name}
                    </h4>

                    <p className={styles.description}>
                      {product.description.length > (isMobile ? 45 : 50)
                        ? product.description.slice(0, isMobile ? 45 : 50) + '...'
                        : product.description}
                    </p>

                    <div className={styles.priceBox}>
                      <span className={styles.discountedPrice}>
                      ${product.price}
                      </span>
                      <span className={styles.originalPrice}>
                        ${product.mrp}
                      </span>
                    </div>
                  </Link>

                  <a
                    href={`https://wa.me/919101038129?text=${encodeURIComponent(
                      `*Hello Team Mrittika Naturals,*\n\n_I’m interested in exploring one of your natural beauty products:_\n\n✨ Product: ${product.name}\n💰 Price: $${product.price}\n\n_Could you please share more details about this product, including availability and booking steps?_\n\n*Looking forward to your response.*`
                    )}`}
                    className={styles.whatsappBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp
                      style={{
                        marginRight: '6px',
                        fontSize: '20px',
                        verticalAlign: 'middle',
                      }}
                    />
                    Book Now
                  </a>
                </div>
              ))
          )}
        </div>
      </div>
    </>
  );
};

export default AllProducts;
