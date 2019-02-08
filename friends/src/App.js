//libraries
import React, { Component } from "react";
import { connect } from "react-redux";
//actions
import { getFriends, changeTabs } from "../src/store/actions";
//components
import Friends from "./components/Friends";
import AddFriendForm from "./components/AddFriendForm";
import UpdateFriendForm from "./components/UpdateFriendForm";
//styles
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // imported from actions. this will be the axios get call
    this.props.getFriends();
  }

  // function changeTabs(tab) {
  //   //imported from actions
  //   return this.props.changeTabs(tab);
  // };

  render() {
    return (
      <div className="App">
        <h1 className="app-header">All My Friends!</h1>
        <nav>
          <ul>
            <li
              onClick={() => changeTabs("friends")}
              className={this.props.showTab === "friends" ? "active" : null}
            >
              Friends
            </li>
            <li
              onClick={() => changeTabs("post")}
              className={this.props.showTab === "post" ? "active" : null}
            >
              Add
            </li>
            <li
              onClick={() => changeTabs("update")}
              className={this.props.showTab === "update" ? "active" : null}
            >
              Update
            </li>
          </ul>
        </nav>
        {this.props.showTab === "friends" && <Friends />}
        {this.props.showTab === "post" && <AddFriendForm />}
        {this.props.showTab === "update" && <UpdateFriendForm />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showTab: state.showTab
  };
};

export default connect(
  mapStateToProps,
  { getFriends, changeTabs }
)(App);
