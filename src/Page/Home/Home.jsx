
import Skills from '../Component/Skills/Skills';
import About from '../Component/about/About';
import Banner from '../Component/banner/Banner';
import Contact from '../Component/contact/Contact';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div className='space-y-5'>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;