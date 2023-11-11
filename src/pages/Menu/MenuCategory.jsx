/* eslint-disable react/prop-types */
import MenuItems from "../Home/MenuItems";

const MenuCategory = ({ items }) => {
  return (
    <div className="grid grid-cols-2 my-10 gap-5">
      {items.map((menu) => (
        <MenuItems key={menu._id} menu={menu}></MenuItems>
      ))}
    </div>
  );
};

export default MenuCategory;
