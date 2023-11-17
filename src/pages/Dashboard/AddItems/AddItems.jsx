import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    // console.log(data);
    //image uploda to imagebb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      //now send the menu item to the server
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      //now send it server
      const menuRes = await axiosSecure.post("/api/v1/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        //show success popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added to the menu`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
    // console.log(res.data);
  };
  return (
    <div>
      <SectionTitle heading={"add an item"} subHeading={"Whats New"}></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input type="text" placeholder="Recipe Name" {...register("name", { required: true })} className="input input-bordered w-full my-6 " />
          </div>
          <div className="flex gap-6">
            {/* category */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select {...register("category", { required: true })} className="select select-bordered w-full ">
                <option selected>Select a Category</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            {/* price */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Recipe Price*</span>
              </label>
              <input type="number" placeholder="Recipe Price" {...register("price", { required: true })} className="input input-bordered w-full " />
            </div>
          </div>

          {/* recipe details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details</span>
            </label>
            <textarea {...register("recipe")} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
          </div>

          <div className="form-control w-full my-6">
            <input {...register("image", { required: true })} type="file" className="file-input w-full " />
          </div>

          <button className="btn">Add Item</button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
