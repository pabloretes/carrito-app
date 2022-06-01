import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";

function App() {
  return (
    <div className="App">
      <body>
      <header>
        <NavBar />
      </header>
      <ItemListContainer greetings={'Hola este es un saludo por props'} />
      <ItemCount />
      </body>
    </div>
    
  );
}

export default App;
