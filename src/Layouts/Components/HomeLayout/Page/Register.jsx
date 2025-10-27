import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div>
      <div className="flex justify-center min-h-screen items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h2 className="font-semibold text-2xl text-center">
            Register Your Account
          </h2>
          <div className="card-body">
            <fieldset className="fieldset">
                {/* name */}
                <label className="label">Name</label>
              <input type="text" className="input" placeholder="Name" />
              {/* photo url */}
               <label className="label">photo URL</label>
              <input type="text" className="input" placeholder="Photo URl" />
                {/* email */}
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              {/* password */}
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
              <p className="text-center font-bold pt-5">
               Already Have An Account ?{""}{" "}
                <Link className="text-secondary" to={"/auth/login"}>
                 Login
                </Link>
              </p>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
