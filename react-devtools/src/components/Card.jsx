import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";
import Name from "./Name";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <Name name={props.name} />
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Detail detailInfo={props.tel} />
        <Detail detailInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
