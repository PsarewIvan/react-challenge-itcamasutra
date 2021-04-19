const initialState = {
  currentUser: {
    id: 1,
    name: 'John Doe',
    status: 'Member',
  },
  userConnections: [
    { id: 1, name: 'Friends', count: 1 },
    { id: 2, name: 'Groups', count: 3 },
  ],
  photos: {
    small: null,
    large: null,
  },
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export { headerReducer };
