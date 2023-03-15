import Leftside from "./login/Leftside";
import Rightside from "./login/Rightside";

const Login = () => {
    return (
        <div className='col-12 d-flex vh-100 overflow-hidden'>
            <div className='col-md-8'>
                <Leftside />
            </div>
            <div className='col-md-4 col-12'>
                <Rightside />
            </div>
        </div>
    )
}

export default Login;