import { Text, Transformer } from 'react-konva';
import { useRef, useEffect } from 'react';

const TextBox = (props) => {
    const { id, isEditing, dragObject, isSelected, onSelect } = props;

    const shapeRef = useRef();
    const trRef = useRef();
  
    useEffect(() => {
      if (isSelected) {
        // we need to attach transformer manually
        trRef.current.nodes([shapeRef.current]);
        trRef.current.getLayer().batchDraw();
      }
    }, [isSelected]);

    return (
      <>
          <Text
          ref={shapeRef}
          text={isSelected ? "I am selected" : "this is my sample text"}
          draggable={isEditing}
          onClick={onSelect}
          onDragStart={(e) => {
            console.log('starting position',e.target,e.target.x(), e.target.y());
          }}
          onDragEnd={(e) => dragObject(e, id)}
          // onMouseOver={() => console.log('Im hovered')} -- 
        />
        {isSelected && (
          <Transformer
            ref={trRef}
          />
        )}
      </>
    );
};

export default TextBox;