const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(cors());
const publicPath = path.join(__dirname, '..', 'minh-huy', 'public');
app.use(express.static(publicPath));

let products = [
  { 
    id: 1, 
    name: 'Product 1', 
    image: '/img/giaymoi1.jpg', 
    price: '1000', 
    images: ['/img/giaymoi1.jpg', '/img/giaymoi2.jpg', '/img/giaymoi3.jpg'], 
    category: 'Category1' 
  },
];

let users = [];

let carts = [];

let categories = [
  { id: 1, name: 'Category1' },
  { id: 2, name: 'Category2' }
];

// API Đăng nhập Admin
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;

  // Kiểm tra tài khoản admin cố định
  if (username === 'admin' && password === 'admin') {
    return res.json({ message: 'Đăng nhập thành công với quyền Admin.', username });
  }

  // Nếu không phải admin, trả về lỗi đăng nhập
  res.status(401).json({ message: 'Tài khoản hoặc mật khẩu không đúng.' });
});

// API Lấy danh sách sản phẩm
app.get('/api/products', (req, res) => {
  res.json(products);
});

// API Lấy chi tiết sản phẩm
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  res.json(product);
});

// API Thêm sản phẩm
app.post('/api/products', (req, res) => {
  const newProduct = { ...req.body, id: products.length + 1 };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// API Cập nhật sản phẩm
app.put('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = products.findIndex(p => p.id === productId);
  if (productIndex !== -1) {
    products[productIndex] = { ...req.body, id: productId };
    res.json(products[productIndex]);
  } else {
    res.status(404).send('Sản phẩm không tìm thấy');
  }
});

// API Xóa sản phẩm
app.delete('/api/products/:id', (req, res) => {
  products = products.filter(product => product.id != req.params.id);
  res.status(204).send();
});

// API Lấy danh sách thể loại
app.get('/api/categories', (req, res) => {
  res.json(categories);
});

// API Thêm thể loại
app.post('/api/categories', (req, res) => {
  const newCategory = { ...req.body, id: categories.length + 1 };
  categories.push(newCategory);
  res.status(201).json(newCategory);
});

// API Cập nhật thể loại
app.put('/api/categories/:id', (req, res) => {
  const categoryId = parseInt(req.params.id);
  const categoryIndex = categories.findIndex(c => c.id === categoryId);
  if (categoryIndex !== -1) {
    categories[categoryIndex] = { ...req.body, id: categoryId };
    res.json(categories[categoryIndex]);
  } else {
    res.status(404).send('Thể loại không tìm thấy');
  }
});

// API Xóa thể loại
app.delete('/api/categories/:id', (req, res) => {
  categories = categories.filter(category => category.id != req.params.id);
  res.status(204).send();
});

// API Đăng ký
app.post('/api/register', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Tên tài khoản và mật khẩu là bắt buộc.' });
  }

  const userExists = users.some(user => user.username === username);
  if (userExists) {
    return res.status(400).json({ message: 'Tên tài khoản đã tồn tại.' });
  }

  // Thêm người dùng mới
  users.push({ username, password });
  carts[username] = []; // Tạo giỏ hàng riêng cho người dùng
  res.status(201).json({ message: 'Đăng ký thành công!' });
});

// API Đăng nhập
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    res.json({ message: 'Đăng nhập thành công.', username });
  } else {
    res.status(401).json({ message: 'Đăng nhập thất bại.' });
  }
});

// API Thêm vào giỏ hàng
app.post('/api/cart', (req, res) => {
  const { username, productId, quantity } = req.body;
  if (!carts[username]) return res.status(404).send('Người dùng không tồn tại');

  // Tìm sản phẩm trong giỏ hàng
  const cartItem = carts[username].find(item => item.productId === productId);
  if (cartItem) {
    // Nếu sản phẩm đã có trong giỏ, tăng số lượng
    cartItem.quantity += quantity;
  } else {
    // Nếu chưa có, thêm sản phẩm vào giỏ
    carts[username].push({ productId, quantity });
  }
  res.status(201).json({ productId, quantity });
});

// API Cập nhật số lượng sản phẩm trong giỏ hàng
app.put('/api/cart', (req, res) => {
  const { username, productId, quantity } = req.body;
  if (!carts[username]) return res.status(404).send('Người dùng không tồn tại');

  // Tìm sản phẩm trong giỏ hàng
  const cartItem = carts[username].find(item => item.productId === productId);
  if (cartItem) {
    if (quantity > 0) {
      cartItem.quantity = quantity;
    } else {
      carts[username] = carts[username].filter(item => item.productId !== productId);
    }
    res.status(200).json(cartItem);
  } else {
    res.status(404).send('Sản phẩm không có trong giỏ hàng');
  }
});

// API Xóa sản phẩm khỏi giỏ hàng
app.delete('/api/cart', (req, res) => {
  const { username, productId } = req.body;
  if (!carts[username]) return res.status(404).send('Người dùng không tồn tại');

  carts[username] = carts[username].filter(item => item.productId !== productId);
  res.status(204).send();
});



// API Lấy giỏ hàng của user
app.get('/api/cart/:username', (req, res) => {
  const { username } = req.params;
  if (!carts[username]) return res.status(404).send('Người dùng không tồn tại');

  const cartItems = carts[username].map(cartItem => {
    const product = products.find(p => p.id === cartItem.productId);
    return {
      ...product,
      quantity: cartItem.quantity
    };
  });
  res.json(cartItems);
});

// API Admin xem tất cả giỏ hàng của người dùng
app.get('/api/admin/carts', (req, res) => {
  const allCarts = Object.keys(carts).map(username => {
    const userCart = carts[username].map(cartItem => {
      const product = products.find(p => p.id === cartItem.productId);
      return {
        ...product,
        quantity: cartItem.quantity
      };
    });
    return { username, cart: userCart };
  });
  res.json(allCarts);
});

// API Tìm kiếm sản phẩm theo tên và thể loại
app.get('/api/products/search', (req, res) => {
  const { query, category } = req.query;

  // Lọc sản phẩm theo tên và thể loại
  const filteredProducts = products.filter((product) => {
    const matchesName = product.name.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = !category || product.category.toLowerCase() === category.toLowerCase();
    return matchesName && matchesCategory;
  });

  res.json(filteredProducts);
});


app.listen(5000, () => console.log('Server đang chạy trên cổng 5000'));
