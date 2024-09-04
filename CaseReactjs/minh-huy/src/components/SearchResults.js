import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const results = location.state?.results || [];

  return (
    <div>
      <h2>Kết quả tìm kiếm</h2>
      {results.length > 0 ? (
        results.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>Giá: {product.price}</p>
            <img src={product.image} alt={product.name} />
          </div>
        ))
      ) : (
        <p>Không tìm thấy sản phẩm nào.</p>
      )}
    </div>
  );
};

export default SearchResults;
