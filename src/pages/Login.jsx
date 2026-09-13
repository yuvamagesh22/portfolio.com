import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const savedUser = JSON.parse(localStorage.getItem("portfolio-user") || "null");

        if (!savedUser) {
            setError("No account found. Please create an account first.");
            return;
        }

        if (savedUser.email !== formData.email || savedUser.password !== formData.password) {
            setError("Invalid email or password.");
            return;
        }

        localStorage.setItem("portfolio-auth", "true");
        navigate("/home");
    };

    return (
        <div className="auth-page">
            <div className="auth-card">
                <h1>Welcome Back</h1>

                <p className="auth-subtitle">
                    Login to explore my portfolio
                </p>

                <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Your mail"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    {error && <p className="auth-error">{error}</p>}

                    <button type="submit">Login</button>
                </form>

                <p className="auth-footer">
                    Dont have an account? <Link to="/signup">Create Account</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;