import React from "react";

export default props =>
    <div>
        <h2>{props.title}</h2>
        <div>
            {props.children}
        </div>

    </div>