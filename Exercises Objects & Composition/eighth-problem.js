function rectangle(width, height, color){
    return object = {
        width,
        height,
        color: color[0].toUpperCase() + color.substring(1),
        calcArea: () => {
            return width * height;
        } 
    };
}