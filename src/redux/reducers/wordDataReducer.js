const wordDataReducer = (state = null, action) => {
    switch (action.type) {
      case 'FETCH_WORD_DATA':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default wordDataReducer;