import { useState } from "react";
import { Image } from "react-konva";
import useImage from "use-image";

const ImageBox = (props) => {
    const [transformMode, setTransformMode] = useState(false);
    const [image] = useImage(props.url);

    return (
        <Image
            image={image}
            draggable={props.draggable}
        />
    );
};

export default ImageBox;