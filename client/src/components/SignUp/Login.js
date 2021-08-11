import { useState } from "react";

const Login = ({ login, error }) => {
    const [details, setDetails] = useState({
        name: "",
        email: "",
        password: "",
    });

    const submitHandler = (e) => {
        e.preventDefault();

        login(details);
    };

    return (
        <div className="container ">
            <div className="row justify-content-md-center">
                <div className="col-12 col-md-4">
                    <header>
                        <h1>Login</h1>
                    </header>
                </div>
            </div>
            <div className="row justify-content-md-center">
                <div className="col-12 col-md-4">
                    <form onSubmit={() => submitHandler()}>
                        <div class="mb-3">
                            <label class="form-label">
                                Username
                                <input
                                    type="text"
                                    class="form-control"
                                    id="input-username"
                                    placeholder="Username"
                                />
                            </label>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">
                                Password
                                <input
                                    type="password"
                                    class="form-control"
                                    id="input-password"
                                    placeholder="Password"
                                />
                            </label>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row justify-content-md-center">
                <div className="col-4 col-md-6 text-end">
                    <button type="button" class="btn btn-primary">
                        Login
                    </button>
                </div>
                <div className="col-4 col-md-6 text-start">
                    <button
                        type="button"
                        class="btn btn-primary"
                        onClick={() => {
                            window.location.replace("/signup");
                        }}
                    >
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
