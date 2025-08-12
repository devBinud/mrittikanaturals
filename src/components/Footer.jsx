import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#fdfaf6',
      color: '#333',
      fontFamily: 'Montserrat, sans-serif',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    }}>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '2rem',
        padding: '3rem 1rem'
      }}>
        {/* Column 1: Brand + Contact + Social */}
        <div style={{ flex: '1 1 260px', minWidth: '250px' }}>
          <h4 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.5rem',
            color: '#2c2c2c',
            marginBottom: '1rem'
          }}>
            Mrittika Naturals
          </h4>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            A celebration of Northeast India's rich heritage through natural, handmade, and sustainable products crafted with love.
          </p>

          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FaWhatsapp style={{ color: '#b76538' }} />
              <a href="https://wa.me/919101038129" target="_blank" rel="noreferrer" style={{ color: '#333', textDecoration: 'none' }}>
                +91 91010 38129
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FaPhoneAlt style={{ color: '#b76538' }} />
              <a href="tel:+918437048180" style={{ color: '#333', textDecoration: 'none' }}>
                +91 84370 48180
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FaEnvelope style={{ color: '#b76538' }} />
              <a href="mailto:mrittikanaturals@gmail.com" style={{ color: '#333', textDecoration: 'none' }}>
                mrittikanaturals@gmail.com
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            marginTop: '1.5rem',
            fontSize: '1.3rem'
          }}>
            <a href="#!"><FaFacebookF style={{ color: '#b76538' }} /></a>
            <a href="#!"><FaInstagram style={{ color: '#b76538' }} /></a>
            <a href="#!"><FaTwitter style={{ color: '#b76538' }} /></a>
            <a href="#!"><FaYoutube style={{ color: '#b76538' }} /></a>
            <a href="#!"><FaPinterest style={{ color: '#b76538' }} /></a>
          </div>
        </div>

        {/* SHOP Links */}
        <div style={{ flex: '1 1 150px', minWidth: '150px' }}>
          <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#2c2c2c', marginBottom: '1rem' }}>Shop</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', lineHeight: '2.1' }}>
            {['Skin', 'Hair', 'Bath & Body', 'Gift Boxes'].map(item => (
              <li key={item}>
                <a href="#!" style={{ color: '#333', textDecoration: 'none' }}>{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* HELP Links */}
        <div style={{ flex: '1 1 150px', minWidth: '150px' }}>
          <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#2c2c2c', marginBottom: '1rem' }}>Help</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', lineHeight: '2.1' }}>
            <li>
              <a href="/contact" style={{ color: '#333', textDecoration: 'none' }}>Contact Us</a>
            </li>
            <li>
              <a href="/privacy-policy" style={{ color: '#333', textDecoration: 'none' }}>Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div style={{ flex: '1 1 240px', minWidth: '250px' }}>
          <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#2c2c2c', marginBottom: '1rem' }}>Stay Updated</h4>
          <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
            Subscribe to our newsletter for exclusive offers and product updates.
          </p>
          <input
            type="email"
            placeholder="you@example.com"
            style={{
              width: '100%',
              padding: '10px 12px',
              border: '1px solid #ccc',
              borderRadius: '20px',
              outline: 'none',
              marginBottom: '0.8rem',
              fontFamily: 'Montserrat, sans-serif'
            }}
          />
          <button style={{
            background: '#b76538',
            color: '#fff',
            padding: '10px 18px',
            border: 'none',
            borderRadius: '25px',
            fontWeight: 'bold',
            cursor: 'pointer',
            width: '100%',
          }}>
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div style={{
        textAlign: 'center',
        padding: '1.5rem 0',
        fontSize: '0.85rem',
        borderTop: '1px solid #eee',
        color: '#666',
      }}>
        © {new Date().getFullYear()} Mrittika Naturals. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
