import { useState } from "react";

const Signup = ({ signup, error }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="d-flex h-100 align-items-center">
            <div className="container ">
                <div className="row mb-4 justify-content-md-center">
                    <div className="col-12 col-md-4">
                        <header>
                            <h1>Sign Up</h1>
                        </header>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-4 col-md-4">
                        <form onSubmit={() => onSubmit()}>
                            <div class="mb-3">
                                <label class="form-label">
                                    E-Mail
                                    <input
                                        type="email"
                                        class="form-control"
                                        id="input-email"
                                        placeholder="E-Mail"
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </label>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">
                                    Username
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="input-username"
                                        placeholder="Username"
                                        onChange={(e) =>
                                            setUsername(e.target.value)
                                        }
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
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-4 col-md-6 text-end">
                        <button type="submit" class="btn btn-primary">
                            Sign up
                        </button>
                    </div>
                    <div className="col-4 col-md-6 text-start">
                        <button
                            type="button"
                            class="btn btn-primary"
                            onClick={() => {
                                window.location.replace("/login");
                            }}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
