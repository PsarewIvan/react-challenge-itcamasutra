const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'GET_USERS';

const initialState = {
  usersCount: 15,
  friendsCount: 1,
  users: [
    {
      id: 2,
      name: 'Sam Sam',
      lastActive: 'Active 56 minutes ago',
      userConnections: [
        { id: 1, name: 'Friends', count: 4 },
        { id: 2, name: 'Groups', count: 1 },
      ],
      isFollowed: true,
    },
    {
      id: 3,
      name: 'Admin',
      lastActive: 'Active 5 months, 1 week ago',
      userConnections: [
        { id: 1, name: 'Friends', count: 10 },
        { id: 2, name: 'Groups', count: 2 },
      ],
      isFollowed: true,
    },
    {
      id: 4,
      name: 'Alexander Alexandrovich',
      lastActive: 'Active 5 months, 3 weeks ago',
      userConnections: [
        { id: 1, name: 'Friends', count: 17 },
        { id: 2, name: 'Groups', count: 3 },
      ],
      isFollowed: false,
    },
    {
      id: 5,
      name: 'Superman',
      lastActive: 'Active 5 months, 3 weeks ago',
      userConnections: [
        { id: 1, name: 'Friends', count: 1 },
        { id: 2, name: 'Groups', count: 8 },
      ],
      isFollowed: false,
    },
    {
      id: 6,
      name: 'Batman',
      lastActive: 'Active 5 months, 3 weeks ago',
      userConnections: [
        { id: 1, name: 'Friends', count: 14 },
        { id: 2, name: 'Groups', count: 31 },
      ],
      isFollowed: true,
    },
    {
      id: 7,
      name: 'Ken Lee',
      lastActive: 'Active 5 months, 3 weeks ago',
      userConnections: [
        { id: 1, name: 'Friends', count: 12 },
        { id: 2, name: 'Groups', count: 23 },
      ],
      isFollowed: false,
    },
    {
      id: 8,
      name: 'Lori Chase',
      lastActive: 'Active 5 months, 3 weeks ago',
      userConnections: [
        { id: 1, name: 'Friends', count: 6 },
        { id: 2, name: 'Groups', count: 41 },
      ],
      isFollowed: false,
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            return { ...user, isFollowed: true };
          }
          return user;
        }),
      };

    case UN_FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            return { ...user, isFollowed: false };
          }
          return user;
        }),
      };

    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };

    default:
      return state;
  }
};

const followCreator = (id) => ({ type: FOLLOW, id });
const unFollowCreator = (id) => ({ type: UN_FOLLOW, id });
const setUsersCreator = (users) => ({ type: SET_USERS, users });

export { usersReducer, followCreator, unFollowCreator, setUsersCreator };
