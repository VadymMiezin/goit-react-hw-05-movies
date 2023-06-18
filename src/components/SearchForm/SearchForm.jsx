import { useState } from 'react';

export const SearchForm = ({ onSubmit }) => {
  const [searchRequest, setSearchRequest] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const currentSearchRequest = e.target[0].value;

    if (currentSearchRequest === '') {
      alert('Enter at least one word');
    }
    onSubmit(currentSearchRequest);
    setSearchRequest('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Type title for search"></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
