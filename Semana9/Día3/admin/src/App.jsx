import { BrowserRouter, Routes, Route } from "react-router-dom";
//Vistas a utilizar
import HomeView from "./views/HomeView";
import CreateProductView from "./views/CreateProductView"
import EditProductView from "./views/EditProductView";
//componentes
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <BrowserRouter>
    {/* acá todavia se puede colocar JSX */}
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/createproduct" element={<CreateProductView />} />
        {/* cuando podemos :referencia esto se recibe en el componente de la ruta */}
        <Route path="/editproduct/:id" element={<EditProductView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App