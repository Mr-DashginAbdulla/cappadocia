import { Header } from "./pages/header/header";
import './main.scss';
import { Home } from "./pages/home/home";
import { Footer } from "./pages/footer/footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <main>
        <Home/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
