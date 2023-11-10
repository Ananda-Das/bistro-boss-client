/* eslint-disable react/prop-types */

const MenuItems = ({ menu }) => {
  const { name, image, price, recipe } = menu;
  return (
    <div className="flex">
      <div className="flex gap-3">
        <div>
          <img style={{borderRadius: '0 200px 200px 200px'}} src={image} alt="" />
        </div>
        <div>
          <h1 className="text-[#151515] text-xl">{name}--------------</h1>
          <p className="text-[#737373] text-base">{recipe}</p>
        </div>
      </div>
      <div>
        <p className="text-[#BB8506] text-xl">${price}</p>
      </div>
    </div>
  );
};

export default MenuItems;
