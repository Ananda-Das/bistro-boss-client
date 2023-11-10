import SectionTitle from "../../components/SectionTitle";

const Featured = () => {
  return (
    <div className="bg-[url('../../../src/assets/home/featured.jpg')] bg-cover  p-20 mt-10 mb-10 bg-fixed">
      <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"}></SectionTitle>

      <div className="flex gap-4 items-center mt-7 bg-black bg-opacity-30 mb-7">
        <div>
          <img src="../../../src/assets/home/featured.jpg" alt="" />
        </div>
        <div className="text-white">
          <p>
            March 20, 2023 <br /> WHERE CAN I GET SOME? <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores
            maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-0 border-b-2 mt-5 text-white">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
