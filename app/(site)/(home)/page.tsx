import Image from "next/image";
import styles from "./page.module.css";
import HomeCategory from "@/components/HomeCategory";
import Heading from "@/components/Heading";
import FAQs from "@/components/FAQs";
import HeroSlide from "@/components/HeroSlide";
import NewArrival from "@/components/NewArrival";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const faqs = [
    { title: 'How to use our services?', content: 'Instructions on how to use our services.' },
    { title: 'What payment methods do you accept?', content: 'Information about accepted payment methods.' },
    { title: 'Who are we?', content: 'Information about our company and its mission.' },
    { title: 'Where are we located?', content: 'Address and contact information.' },
  ];
  return (
    <>
    <HeroSlide />
    <HomeCategory />
    <NewArrival  />
    <section className="trending padding-sec">
      <div className="container">
      <Heading title="TRENDING" content="Top view in this week" />
      <div className="products-items-grid">
        {[...Array(5)].map((_, index:number) => (
            <ProductCard key={index} id={index} name="Product Name" price={3000} src="https://via.placeholder.com/226x300" sale={true} category={['cate','care2']} />
        ))}
        </div>
      </div>
    </section>
<section className="best-seller  padding-sec">
  <div className="container">
  <Heading title="BEST SELLER" content="Top sale in this week" />
<div className="products-items-grid">
        {[...Array(5)].map((_, index) => (
         <ProductCard key={index} id={index} name="Product Name" price={3000} src="https://via.placeholder.com/226x300" sale={true} category={['cate','care2']} />

        ))}
        </div>
  </div>
</section>
<Heading title="Happy Customers" />
<Heading title="LATEST FROM BLOG" content="The freshest and most exciting news" />
<section className={styles.contentArea}>
    <div className="container">
        <h1>Ethnic Plus: Leading Online Ethnic Wear Destination</h1>
        <p>When you can shop online, Why sweat the shopping plans and wonder whether you'd ever have any type of outfit you've got in mind.&nbsp;Don't forget the cozy and spacious sofa of yours sitting comfortably in the center of your living area right under the air conditioning, helping you to shop without any hassle or gaps whatsoever. Yeah, we are thinking about that sort of warmth. To women, online shopping has never been so fast. So hit your computers and cell phones, walk inside Ethnic plus and embark with us on this glamorous life. Indian women love to dressing. We want to display all kinds of ethnic wear clothes in their closets. Most Indian women enjoy traditional and ethnic clothing, representing our age-old customs, and offering a graceful yet sophisticated feel. The advent of e-commerce platforms and online shopping portals has provided women exposure to millions of various styles, sizes, and colors of clothes.</p>
    </div>
</section>
<section className="faqs">
      <div className="container">
      <Heading title="FAQs" />
      <FAQs faqs={faqs} />
      </div>
    </section>


    </>
  );
}
