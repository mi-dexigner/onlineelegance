"use client"
import { useState } from "react";
import Heading from "./Heading";
import ProductCard from "./ProductCard";
const tabsData:string[] = ['All','Category Name 1','Category Name 2','Category Name 3','Category Name 4']
const NewArrival = () => {
    const [selectedTab,setSelectedTab] = useState<number>(0);
    const handleTab = (index:number)=>{
        setSelectedTab(index);
    }
    return (<section>
        <div className="container">
        <Heading title="New Arrival" content="Top view in this week" />
        <ul className="tabs-items">
            {tabsData.map((text,index)=>(
        <li key={index} 
        className={selectedTab === index ? 'activeTab' : ''} 
        onClick={() => handleTab(index)}
        >
            {text}</li>
        ))}
        </ul>
        <div className="products-items-grid">
        {[...Array(5)].map((_, index) => (
          <ProductCard key={index} id={index} name="Product Name" price={3000} src="https://via.placeholder.com/300x300" sale={true} category={['cate','care2']} />

        ))}
        </div>
        </div>
    </section> );
}
 
export default NewArrival;