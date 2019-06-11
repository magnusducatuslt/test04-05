import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { dispatchActors, removeActor } from '../../redux/actions';
import Modal from '../../modal';
import './page.css';
class Actors extends Component {
  componentDidMount = () => {
    this.props.dispatchActors();
  };
  showActors = (actors, remove) => {
    return actors.map((item, index) => (
      <div key={index} className="actors__actor">
        <span>
          <strong>{item}</strong>
        </span>
        <button
          onClick={e => {
            remove(e, index);
          }}
        >
          -
        </button>
      </div>
    ));
  };
  removeActor = (e, index) => {
    e.preventDefault();
    this.props.removeActor(index);
  };
  render = () => {
    const { actors } = this.props;
    const actorList =
      actors.length > 0
        ? this.showActors(actors, this.removeActor)
        : [<h2 key={`hey`}>where is actors?</h2>];
    return (
      <Fragment>
        <div className="actors">{actorList}</div>
        <div className="modal">
          <Modal />
        </div>
      </Fragment>
    );
  };
}
const mapStateToProps = ({ actors }) => {
  return {
    actors
  };
};
const mapDispatchToProps = {
  dispatchActors,
  removeActor
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Actors);
