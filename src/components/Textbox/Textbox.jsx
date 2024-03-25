import { Text } from 'react-konva';

const TextBox = (props) => {
    const { id, isEditing, dragObject } = props;
    return (
        <Text
        text="this is my sample text"
        draggable={isEditing}
        onDragStart={(e) => {
          console.log('starting position',e.target,e.target.x(), e.target.y());
        }}
        onDragEnd={(e) => dragObject(e, id)}
        // onMouseOver={() => console.log('Im hovered')} -- 
      />
    );
};

export default TextBox;