export default (posts = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;

    case 'CREATE':
      return posts;
    default:
      return posts;
  }
};

/* const reducer (initial state, action) => {
    switch (action.type){
        case 1:
            return state;
        case 2:
            return state;
        default:
            break
    }
} */
