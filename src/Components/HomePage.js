import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSearchWord, addToHistory } from '../redux/actions/action';
import Loader from './Loader';

const HomePage = () => {
  const [word, setWord] = useState('');
  const [wordData, setWordData] = useState(null);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = event => {
    setWord(event.target.value);
  };

  const handleSearch = async event => {
    event.preventDefault();
    if (word.trim() === '') {
      setError('All fields are required');
      return;
    }

    setLoading(true);
    // Dispatch the action to add the word to the search history
    dispatch(addSearchWord(word));
    dispatch(addToHistory(word)); // Dispatch the action to add the word to the history
    // Call the API and handle the response
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      if (!response.ok) {
        throw new Error('Error fetching word data');
      }
      const data = await response.json();
      setWordData(data);
      // Clear the input field
      setWord('');
      setError(null);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <div>
      {loading ? <Loader /> : (
        <>
          <h1>Dictionary Search</h1>
          <form onSubmit={handleSearch} className="fo-rm">
            <input type="text" value={word} onChange={handleInputChange} placeholder="Search for a word" className="search-input" />
            <button type="submit" className="btn">Search</button>
          </form>
          {error && <p className="err">{error}</p>}
          {wordData && (
            <div>
              {wordData.map((word, index) => (
                <div key={index}>
                  <h2>Word: {word.word}</h2>
                  {word.phonetics.map((phonetic, index) => (
                    <div key={index}>
                      <p>Phonetic Text: {phonetic.text}</p>
                      <audio controls src={phonetic.audio}>
                        Your browser does not support the audio element.
                      </audio>
                    </div>
                  ))}
                  {word.meanings.map((meaning, index) => (
                    <div key={index}>
                      <p>Part of Speech: {meaning.partOfSpeech}</p>
                      {meaning.definitions.map((definition, index) => (
                        <div key={index}>
                          <p>Definition: {definition.definition}</p>
                        </div>
                      ))}
                    </div>
                  ))}
                  <br/>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default HomePage;