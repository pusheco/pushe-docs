import React from "react";

const styles = (backgroundColor) => ({
    width: '10px',
    height: '10px',
    display: 'block',
    textAlign: 'center',
    margin: '0 auto',
    backgroundColor,
});

const Colors = ({color}) => {
    return (
        <a class="led-color" style={styles(color)}></a>
    );
};

export default Colors;