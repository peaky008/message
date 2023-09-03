export const fetchWordData = word => {
    return async dispatch => {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = await response.json();
  
      dispatch({
        type: 'FETCH_WORD_DATA',
        payload: data,
      });
    };
  };
  
  export const addSearchWord = word => ({
    type: 'ADD_SEARCH_WORD',
    payload: word
  });
  
  export const addToHistory = word => {
    return {
      type: 'ADD_TO_HISTORY',
      payload: word,
    };
  };