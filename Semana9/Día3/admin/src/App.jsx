import { BrowserRouter, Routes, Route } from "react-router-dom";
//Vistas a utilizar
import HomeView from "./views/HomeView";
import CreateProductView from "./views/CreateProductView"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/createproduct" element={<CreateProductView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App