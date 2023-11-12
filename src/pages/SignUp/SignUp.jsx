import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createuser } = useContext(AuthContext);
  const onSubmit = (data) => {
    createuser(data.email, data.password).then((result) => {
      console.log(result);
    });
  };

  return (
    <div>
      <Helmet> <title>Bistro Boss || Signup</title> </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
              a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="Name"
                  {...register("name", { required: true })}
                  name="name"
                  className="input input-bordered"
                  required
                />
                {errors.name && <span className="text-red-500">Name field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  {...register("email", { required: true })}
                  className="input input-bordered"
                  required
                />
                {errors.email && <span className="text-red-500">Email field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[@#$&])(?=.*[0-9])(?=.[a-z])/ })}
                  className="input input-bordered"
                  required
                />
                {errors.password?.type === "required" && <span className="text-red-500">Password field is required</span>}
                {errors.password?.type === "minLength" && <span className="text-red-500">Password must be 6 Character</span>}
                {errors.password?.type === "maxLength" && <span className="text-red-500">Password must be less then 20 Character</span>}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-500">Password must have One Uppercase, One Lowercase, One Special Character & One Number</span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
