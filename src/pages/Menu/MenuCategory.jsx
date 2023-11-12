/* eslint-disable react/prop-types */
import MenuItems from "../Home/MenuItems";

const MenuCategory = ({ items }) => {
  return (
    <div>
      <div className="grid grid-cols-2 my-10 gap-5">
        {items.map((menu) => (
          <MenuItems key={menu._id} menu={menu}></MenuItems>
        ))}
      </div>
      <div className="text-center mb-10">
        <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
      </div>
    </div>
  );
};

export default MenuCategory;
