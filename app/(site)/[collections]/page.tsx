'use client'
import ProductCard from "@/components/ProductCard";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Product {
    id: number;
    title: string;
    image: string;
  }
const Collections = () => {
    const [products, setProducts] = useState<Product[]>([]); // Annotate products as Product[]
    const [loading, setLoading] = useState(true);

    const params = useParams();
    const collectionName = params.collections;

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${params.collections}`)
          .then(res => res.json())
          .then(json => {
            setProducts(json);
            setLoading(false);
          })
          .catch(error => {
            console.error('Error fetching products:', error);
            setLoading(false);
          });
      }, []);
console.log(products);
    return ( <>
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
          ) :(
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
    </> );
}
 
export default Collections;