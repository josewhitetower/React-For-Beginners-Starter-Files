import React, { Component } from "react";
import AddFishForm from "./AddFishForms";

export class Inventory extends Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>
          Load Simple Fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
