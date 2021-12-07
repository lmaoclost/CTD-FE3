export const gitReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      const checkIfUserAlreadyExists = state.filter((user) => {
        return user.id === action.payload.id;
      })
      if (!checkIfUserAlreadyExists.length) {
        return [...state, action.payload];
      }
      return state;
    default:
      return state;
  }
}