import Cover from "../Shared/Cover";

import menuImg from "../../../src/assets/menu/banner3.jpg";
import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory";
import desertImg from "../../../src/assets/menu/dessert-bg.jpeg";
import soupImg from "../../../src/assets/menu/soup-bg.jpg";
import saladImg from "../../../src/assets/menu/salad-bg.jpg";
import pizzaImg from "../../../src/assets/menu/pizza-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Cover image={menuImg} title={"OUR MENU"} description={"Would you like to try a dish?"}></Cover>
      <div className="my-10">
        <SectionTitle subHeading={"Don't miss"} heading={"TODAY'S OFFER"}></SectionTitle>
        <div>
          <MenuCategory items={offered}></MenuCategory>
          <Cover
            image={desertImg}
            title={"DESSERTS"}
            description={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          ></Cover>
          <MenuCategory items={desserts}></MenuCategory>
          <Cover
            image={pizzaImg}
            title={"PIZZA"}
            description={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          ></Cover>
          <MenuCategory items={pizza}></MenuCategory>
          <Cover
            image={saladImg}
            title={"SALADS"}
            description={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          ></Cover>
          <MenuCategory items={salad}></MenuCategory>
          <Cover
            image={soupImg}
            title={"SOUPS"}
            description={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          ></Cover>
          <MenuCategory items={soup}></MenuCategory>
        </div>
      </div>
    </div>
  );
};

export default Menu;
