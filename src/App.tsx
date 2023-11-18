import { BrowserRouter, Route, Routes } from "react-router-dom";
import LivroLista from "./LivroLista";
import LivroDados from "./LivroDados";
import { MainLayout } from "./layout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<LivroLista />} />
          <Route path="/dados" element={<LivroDados />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
