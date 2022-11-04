import log from "../src/images/download.png";
import unilogo from "./images/unilogo.jpg";
import "./App.css";
import "./components/text.css";
import Navbar from "./components/navbar/navbar";
import Card from "./components/card/card";
import Bottom from "./components/bottom/bottom";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}

      <div className="imgorg">
        <div className="logs">
          <img alt="load" src={unilogo} />
        </div>
        <div className="independence">
          <h1>Unitech Organics Pvt LTD</h1>
          <p>under construction</p>
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
      {/* <h1>Shop By Values</h1> */}
      {/* <Card /> */}
      <Bottom />
    </div>
  );
}

export default App;
