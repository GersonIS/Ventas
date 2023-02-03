import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./components/dashboard/content/Category";
import Main from "./components/dashboard/content/Main";
import User from "./components/dashboard/content/User";
import Dashboard from "./components/Dashboard";
import Color from "./components/dashboard/content/Color";
import Club from "./components/dashboard/content/Club";
import Gender from "./components/dashboard/content/Gender";
import Market from "./components/dashboard/content/Market";
import Model from "./components/dashboard/content/Model";
import Season from "./components/dashboard/content/Season";
import Size from "./components/dashboard/content/Size";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/main' element={<Dashboard page={<Main />}/>} />
        <Route path='/categories' element={<Dashboard page={<Category />} />} />
        <Route path='/clubes' element={<Dashboard page={<Club />} />} />
        <Route path='/colors' element={<Dashboard page={<Color />} />} />
        <Route path='/genders' element={<Dashboard page={<Gender/>} />} />
        <Route path='/markets' element={<Dashboard page={<Market />} />} />
        <Route path='/models' element={<Dashboard page={<Model />} />} />
        <Route path='/seasons' element={<Dashboard page={<Season />} />} />
        <Route path='/sizes' element={<Dashboard page={<Size />} />} />
        <Route path='/users' element={<Dashboard page={<User />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
