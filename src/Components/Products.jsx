import React, { useState, useEffect } from 'react';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [company, setCompany] = useState('AMZ');
  const [category, setCategory] = useState('Laptop');
  const [minPrice, setMinPrice] = useState('10');
  const [maxPrice, setMaxPrice] = useState('10000');

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    let api = `http://20.244.56.144/test/companies/${company}/categories/${category}/products?top=10&minPrice=${minPrice}&maxPrice=${maxPrice}`;
   
    const headers = {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIzNzk0NDg5LCJpYXQiOjE3MjM3OTQxODksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjI2NGExMTMzLTdiZTMtNGE3OS1iYTEwLTg5ZTI3YjE2ZWE4MiIsInN1YiI6InNhdHRpcmFtYXNhdHlhbmFyYXlhbmFyZWRkeTdAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiU0FTSSBJTlNUSVRVVEUgT0YgVEVDSE5PTE9HWSBBTkQgRU5HSU5FRVJJTkciLCJjbGllbnRJRCI6IjI2NGExMTMzLTdiZTMtNGE3OS1iYTEwLTg5ZTI3YjE2ZWE4MiIsImNsaWVudFNlY3JldCI6InFZZ3BBZ0lDekdEV2R0TU4iLCJvd25lck5hbWUiOiJTQVRUSSBSQU1BIFNBVFlBIE5BUkFZQU5BIFJFRERZIiwib3duZXJFbWFpbCI6InNhdHRpcmFtYXNhdHlhbmFyYXlhbmFyZWRkeTdAZ21haWwuY29tIiwicm9sbE5vIjoiMjFLNjFBMDVFOCJ9.u8KGjCBOBe8BCs-jgxD7Sjch-0iGCe-epTQdgf7RNJg',
      'Content-Type': 'application/json',
    };
    fetch(api, {
      method: 'GET',
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }

  function handleSubmit(e) {
    e.preventDefault(); 
    getProducts();
  }

  return (
    <div className='background'>
      <h1><span>Product List</span></h1>
      <h2><span>Company Name : </span>AMZ FLP SNP MYN AZO</h2>
      <h2><span>Categories : </span>Phone Computer TV Earphone Tablet Charger Pendrive Remote Speaker HeadSet Laptop PC</h2>
      <form onSubmit={handleSubmit}>
        <label id='company'>Enter Company Name :</label>
        <input
          for='company'
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <br/>
        <label id='category'>Enter Category Name :</label>
        <input
          type="text"
          for='category'
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <br/>
        <label id='minprice'>Enter Min Price :</label>
        <input
          type="number"
          for = 'minprice'
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <br/>
        <label id='maxprice'>Enter Max Name :</label>
        <input
          type="number"
          placeholder="Max Price"
          for='maxprice'
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <button type="submit" className='text-center'>Search</button>
      </form>
      <ul>
        {products.map((prod) => (
          <div className='container' key={prod.id}>
            <div className='box'>
              <h4>Product Name: {prod.productName}</h4>
              <h2>Product Price: {prod.price}</h2>
              <h2>Product Rating: {prod.rating}</h2>
              <h2>Product Discount: {prod.discount}</h2>
              <h2>Product Availability: {prod.availability}</h2>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Products;
