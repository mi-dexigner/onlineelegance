import Link from "next/link";

const Footer = () => {
    return ( 
        <footer>
    <div className="container-fluid flex flex-wrap">
        <div className="col"><h5>Contact Us</h5>
        <ul className="footer-address">
            <li><a href="">41, Second Floor, Navjivan Industrial,
                Society, Near Unique Hospital,
                Khatodara, Laxmi Nagar, Udhna,
                Surat, Gujarat 395002</a></li>
                <li><a href="mailto:support@ethnicplus.pk">support&#64;ethnicplus.pk</a></li>
                <li><a href="">+92 3242340583</a></li>
        </ul>
        </div>
        <div className="col">
            <h5>Categories</h5>
            <ul className="footer-nav">
                <li><Link href="shop">Category Name</Link></li>
                <li><Link href="shop">Category Name</Link></li>
                <li><Link href="shop">Category Name</Link></li>
                <li><Link href="shop">Category Name</Link></li>
                <li><Link href="shop">Category Name</Link></li>
                <li><Link href="shop">Category Name</Link></li>
            </ul>
        </div>
        <div className="col"><h5>Informations</h5>
            <ul className="footer-nav">
                <li><Link href="shop">About Us</Link></li>
                <li><Link href="shop">Terms & Conditions</Link></li>
                <li><Link href="shop">Returns & Exchanges</Link></li>
                <li><Link href="shop">Shipping & Delivery</Link></li>
                <li><Link href="shop">Privacy Policy</Link></li>
            </ul>
        </div>
        <div className="col"><h5>Useful Links</h5>
            <ul className="footer-nav">
                <li><Link href="shop">Contact Us</Link></li>
                <li><Link href="shop">My Account</Link></li>
                <li><Link href="shop">Size Guide</Link></li>
                <li><Link href="shop">FAQs</Link></li>
            </ul>
        </div>
        <div className="col"><h5>Newsletter Signup</h5>
        <p>Subscribe to our newsletter and get latest offers and news.</p>
        <form className="form-subscribe" method="post" action="">
            <div className="field-newsletter">
                <input name="email" type="email" required="" placeholder="Your email address" />
            </div>
            <div className="actions-subscribe">
                <button type="submit" data-element="subscribe">Subscribe</button>
            </div>
        </form>
        </div>
    </div>
    <div className="footer-copyright">
        <div className="container-fluid flex flex-wrap">
            <div className="col"><p>&copy; 2024 Elegance Boutique. All Rights Reserved.</p></div>
            <div className="col">
                <img src="/payment.webp" width="291" height="22" alt="payment" />
            </div>
        </div>
    </div>
</footer>
    );
}
 
export default Footer;