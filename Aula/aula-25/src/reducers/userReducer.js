export const userReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      const checkIfUserAlreadyExists = state.filter((user) => {
        return user.id === action.user.id
      });
      if (!checkIfUserAlreadyExists.length) {
        return [...state, action.user];
      }
      return state;
    default:
      return state;
  }

}