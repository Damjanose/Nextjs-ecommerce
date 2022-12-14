import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
    {
      name: 'test',
      email: 'test@gmail.com',
      password: '123123123',
      isAdmin: true,
    },
  ],
  products: [
    {
      name: 'Free Shirt',
      category: 'Shirts',
      image: '/images/a1.png',
      price: 70,
      slug: 'free-shirt',
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: 'Fit Shirt',
      category: 'Shirts',
      image: '/images/a2.jpg',
      slug: 'fit-shirt',
      price: 80,
      brand: 'Adidas',
      rating: 4.2,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: 'Slim Shirt',
      category: 'Shirts',
      image: '/images/a3.jpeg',
      price: 90,
      slug: 'slim-shirt',
      brand: 'Raymond',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: 'Golf Pants',
      category: 'Pants',
      image: '/images/a4.png',
      price: 90,
      brand: 'Oliver',
      slug: 'golf-pants',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'Smart looking pants',
    },
    {
      name: 'Fit Pants',
      category: 'Pants',
      image: '/images/a5.jpeg',
      price: 95,
      slug: 'fit-pants',
      brand: 'Zara',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular pants',
    },
    {
      name: 'Classic Pants',
      category: 'Pants',
      image: '/images/a6.jpg',
      price: 75,
      brand: 'Casely',
      slug: 'classic-pants',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular pants',
    },
  ],
};
export default data;