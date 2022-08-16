import logo from "./logo.svg";
import "./App.css";
import "./components/text.css";
import Navbar from "./components/navbar/navbar";
import Card from "./components/card/card";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="imgorg">
        <div className="independence">
          {/* <div class="dark fire">
            <h1 class="Blazing" contenteditable="true">
              Happy
            </h1>
            <h1 class="Blazing" contenteditable="true">
              Independence
            </h1>
            <h1 class="Blazing" contenteditable="true">
              Happy
            </h1>
          </div> */}
        </div>
      </div>
      <h1>Shop By Values</h1>
      <Card />
    </div>
  );
}

export default App;
