import Footer from "@/components/Footer";
import Header from "@/components/Header";

const SiteLayout = ({children}:{children:React.ReactNode}) => {
    return ( <>
    <Header />
        <main>
        {children}
        </main>
        <Footer />
    </> );
}
 
export default SiteLayout;