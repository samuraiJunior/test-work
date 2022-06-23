
import "./App.scss";
import Header from "./Components/Header/Header";
import ItemsWrapper from "./Components/Main/Items/ItemsWrapper";
import Navbar from "./Components/Main/Navbar/Navbar";
import Selector from "./Components/Main/Select/Selector";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="mainContainer">
        <Selector />
        <Navbar />
        <ItemsWrapper />
      </main>
    </div>
  );
}

export default App;
