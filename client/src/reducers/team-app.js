import produce from 'immer';

const initialState = {
  roomCode: { value: '', valid: false },
  team: { value: '', valid: false },
  isLoading: false,
  popUp: {
    title: '',
    message: '',
    button: '',
    active: false,
  },
};

const teamAppReducer = produce((draft, action) => {
  switch (action.type) {
    case 'SHOW_POP_UP':
      draft.popUp.title = action.title;
      draft.popUp.message = action.message;
      draft.popUp.button = action.button;
      draft.popUp.active = true;
      return;
    case 'HIDE_POP_UP':
      draft.popUp.active = false;
      return;
    case 'TEXT_INPUT_HANDLER':
      if (action.value.length < action.minLength || action.value.length > action.maxLength) {
        draft[action.name].valid = false;
      } else {
        draft[action.name].valid = true;
      }
      draft[action.name].value = action.value;
      return;
    case 'REQUEST':
      draft.isLoading = true;
      return;
    default:
      return;
  }
}, initialState);

export default teamAppReducer;
