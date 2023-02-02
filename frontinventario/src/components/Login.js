import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1>Login</h1>
            <button onClick={() => navigate("/main")}>Menu Principal</button>
        </>
    )
}

export default Login;