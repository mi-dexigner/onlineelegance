"use client"
import { useEffect, useState } from "react";
import Heading from "./Heading";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  title: string;
  image: string;
}

const tabsData: string[] = ['Category Name 1','Category Name 2','Category Name 3','Category Name 4']

const NewArrival = () => {
    const [selectedTab, setSelectedTab] = useState<number>(0);
    const [categories, setCategories] = useState<string[]>([]); // Assuming categories are strings
    const [products, setProducts] = useState<Product[]>([]); // Annotate products as Product[]
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
          .then(res => res.json())
          .then(json => {
            const slicedCategories = json.slice(0, 5);
            setCategories(slicedCategories);
            setLoading(false);
          })
          .catch(error => {
            console.error('Error fetching categories:', error);
            setLoading(false);
          });
      }, []);  

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
          .then(res => res.json())
          .then(json => {
            const slicedProducts = json.slice(0, 5);
            setProducts(slicedProducts);
            setLoading(false);
          })
          .catch(error => {
            console.error('Error fetching products:', error);
            setLoading(false);
          });
      }, []);

    const handleTab = (index:number)=>{
        setSelectedTab(index);
    }
    
    return (
      <section>
        <div className="container">
          <Heading title="New Arrival" content="Top view in this week" />
          {loading ? (
            <ul className="tabs-items">
            {tabsData.map((text,index)=>(
        <li key={index} 
        className={selectedTab === index ? 'activeTab' : ''} 
        onClick={() => handleTab(index)}
        >
            {text}</li>
        ))}
        </ul>
          ) : (
            <ul className="tabs-items">
              {categories.map((category, index) => (
                <li 
                  key={index} 
                  className={selectedTab === index ? 'activeTab' : ''} 
                  onClick={() => handleTab(index)}
                >
                  {category}
                </li>
              ))}
            </ul>
          )}
          
          {loading ? (
            <div className="products-items-grid">
            {[...Array(5)].map((_, index) => (
                <ProductCard 
                key={index}
                id={index}
                title="Product Name"
                price={300}
                src="https://via.placeholder.com/300x300"
                sale={true}
                category={['cate','care2']} 
                />
            ))}
            </div>
          ) : (
            <div className="products-items-grid">
              {products.map(product => (
                <ProductCard 
                  key={product.id} 
                  id={product.id} 
                  title={product.title} 
                  price={3000} 
                  src={product.image} 
                  sale={true} 
                  category={['cate','care2']} 
                />
              ))}
            </div>
          )}
        </div>
      </section>
    );
}

export default NewArrival;
