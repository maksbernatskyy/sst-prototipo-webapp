import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import DetailTravel from "./pages/DetailTravel";

function App() {
  return (
    <>
     <BrowserRouter>
       <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />}/>
          <Route path="/detail/:id" element={<DetailTravel />}/>
        </Route>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App;
