import Media from "./Media";

const HomeCategory:React.FC = () => {
    
    return ( 
        <section className="home-category">
    <div className="container">
      <div className="home--category-grid">
        {[...Array(5)].map((_, index) => (
          <article key={index}>
            <a href="">
              {index === 2 ?(
                <>
                <Media src="https://via.placeholder.com/590x625"  alt="Category Name" width={590} height={625} />
                </>
              ):(
                <>
                <Media src="https://via.placeholder.com/285x300"  alt="Category Name" width={285} height={300} />
                </>
              )}
            </a>
            <div className="category--title">
              <a href="#" className="btn">
                Category Name
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
    );
}
 
export default HomeCategory;