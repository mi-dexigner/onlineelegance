import Media from "./Media";

const HeroSlide = () => {
    return ( <section className="Hero-Slide">
<Media src="https://via.placeholder.com/1200x400" width={1200} height={400} alt="Slide" />
<div className="caption">
    <h1>Elegance Store</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
    <a href="#" className="btn">Shop Now</a>
</div>
    </section> );
}
 
export default HeroSlide;