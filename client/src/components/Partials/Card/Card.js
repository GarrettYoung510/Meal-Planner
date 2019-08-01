import React from "react";

const Card = props => {
    return (
        <div className="card mt-5">
            <h5 className="card-header">{props.children}</h5>
            <div className="card-body">
                <h5 className="card-title">{props.children}</h5>
                <hr />
                <p className="card-text">{props.children}</p>
                <a href={props.href} className="btn btn-primary">{props.children}</a>
            </div>
        </div>
    )
}


export default Card;
