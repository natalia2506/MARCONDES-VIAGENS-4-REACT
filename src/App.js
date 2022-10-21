import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";

import Footer from "./components/Footer";

import Rotas from "./Rotas";

function App() {
  return (
    <div className="App">
      <Rotas />
      <Footer/>
    </div>
  );
}

export default App;
