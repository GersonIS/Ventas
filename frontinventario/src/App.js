import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./components/dashboard/content/Category";
import Main from "./components/dashboard/content/Main";
import User from "./components/dashboard/content/User";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/main' element={<Dashboard page={<Main />}/>} />
        <Route path='/categories' element={<Dashboard page={<Category />} />} />
        <Route path='/users' element={<Dashboard page={<User />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
