import { Header } from "./pages/header/header";
import './main.scss';
import { Home } from "./pages/home/home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <main>
        <Home/>
      </main>
    </div>
  );
}

export default App;
