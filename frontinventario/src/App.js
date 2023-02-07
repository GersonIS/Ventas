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
import CategoryUpdate from "./components/dashboard/content/update/Category";
import ClubUpdate from "./components/dashboard/content/update/Club";
import ColorUpdate from "./components/dashboard/content/update/Color";
import GenderUpdate from "./components/dashboard/content/update/Gender";
import MarketUpdate from "./components/dashboard/content/update/Market";
import ModelUpdate from "./components/dashboard/content/update/Model";
import SeasonUpdate from "./components/dashboard/content/update/Season";
import SizeUpdate from "./components/dashboard/content/update/Size";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/main' element={<Dashboard page={<Main />}/>} />
        <Route path='/categorias' element={<Dashboard page={<Category />} />} />
        <Route path='/categorias/registro' element={<Dashboard page={<CategoryCreate />} />} />
        <Route path='/categorias/actualizar/:id' element={<Dashboard page={<CategoryUpdate />} />} />
        <Route path='/clubes' element={<Dashboard page={<Club />} />} />
        <Route path='/clubes/registro' element={<Dashboard page={<ClubCreate />} />} />
        <Route path='/clubes/actualizar/:id' element={<Dashboard page={<ClubUpdate />} />} />
        <Route path='/colores' element={<Dashboard page={<Color />} />} />
        <Route path='/colores/registro' element={<Dashboard page={<ColorCreate />} />} />
        <Route path='/colores/actualizar/:id' element={<Dashboard page={<ColorUpdate />} />} />
        <Route path='/generos' element={<Dashboard page={<Gender/>} />} />
        <Route path='/generos/registro' element={<Dashboard page={<GenderCreate />} />} />
        <Route path='/generos/actualizar/:id' element={<Dashboard page={<GenderUpdate />} />} />
        <Route path='/tiendas' element={<Dashboard page={<Market />} />} />
        <Route path='/tiendas/registro' element={<Dashboard page={<MarketCreate />} />} />
        <Route path='/tiendas/actualizar/:id' element={<Dashboard page={<MarketUpdate />} />} />
        <Route path='/modelos' element={<Dashboard page={<Model />} />} />
        <Route path='/modelos/registro' element={<Dashboard page={<ModelCreate />} />} />
        <Route path='/modelos/actualizar/:id' element={<Dashboard page={<ModelUpdate />} />} />
        <Route path='/temporadas' element={<Dashboard page={<Season />} />} />
        <Route path='/temporadas/registro' element={<Dashboard page={<SeasonCreate />} />} />
        <Route path='/temporadas/actualizar/:id' element={<Dashboard page={<SeasonUpdate />} />} />
        <Route path='/tallas' element={<Dashboard page={<Size />} />} />
        <Route path='/tallas/registro' element={<Dashboard page={<SizeCreate />} />} />
        <Route path='/tallas/actualizar/:id' element={<Dashboard page={<SizeUpdate />} />} />
        <Route path='/users' element={<Dashboard page={<User />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
