import * as Type from "./type";

const initialState = {
  user: false,
  id: '',
};

const reducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case Type.SET_USER:
      return { ...state,  user: payload };

    case Type.SET_ID:
      return { ...state,  id: payload };


    default:
      return state;
  }
};

export default reducer;
export * from "./type";