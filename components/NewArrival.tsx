"use client"
import { useEffect, useState } from "react";
import Heading from "./Heading";
import ProductCard from "./ProductCard";
const tabsData:string[] = ['All','Category Name 1','Category Name 2','Category Name 3','Category Name 4']
const NewArrival = () => {
    const [selectedTab,setSelectedTab] = useState<number>(0);
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
          .then(res => res.json())
          .then(json => {
            // Slicing the first 5 products
            const slicedProducts = json.slice(0, 5);
            setCategories(slicedProducts);
            setLoading(false);
          })
          .catch(error => {
            console.error('Error fetching products:', error);
            setLoading(false);
          });
      }, []);  


      useEffect(() => {
        fetch('https://fakestoreapi.com/products')
          .then(res => res.json())
          .then(json => {
            // Slicing the first 5 products
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
    return (<section>
        <div className="container">
        <Heading title="New Arrival" content="Top view in this week" />
       {loading ? (
        <div>Loading...</div>
      ) : (
        <ul className="tabs-items">
            {categories.map((category, index) => (
        <li key={index} 
        className={selectedTab === index ? 'activeTab' : ''} 
        onClick={() => handleTab(index)}
        >
            {category}</li>
        ))}
        </ul>
        )}

        
{loading ? (
        <div>Loading...</div>
      ) : (
        <div className="products-items-grid">
        {products.map(product => (
            <>
            {console.log(product)}
          <ProductCard key={product.id} id={product.id} name={product.title} price={3000} src={product.image} sale={true} category={['cate','care2']} />
            </>
        ))}
        </div>
      )}
        </div>
    </section> );
}
 
export default NewArrival;