/*
    A new user's favorite drinks list should be empty
*/
export const initialState = {
  total: 0,
  drinks: [] as any,
};

/*
    Easily modify the types of actions the reducer accepts
*/
const ACTION_TYPES = {
  add: 'add',
  remove: 'remove',
};

/*
    Action props are based on useReducer's Action documentation
*/
type Action = {
  type: string;
  payload: {
    total: number;
    drinks: [];
  };
};

/*
    State: Current user's favorites

    Action: User can add to or remove a drink from favorites list
            If an Action is undefined, aka neither add nor remove,
            simply return the current state
*/
const drinksReducer = (state: any, action: Action) => {
  const {type, payload} = action;
  switch (type) {
    case ACTION_TYPES.add:
      return {
        ...state,
        drinks: payload.drinks,
      };
    case ACTION_TYPES.remove:
      return {
        ...state,
        drinks: payload.drinks,
      };
    default:
      return state;
  }
};

export default drinksReducer;
