import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';
import { MdCall } from 'react-icons/md';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  const navLinks = [
    'HOME',
    'ABOUT US',
    'ALL PRODUCTS',
    'PRODUCT ENQUIRY',
    'CONTACT US',
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
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
              color: '#121212',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            ☰
          </button>
        )}
      </nav>

      {/* Mobile Drawer (Right Side) */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100%',
          width: menuOpen ? '240px' : '0',
          backgroundColor: '#fff',
          overflowX: 'hidden',
          padding: menuOpen ? '1.5rem 1rem' : '0',
          boxShadow: menuOpen ? '-2px 0 5px rgba(0,0,0,0.2)' : 'none',
          zIndex: 1000,
          transition: 'width 0.3s ease-in-out, padding 0.3s ease-in-out',
        }}
      >
        {menuOpen && (
          <>
            <button
              onClick={() => setMenuOpen(false)}
              style={{
                // background: '#dc3545',
                border: '1px solid #dfdfdfff',
                position: 'absolute',
                left: '10px',
                top: '10px',
                cursor: 'pointer',
                color: '',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0,
              }}
            >
              <AiOutlineClose size={16} />
            </button>
            <ul style={{ listStyle: 'none', padding: '2.5rem 0 0 0' }}>
              {navLinks.map((name, index) => {
                const path =
                  name === 'HOME' ? '/' : `/${name.toLowerCase().replace(/ /g, '-')}`;
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

            {/* Call Us Button inside Mobile */}
            <a
              href="tel:+919101038129"
              style={{
                backgroundColor: '#1f5132',
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
                marginTop: '2rem',
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
                <div style={{ fontSize: '0.85rem' }}>Call Us <br /> +91 9101038129</div>
              </div>
            </a>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
