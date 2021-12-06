export const userReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      const checkIfUserAlreadyExists = state.filter((user) => {
        return user.id === action.user.id
      });
      if (!checkIfUserAlreadyExists.length) {
        return [...state, {
          id: action.user.id,
          login: action.user.login,
          author: action.user.html_url,
          avatar_url: action.user.avatar_url,
        }
        ]
      }
      else {
        return [...state];
      }
    default:
      return state;
  }
}