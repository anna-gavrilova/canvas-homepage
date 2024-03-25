import { useState } from 'react';
import { Stage, Layer, Rect, Circle, Image } from 'react-konva';
import TextBox from './components/Textbox/Textbox';
import ImageBox from './components/Imagebox/Imagebox';

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const dragObject = (e, id) => {
    console.log(`new location of element ${id} is ${e.target.x()}; ${e.target.y()}`);
  };

  
  return (
    <div>
      <button onClick={() => setIsEditing(!isEditing)}> Toggle Edit </button>
      {/* // Stage - is a div wrapper
      // Layer - is an actual 2d canvas element, so you can have several layers inside the stage
      // Rect and Circle are not DOM elements. They are 2d shapes on canvas */}
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <TextBox
            dragObject={dragObject}
            isEditing={isEditing}
          />
          <ImageBox url="./1.png" draggable={isEditing}/>
          <Rect width={50} height={50} fill="red"  draggable={isEditing} />
          <Circle x={200} y={200} stroke="black" radius={50}  draggable={isEditing} />

        </Layer>

      </Stage>
    </div>
  );
}

export default App;
