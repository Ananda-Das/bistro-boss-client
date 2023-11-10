import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import Menu from "./Menu";
import Recomendation from "./Recomendation";
import Testimonial from "./Testimonial";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Menu></Menu>
            <Recomendation></Recomendation>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;