
import SectionTitle from "../../components/SectionTitle";
import MenuItems from "./MenuItems";
import useMenu from "../../hooks/useMenu";

const Menu = () => {
  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);

  const [menu] = useMenu();
  // console.log(menu);

  const items = menu.filter((item) => item.category === "popular");

  return (
    <div>
      <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"}></SectionTitle>
      <div className="grid grid-cols-2 my-10 gap-5">
        {items.map((menu) => (
          <MenuItems key={menu._id} menu={menu}></MenuItems>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline border-0 border-b-4">View Full Menu</button>
      </div>
    </div>
  );
};

export default Menu;
