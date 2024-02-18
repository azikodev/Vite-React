import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import imgs from "./assets/imgs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="logoContainer">
        <img src={reactLogo} alt="React icon svg" className="logoSvg" />
        <p className="logoName">React</p>
      </div>
      <div className="cards">
        <div className="cardInformation">
          <img src="https://picsum.photos/id/2/300/300" alt="img" />
          <div className="information">
            <h3>Fazt Web</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis libero laudantium placeat odio qui dolores. Commodi rerum, molestiae excepturi iusto harum fuga quas velit facilis libero atque illo porro repellendus?</p>
          </div>
        </div>
        <div className="cardInformation">
          <img src="https://picsum.photos/id/2/300/300" alt="img" />
          <div className="information">
            <h3>Fazt Web</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis libero laudantium placeat odio qui dolores. Commodi rerum, molestiae excepturi iusto harum fuga quas velit facilis libero atque illo porro repellendus?</p>
          </div>
        </div>
        <div className="cardInformation">
          <img src="https://picsum.photos/id/2/300/300" alt="img" />
          <div className="information">
            <h3>Fazt Web</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis libero laudantium placeat odio qui dolores. Commodi rerum, molestiae excepturi iusto harum fuga quas velit facilis libero atque illo porro repellendus?</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
