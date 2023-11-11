import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import Menu from "./Menu";
import Recomendation from "./Recomendation";
import Testimonial from "./Testimonial";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
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