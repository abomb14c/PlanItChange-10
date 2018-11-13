export const updateUser = user => {
  return {
    type: "ADD_USER",
    userId: user.userId,
    username: user.username
  };
};

export const logOutUser = () => {
  return {
    type: "LOGOUT_USER"
  };
};