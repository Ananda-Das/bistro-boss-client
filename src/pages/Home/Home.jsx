import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import Menu from "./Menu";
import Testimonial from "./Testimonial";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Menu></Menu>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;