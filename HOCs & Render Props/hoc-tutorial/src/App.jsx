import DisplayCoordinates from "./DisplayCoordinates";
import MovingCircle from "./MovingCircle";

function ClickImpressionsTracker({ children }) {
  const handleUserClick = () => {
    console.log("User Clicked:", children.type.name);
  };

  return <div onClick={handleUserClick}>{children}</div>;
}
function MouseEnterImpressionsTracker({ children }) {
  const handleMouseEnter = () => {
    console.log("Mouse Entered:", children.type.name);
  };

  return <div onMouseEnter={handleMouseEnter}>{children}</div>;
}

const SimpleComponent = ({ x }) => {
  return <div> SimpleComponent {x} </div>;
};

function App() {
  return (
    <>
      <ClickImpressionsTracker>
        <MouseEnterImpressionsTracker>
          <SimpleComponent x={100} />
        </MouseEnterImpressionsTracker>
      </ClickImpressionsTracker>

      <DisplayCoordinates />
      <MovingCircle/>
    </>
  );
}

export default App;
