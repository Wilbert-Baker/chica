import './App.css';
//import Footer from './components/footer';
//import Navbar from './components/navBar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Catalog from './pages/catalog';


function App() {
  return (
    <div className="App">
      {/* ///<Navbar/> */}
      <h1>Hello from REACT</h1>
      <Catalog />

      {/* <Footer/>      */}

    </div>
  );
}
export default App;