import Body from "./sidebar/Body";
import Navbar from "./sidebar/Navbar";

const Content = ({changeState,page}) => {
    return(
        <div className="content">
            <Navbar changeState={changeState}/>
            <Body page={page}/>
        </div>
    )
}

export default Content;