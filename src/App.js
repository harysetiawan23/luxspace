import "assets/css/app.css"
import Details from "pages/Details";
import Homepage from "pages/Homepage";
import Cart from 'pages/Cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Congratulations from "pages/Congratulations";
import NotFound from "pages/404";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" Component={Homepage}></Route>
          <Route path="/categories/:id_category/product/:product_id" Component={Details}></Route>
          <Route path="/cart" Component={Cart}></Route>
          <Route path="/congratulation" Component={Congratulations}></Route>
          <Route path="*" Component={NotFound}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
