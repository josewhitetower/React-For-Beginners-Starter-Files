import React, { Component } from "react";
import PropType from "prop-types";

import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import Login from "./Login";
import firebase from "firebase";
import base, { firebaseApp } from "../base";

export class Inventory extends Component {
  static propTypes = {
    fishes: PropType.object,
    updateFish: PropType.func,
    deleteFish: PropType.func,
    loadSampleFishes: PropType.func,
    storeId: PropType.string
  };

  state = {
    user: null,
    owner: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  authHandler = async authData => {
    //1. Look up the current store in the firebase database
    const store = await base.fetch(this.props.storeId, { context: this });
    //2. Claim it if there is no owner
    if (!store.owner) {
      await base.post(`${this.props.storeId}/owner`, {
        data: authData.user.uid
      });
    }
    //3. Set the state of the inventory component to reflect the current user

    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid
    });
  };
  y6chGOb1JxWkhtttM5td06RYk893;
  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  logout = async () => {
    await firebase.auth().signOut();
    this.setState({ uid: null });
  };

  render() {
    const logout = <button onClick={this.logout}>Log Out!</button>;

    if (!this.state.uid) {
      return <Login authenticate={this.authenticate} />;
    }

    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>Sorry you are not the owner</p>
          {logout}
        </div>
      );
    }

    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {logout}

        {Object.keys(this.props.fishes).map(key => (
          <EditFishForm
            fish={this.props.fishes[key]}
            index={key}
            key={key}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
          />
        ))}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>
          Load Simple Fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
