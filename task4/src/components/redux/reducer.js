import {
  SET_NEW_ACTOR_NAME,
  SET_ACTORS_NAMES,
  NEW_ACTOR,
  REMOVE_ACTOR,
  ADD_NEW_ACTOR
} from './actionTypes';

const initialState = {
  actors: [],
  modal: {
    isShow: false,
    name: ''
  }
};

function reducer(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case SET_ACTORS_NAMES:
      const { results } = action.payload;
      return {
        ...state,
        actors: results.reduce((arr, actor) => arr.concat(actor.name), [])
      };
    case NEW_ACTOR:
      const beforeNewActor = { ...state.modal };
      beforeNewActor.isShow = true;
      return {
        ...state,
        modal: beforeNewActor
      };
    case REMOVE_ACTOR:
      const beforeRemove = [...state.actors];
      beforeRemove.splice(action.payload, 1);
      return {
        ...state,
        actors: beforeRemove
      };
    case SET_NEW_ACTOR_NAME:
      const modalForName = { ...state.modal };
      modalForName.name = action.payload;
      return { ...state, modal: modalForName };
    case ADD_NEW_ACTOR:
      const modalForADD = { ...state.modal };
      const actorsADD = [...state.actors];
      actorsADD.push(modalForADD.name);
      modalForADD.name = ``;
      modalForADD.isShow = false;
      return { ...state, actors: actorsADD, modal: modalForADD };
    default:
      return state;
  }
}
export default reducer;
