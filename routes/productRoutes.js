import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  // 🔄 ดึงข้อมูลเมื่อคอมโพเนนต์ถูกโหลด
  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('❌ เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
      });
  }, []);

  return (
    <div>
      <h2>📦 รายการสินค้า</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            🛍 {product.name} - 💰 {product.price} บาท
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;