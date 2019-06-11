import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setNewActorName, newActor, addNewActor } from '../redux/actions';

import './name.css';

class Modal extends Component {
  change = e => {
    e.preventDefault();
    this.props.setNewActorName(e.target.value);
  };
  submit = e => {
    e.preventDefault();
    this.props.addNewActor();
  };
  createActor = e => {
    e.preventDefault();
    this.props.newActor();
  };
  render = () => {
    const { name, isShow } = this.props.modal;
    const content = isShow ? (
      <form onSubmit={this.submit}>
        <input
          type="text"
          placeholder="добавь имя актера"
          value={name}
          onChange={this.change}
        />
        <button className="add-actor" type="submit">
          добавить
        </button>
      </form>
    ) : (
      <button key="inc" className="new-actor" onClick={this.createActor}>
        +
      </button>
    );
    return content;
  };
}
const mapStateToProps = ({ modal }) => {
  return {
    modal
  };
};
const mapDispatchToProps = {
  setNewActorName,
  addNewActor,
  newActor
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
