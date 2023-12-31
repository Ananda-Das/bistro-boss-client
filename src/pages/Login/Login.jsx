import { useContext, useEffect } from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../components/Social Login/SocialLogin";

const Login = () => {
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const { signin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  // const from = location.state?.form?.pathname || "/";
  // console.log('state in the location', location.state);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password);
    signin(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      navigate(location?.state ? location.state : "/");
    });
  };

  const handleCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value) == true) {
      //   alert("Captcha Matched");
    } else {
      alert("Captcha Does Not Match");
    }
  };

  return (
    <div>
      <Helmet>
        {" "}
        <title>Bistro Boss || Login</title>{" "}
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
              a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Recatpcha</span>
                </label>
                <LoadCanvasTemplate />
                <input
                  onBlur={handleCaptcha}
                  type="text"
                  placeholder="Input the above text"
                  name="recaptcha"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="px-6">
              <small>
                New Here? <Link to="/signup">Create an account</Link>
              </small>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
