import Styling from "./notes/Styling";
import Environment from "./notes/Environment";
import ReactBootstrap from "./notes/ReactBootstrap";
import { StyledComponent } from "./notes/StyledComponent";

//Tailwind import css
import "./tailwind.css";
import TailwindComponent from "./notes/TailwindComponent";

function App() {
  return (
    <div>
      <h1>My React App</h1>
      <p>ENVIRONMENT CALISMASI</p>
      <Environment />
      <p>STYLING CALISMASI</p>
      <Styling />
      <p>STYLED COMPONENT CALISMASI</p>
      <StyledComponent>
        If you export some function in JS and you didn't export as default you
        should import that component in curly braces. If you export as default
        you can import without curly braces. "&#123; StyledComponent &#125; from
        src... " is a styled component. You can use it like a normal component.
      </StyledComponent>
      <p>REACT BOOTSTRAP ILE STYLING CALISMASI</p>
      <ReactBootstrap />
      <p>TAILWIND ILE STYLING CALISMASI</p>
      <TailwindComponent />
    </div>
  );
}

export default App;
