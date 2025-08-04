import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
// import { FaPhone } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { MdCall } from 'react-icons/md';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  const messages = [
    "Shop the hidden gems only @ ₹299* each",
    "Limited the deals – Don't miss out",
    "New arrivals are here – Explore Now",
  ];

  const navLinks = [
    'HOME',
    'ABOUT US',
    'ALL PRODUCTS',
    'PRODUCT ENQUIRY',
    // 'SHOP ALL',
    'CONTACT US',
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const getLinkStyle = (path) => {
    const isActive = location.pathname === path;
    return {
      textDecoration: 'none',
      color: isActive ? '#b76538' : '#222',
      fontSize: '0.9rem',
      fontWeight: 600,
      transition: 'color 0.3s',
    };
  };

  return (
    <>
      {/* Topbar */}
      <div
        style={{
          background: '#b76538',
          color: '#fff',
          textAlign: 'center',
          fontSize: '0.75rem',
          padding: '0 10px',
          fontWeight: '600',
          fontFamily: 'Montserrat, sans-serif',
          overflow: 'hidden',
          height: '30px',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'absolute',
              width: '100%',
              textTransform: 'none',
            }}
          >
            {messages[index]}
          </motion.div>
        </AnimatePresence>
      </div>

      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.2rem 1.5rem',
          position: 'sticky',
          top: 0,
          backgroundColor: '#fff',
          zIndex: 999,
          fontFamily: 'Montserrat, sans-serif',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)', // subtle shadow
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ display: 'inline-block' }}>
          <img src={logo} alt="Logo" style={{ height: '80px' }} />
        </Link>

        {/* Center Nav */}
        {!isMobile && (
          <div
            style={{
              display: 'flex',
              gap: '1.2rem',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}
          >
            {navLinks.map((name, index) => {
              const path = name === 'HOME' ? '/' : `/${name.toLowerCase().replace(/ /g, '-')}`;
              return (
                <Link
                  key={index}
                  to={path}
                  style={getLinkStyle(path)}
                  onMouseEnter={(e) => (e.target.style.color = '#b76538')}
                  onMouseLeave={(e) => {
                    if (location.pathname !== path) e.target.style.color = '#222';
                  }}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        )}

        {/* Right Icons or Contact Buttons */}
        {!isMobile ? (
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            {/* Customer Support */}
            <a
              href="tel:+919101038129"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                backgroundColor: isHovered ? '#144026' : '#1f5132',
                color: '#fff',
                padding: '10px 16px',
                borderRadius: '40px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.9rem',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: isHovered
                  ? '0 6px 16px rgba(0,0,0,0.2)'
                  : '0 6px 16px rgba(0,0,0,0.2)',
              }}
            >
              <div
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '50%',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <MdCall style={{ color: '#4c6437', fontSize: '18px' }} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem' }}>Call Us +91 9101038129</div>
              </div>
            </a>
          </div>
        ) : (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              fontSize: '1.8rem',
              background: 'transparent',
              // color: '#b76538',
              color: '#121212',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            ☰
          </button>
        )}
      </nav>

      {/* Mobile Drawer */}
      {isMobile && menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '240px',
            height: '100%',
            backgroundColor: '#fff',
            padding: '1.5rem 1rem',
            boxShadow: '2px 0 5px rgba(0,0,0,0.2)',
            zIndex: 1000,
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              background: 'transparent',
              border: 'none',
              fontSize: '1.5rem',
              position: 'absolute',
              right: '10px',
              top: '10px',
              cursor: 'pointer',
            }}
          >
            ×
          </button>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {navLinks.map((name, index) => {
              const path = name === 'HOME' ? '/' : `/${name.toLowerCase().replace(/ /g, '-')}`;
              return (
                <li key={index} style={{ marginBottom: '1rem' }}>
                  <Link
                    to={path}
                    style={getLinkStyle(path)}
                    onClick={() => setMenuOpen(false)}
                    onMouseEnter={(e) => (e.target.style.color = '#b76538')}
                    onMouseLeave={(e) => {
                      if (location.pathname !== path) e.target.style.color = '#222';
                    }}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
