import SectionTitle from "../../components/SectionTitle";

import img1 from '../../../src/assets/home/slide1.jpg'

const Recomendation = () => {
  return (
    <div className="my-14">
      <div className="bg-black p-20 text-center mb-20">
        <h1 className="text-white text-5xl font-medium">Call Us: +88 0192345678910</h1>
      </div>

      <SectionTitle subHeading={"Should Try"} heading={"CHEF RECOMMENDS"}></SectionTitle>

      <div className="grid grid-cols-3 gap-5 mt-10 mb-20">
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img className="w-[424px] h-[300px]" src={img1} alt="Shoes" />
          </figure>
          <div className="card-body items-center text-center bg-[#F3F3F3] px-7">
            <h2 className="card-title text-[#151515] font-medium">Caeser Salad</h2>
            <p className="text-[#151515] text-base">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline text-[#BB8506] border-0 border-b-2 hover:bg-[#1F2937] hover:text-[#BB8506] ">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img className="w-[424px] h-[300px]" src={img1} alt="Shoes" />
          </figure>
          <div className="card-body items-center text-center bg-[#F3F3F3] px-7">
            <h2 className="card-title text-[#151515] font-medium">Caeser Salad</h2>
            <p className="text-[#151515] text-base">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline text-[#BB8506] border-0 border-b-2 hover:bg-[#1F2937] hover:text-[#BB8506] ">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img className="w-[424px] h-[300px]" src={img1} alt="Shoes" />
          </figure>
          <div className="card-body items-center text-center bg-[#F3F3F3] px-7">
            <h2 className="card-title text-[#151515] font-medium">Caeser Salad</h2>
            <p className="text-[#151515] text-base">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline text-[#BB8506] border-0 border-b-2 hover:bg-[#1F2937] hover:text-[#BB8506] ">Buy Now</button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Recomendation;
