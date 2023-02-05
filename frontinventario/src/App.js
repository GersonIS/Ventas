import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./components/dashboard/content/Category";
import CategoryCreate from "./components/dashboard/content/create/Category";
import ClubCreate from "./components/dashboard/content/create/Club";
import ColorCreate from "./components/dashboard/content/create/Color";
import GenderCreate from "./components/dashboard/content/create/Gender";
import ModelCreate from "./components/dashboard/content/create/Model";
import SeasonCreate from "./components/dashboard/content/create/Season";
import SizeCreate from "./components/dashboard/content/create/Size";
import MarketCreate from "./components/dashboard/content/create/Market";
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
        <Route path='/categorias' element={<Dashboard page={<Category />} />} />
        <Route path='/categorias/registro' element={<Dashboard page={<CategoryCreate />} />} />
        <Route path='/clubes' element={<Dashboard page={<Club />} />} />
        <Route path='/clubes/registro' element={<Dashboard page={<ClubCreate />} />} />
        <Route path='/colores' element={<Dashboard page={<Color />} />} />
        <Route path='/colores/registro' element={<Dashboard page={<ColorCreate />} />} />
        <Route path='/generos' element={<Dashboard page={<Gender/>} />} />
        <Route path='/generos/registro' element={<Dashboard page={<GenderCreate />} />} />
        <Route path='/tiendas' element={<Dashboard page={<Market />} />} />
        <Route path='/tiendas/registro' element={<Dashboard page={<MarketCreate />} />} />
        <Route path='/modelos' element={<Dashboard page={<Model />} />} />
        <Route path='/modelos/registro' element={<Dashboard page={<ModelCreate />} />} />
        <Route path='/temporadas' element={<Dashboard page={<Season />} />} />
        <Route path='/temporadas/registro' element={<Dashboard page={<SeasonCreate />} />} />
        <Route path='/tallas' element={<Dashboard page={<Size />} />} />
        <Route path='/tallas/registro' element={<Dashboard page={<SizeCreate />} />} />
        <Route path='/users' element={<Dashboard page={<User />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
