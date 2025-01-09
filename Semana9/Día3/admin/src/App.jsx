import { BrowserRouter, Routes, Route } from "react-router-dom";
//Vistas a utilizar
import HomeView from "./views/HomeView";
import CreateProductView from "./views/CreateProductView"
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
      </Routes>
    </BrowserRouter>
  )
}

export default App