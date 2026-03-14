import React, { useState, useMemo } from 'react';

// Mock data: Danh sách sản phẩm
const mockProducts = Array.from({ length: 5000 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  price: Math.floor(Math.random() * 1000) + 1, // Giá ngẫu nhiên từ 1 đến 1000
}));

const ProductFilter = () => {
  // State quản lý search và filter
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  // Sử dụng useMemo để tránh tính toán lại danh sách sản phẩm khi filter không thay đổi
  const filteredProducts = useMemo(() => {
    console.time('filtering products'); // Log thời gian bắt đầu filter

    const filtered = mockProducts.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        product.price >= minPrice &&
        product.price <= maxPrice
      );
    });

    console.timeEnd('filtering products'); // Log thời gian hoàn thành filter
    return filtered;
  }, [searchTerm, minPrice, maxPrice]); // Chỉ tính toán lại khi searchTerm hoặc min/maxPrice thay đổi

  // Tính tổng tiền của các sản phẩm đang được lọc (sử dụng useMemo để tối ưu)
  const totalPrice = useMemo(() => {
    console.time('calculating total price'); // Log thời gian tính tổng tiền
    const total = filteredProducts.reduce((sum, product) => sum + product.price, 0);
    console.timeEnd('calculating total price'); // Log thời gian hoàn thành tính tổng tiền
    return total;
  }, [filteredProducts]); // Tính toán lại khi filteredProducts thay đổi

  return (
    <div>
      <h1>Product Filter</h1>
      <div>
        <label>
          Search by name:
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a product"
          />
        </label>
      </div>
      <div>
        <label>
          Min Price:
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            min="0"
          />
        </label>
        <label>
          Max Price:
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            max="1000"
          />
        </label>
      </div>
      <div>
        <h2>Total Price: ${totalPrice}</h2>
      </div>
      <div>
        <h2>Filtered Products</h2>
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductFilter;