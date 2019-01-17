import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  gotToStore = event => {
    event.preventDefault();
    const storeName = this.myInput.current.value;
    console.log();
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form onSubmit={this.gotToStore} className="store-selector">
        <h2>Please Enter a Store</h2>
        <input
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
          ref={this.myInput}
        />
        <button type="submit">Visit Store ➞ </button>
      </form>
    );
  }
}

export default StorePicker;
