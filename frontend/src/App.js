import Header from "./layouts/Header";
import "./assets/sass/app.scss";
import Footer from "./layouts/Footer";
import Main from "./layouts/Main";
import script from "./assets/js/script";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
