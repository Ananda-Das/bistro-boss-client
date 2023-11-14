/* eslint-disable react/prop-types */


const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="w-[424px] h-[300px]" src={image} alt="Shoes" />
        </figure>
        <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
        <div className="card-body items-center text-center bg-[#F3F3F3] px-7">
          <h2 className="card-title text-[#151515] font-medium">{name}</h2>
          <p className="text-[#151515] text-base">{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline text-[#BB8506] border-0 border-b-2 hover:bg-[#1F2937] hover:text-[#BB8506] ">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
