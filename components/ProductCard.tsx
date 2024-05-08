import Media from "./Media";
interface ProductProps{
    id:number,
    name: string;
    price: number;
    src: string;
    sale: boolean | undefined;
    category:string[];
}
const ProductCard:React.FC<ProductProps> = ({id,name,price,src,category,sale}) => {
    return (<article className="product-item">
        <div className="product-item-info">
        <div className="product-item-images">
       <a href="/" aria-label="Product">
       <Media src={src} alt="Product Card" width={226} height={300} />
       </a>
        </div>
        <span className="product-label"> <span className="newlabel label-product">New</span></span>
        <div className="product-item-inner">
            <div className="product-item-actions">
                <div className="actions-secondary">
                    <a href=""  aria-label="add to wishlist" className="add-to-wishlist header-action ">
                    <div className="tooltip">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                      </svg>
                    <span className="tooltiptext">My Wish List</span>
                  </div>
                    </a>
                    <a href=""  aria-label="Add to cart" className="add-to-cart header-action ">
                    <div className="tooltip">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                      </svg>
                    <span className="tooltiptext">Add to Cart</span>
                  </div>
                    </a>
                    
                </div>
            </div>
        </div>
        <div className="product-item-details">
        <div className="product-item-name"><a href="" aria-label="{name}">{name}</a></div>
        <div className="product-item-price">
            $30.00
        </div>
        </div>
        </div>
       
        </article>);
}
 
export default ProductCard;