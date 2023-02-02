import Sidebar from "./dashboard/Sidebar";
import "../static/dashboard.css";
import Content from "./dashboard/Content";
import { useState } from "react";

const Dashboard = ({page}) => {
    const [door, setDoor] = useState(false);
    const changeState = (value) => {
        setDoor(value);
    }
    return (
        <div className="main-container d-flex">
            <Sidebar changeState={changeState} door={door} />
            <Content changeState={changeState} page={page}/>
        </div>
    )
}

export default Dashboard;