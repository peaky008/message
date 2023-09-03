import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HistoryPage = () => {
  const searchHistory = useSelector(state => state.search);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchHistory) {
      setError('Error fetching search history');
    }
  }, [searchHistory]);

  const handleHistoryClick = (word) => {
    navigate(`/word/${word}`);
  };

  return (
    <div>
      <h1>Search History</h1>
      {error ? (
        <p className="err">{error}</p>
      ) : searchHistory && searchHistory.length > 0 ? (
        <ul>
          {searchHistory.map((item, index) => (
            <li key={index} onClick={() => handleHistoryClick(item)}>
               <p className='it'>{item}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="err">No search history found</p>
      )}
    </div>
  );
};

export default HistoryPage;