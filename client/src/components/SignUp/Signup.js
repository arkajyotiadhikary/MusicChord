import axios from "axios";
import { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./Registration.css";

const Signup = () => {
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: "",
    });

    const { email, username, password } = formData;

    const handleChange = (e) => {
        console.log(formData);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:8000/signup", formData)
            .then((res) => console.log(res));
        setFormData({
            ...formData,
            email: "",
            username: "",
            password: "",
        });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-10 col-xl-9 mx-auto">
                    <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-0">
                        <div className="card-img-left d-none d-md-flex">
                            {/* Background Image for card set in CSS */}
                        </div>
                        <div className="card-body p-4 p-sm-5">
                            <h5 class="card-title text-center mb-5 fw-light fs-5">
                                Sign Up
                            </h5>
                            <form onSubmit={handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="floatingInputUsername"
                                        placeholder="myusername"
                                        required
                                        autoFocus
                                        value={username}
                                        name="username"
                                        onChange={handleChange}
                                    ></input>
                                    <label for="floatingInputUsername">
                                        Username
                                    </label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        class="form-control"
                                        id="floatingInputEmail"
                                        placeholder="name@example.com"
                                        name="email"
                                        value={email}
                                        onChange={handleChange}
                                    />
                                    <label for="floatingInputEmail">
                                        Email address
                                    </label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input
                                        type="password"
                                        class="form-control"
                                        id="floatingPassword"
                                        placeholder="Password"
                                        value={password}
                                        name="password"
                                        onChange={handleChange}
                                    />
                                    <label for="floatingPassword">
                                        Password
                                    </label>
                                </div>
                                <div class="d-grid mb-2">
                                    <button
                                        class="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
                                        type="submit"
                                    >
                                        Register
                                    </button>
                                </div>
                                <a
                                    class="d-block text-center mt-2 small"
                                    href="/signin"
                                >
                                    Have an account? Sign In
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
