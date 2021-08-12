import { useState } from "react";
import axios from "axios";

const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();

        const resistered = {
            username: username,
            password: password,
        };

        axios
            .get("http://localhost:8000/signin", resistered)
            .then((res) => console.log(res));

        setUsername("");
        setPassword("");
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
                                Sign In
                            </h5>
                            <form onSubmit={() => onSubmit}>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="floatingInputUsername"
                                        placeholder="myusername"
                                        required
                                        autofocus
                                        onChange={(e) =>
                                            setUsername(e.target.value)
                                        }
                                    ></input>
                                    <label for="floatingInputUsername">
                                        Username
                                    </label>
                                </div>

                                <div class="form-floating mb-3">
                                    <input
                                        type="password"
                                        class="form-control"
                                        id="floatingPassword"
                                        placeholder="Password"
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
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
                                    href="/signup"
                                >
                                    Create an account. Sign Up
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;
