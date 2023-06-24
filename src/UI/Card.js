import React from "react";

const Card = (props) => {
    let classes = props.className
        + ' cursor-pointer tracking-wider overflow-hidden hover:rounded hover:scale-105 hover:shadow-inner transition ease-out duration-500 hover:shadow-lg'
    return (
        <div className={classes}>{props.children}</div>
    );
};

export default Card;