import { Text } from 'react-konva';

const TextBox = (props) => {
    const { id, isEditing, dragObject, isSelected, onSelect } = props;
    return (
        <Text
        text={isSelected ? "I am selected" : "this is my sample text"}
        draggable={isEditing}
        onClick={onSelect}
        onDragStart={(e) => {
          console.log('starting position',e.target,e.target.x(), e.target.y());
        }}
        onDragEnd={(e) => dragObject(e, id)}
        // onMouseOver={() => console.log('Im hovered')} -- 
      />
    );
};

export default TextBox;