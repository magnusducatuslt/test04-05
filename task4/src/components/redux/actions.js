import {
  SET_NEW_ACTOR_NAME,
  SET_ACTORS_NAMES,
  NEW_ACTOR,
  REMOVE_ACTOR,
  ADD_NEW_ACTOR,
  API
} from './actionTypes';

export function dispatchActors() {
  return function(dispatch) {
    fetch(API)
      .then(res => res.json())
      .then(actors => dispatch(setActorsNames(actors)))
      .catch(e => console.error(e));
  };
}

export function setActorsNames(payload) {
  return {
    type: SET_ACTORS_NAMES,
    payload
  };
}
export function removeActor(payload) {
  return {
    type: REMOVE_ACTOR,
    payload
  };
}
export function newActor(payload) {
  return {
    type: NEW_ACTOR,
    payload
  };
}
export function setNewActorName(payload) {
  return {
    type: SET_NEW_ACTOR_NAME,
    payload
  };
}
export function addNewActor() {
  return {
    type: ADD_NEW_ACTOR
  };
}
