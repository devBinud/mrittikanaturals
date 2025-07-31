import React, { useState } from 'react';
import { storage } from '../../firebase/config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [mrp, setMrp] = useState('');
  const [price, setPrice] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    if (!name || !description || !mrp || !price || !imageFile) {
      alert("Please fill all fields");
      return;
    }

    setUploading(true);
    const imageName = `products/${Date.now()}_${imageFile.name}`;
    const storageRef = ref(storage, imageName);

    try {
      await uploadBytes(storageRef, imageFile);
      const imageUrl = await getDownloadURL(storageRef);

      const product = {
        id: Date.now(), // or auto-increment logic
        name: name,
        description: description,
        mrp: `₹${mrp}`,
        price: `₹${price}`,
        image: imageUrl,
      };

      console.log("Product Data:", product);
      alert("Product uploaded!");
      // Now send `product` to Firestore or your backend

      // Reset form
      setName('');
      setDescription('');
      setMrp('');
      setPrice('');
      setImageFile(null);
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <h2>Add Product</h2>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', marginBottom: '8px' }} />
      <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} style={{ width: '100%', marginBottom: '8px' }} />
      <input placeholder="MRP (e.g., 699)" value={mrp} onChange={(e) => setMrp(e.target.value)} style={{ width: '100%', marginBottom: '8px' }} />
      <input placeholder="Price (e.g., 499)" value={price} onChange={(e) => setPrice(e.target.value)} style={{ width: '100%', marginBottom: '8px' }} />
      <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} style={{ width: '100%', marginBottom: '8px' }} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload Product'}
      </button>
    </div>
  );
};

export default AddProduct;
