
import Skills from '../Component/Skills/Skills';
import About from '../Component/about/About';
import Banner from '../Component/banner/Banner';
import Contact from '../Component/contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Contact></Contact>
        </div>
    );
};

export default Home;