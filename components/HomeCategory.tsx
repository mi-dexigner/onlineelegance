"use client"
import { useEffect, useState } from "react";
import Media from "./Media";

const HomeCategory: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
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

  return (
    <section className="home-category">
      <div className="container">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="home--category-grid">
            {categories.map((category, index) => (
              <article key={`${category}_${index}`}>
                <a href="">
                  {index === 2 ? (
                    <Media src="https://via.placeholder.com/590x625" alt="Category Name" width={590} height={625} />
                  ) : (
                    <Media src="https://via.placeholder.com/285x300" alt="Category Name" width={285} height={300} />
                  )}
                </a>
                <div className="category--title">
                  <a href="#" className="btn">
                    {category}
                  </a>
                </div>
              </article>
            ))}
            {/* Adding a unique key for the last article */}
            <article key="111">
              <a href="">
                <Media src="https://via.placeholder.com/285x300" alt="Category Name" width={285} height={300} />
              </a>
              <div className="category--title">
                <a href="#" className="btn">
                  Category Name
                </a>
              </div>
            </article>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeCategory;
