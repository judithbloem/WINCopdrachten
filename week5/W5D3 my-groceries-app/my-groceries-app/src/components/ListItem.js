import React from "react";

function ListItem(props) {
  return (
    <div className="list-item">
      <li>{props.item.title} </li>
    </div>
  );
}

export default ListItem;
