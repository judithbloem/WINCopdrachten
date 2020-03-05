import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryItems: [
        { id: 1, title: "handzeep" },
        { id: 2, title: "zakdoekjes" },
        { id: 3, title: "paracetamol" }
      ]
    };
  }
  render() {
    const groceryItem = this.state.groceryItems.map(item => (
      <ListItem key={item.id} item={item} />
    ));
    return (
      <div className="list">
        <h1> </h1>
        <ul>{groceryItem}</ul>

        <li> bonus: sinasappels</li>
      </div>
    );
  }
}

export default List;
