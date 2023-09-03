

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const WordDetailsPage = () => {
    const { word } = useParams();
    const [wordData, setWordData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWordData = async () => {
            try {
                const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                setWordData(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchWordData();
    }, [word]);

    if (error) {
        return <div className="err">Error: {error}</div>;
    } else if (wordData) {
        return (
          <div>
              <h2>Word: {word}</h2>
              {wordData ? (
                  <div>
                      
                      {wordData[0].phonetics.map((phonetic, index) => (
                          <div key={index}>
                              <p>Audio: <audio controls src={phonetic.audio}></audio></p>
                              <p>Phonetic Text: {phonetic.text}</p>
                          </div>
                      ))}
                      {wordData[0].meanings.map((meaning, index) => (
                          <div key={index}>
                              <p>Part of Speech: {meaning.partOfSpeech}</p>
                              {meaning.definitions.map((def, index) => (
                                  <p key={index}>Definition: {def.definition}</p>
                              ))}
                          </div>
                      ))}
                      <br/>
                  </div>
              ) : (
                  <p>Loading...</p>
              )}
            </div>
        );
    } else {
        return <div>Loading...</div>;
    }
};

export default WordDetailsPage;