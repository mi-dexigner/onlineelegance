import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (<>
    <section className="header-topbar">
    <p>Pay Online for Express shipping in Pakistan</p>
</section>
<header>
    <div className="container-fluid header-inner">
        <div className="header-logo">
           <Link href='/' aria-label="Home">
           <Image src="/logo.webp" width="200" height="51" alt="Logo" />
           </Link>
        </div>
        <div className="header-nav">
            <ul>
                <li><Link href="/" aria-label="Home">Home</Link></li>
                <li><Link href="/shop" aria-label="Shop">Shop</Link></li>
                <li><Link href="/cart" aria-label="Cart">Cart</Link></li>
                <li><Link href="/checkout" aria-label="Checkout">Checkout</Link></li>
                <li><Link href="/myaccount" aria-label="Account">My Account</Link></li>
            </ul>
        </div>
        <div className="header-action flex">
            <ul>
                <li><a><div className="tooltip">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                      </svg>
                    <span className="tooltiptext">Search</span>
                  </div></a></li>
                <li><a><div className="tooltip">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                      </svg>
                    <span className="tooltiptext">Sign In</span>
                  </div></a></li>
                <li><a><div className="tooltip">
                <span className="total-mini-cart-item">0</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                      </svg>
                    <span className="tooltiptext">My Wish List</span>
                  </div></a></li>
                <li><a><div className="tooltip">
                  <span className="total-mini-cart-item">0</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                      </svg>
                    <span className="tooltiptext">My Cart</span>
                  </div></a></li>
               
            </ul>
        </div>
    </div>
</header>
    </> );
}
 
export default Header;