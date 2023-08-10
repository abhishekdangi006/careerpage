// import Cart from "./component/Cart";
import Jobs from "./component/Jobs";
import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Form from "./pages/Form";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/jobs' element={<Jobs/>}/>
      <Route path='/jobs/apply' element={<Form/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
