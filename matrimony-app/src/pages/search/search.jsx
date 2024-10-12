import React, { useState } from 'react';
import './search.css';

const Search = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    minAge: '',
    maxAge: '',
    religion: '',
    caste: '',
    profession: ''
  });

  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call with the search criteria
    console.log('Search criteria:', searchCriteria);
    // Mock search results
    const mockResults = Array.from({ length: 25 }, (_, i) => ({
      id: i + 1,
      name: `Person ${i + 1}`,
      age: Math.floor(Math.random() * (50 - 18 + 1)) + 18,
      religion: ['Hindu', 'Muslim', 'Christian', 'Sikh'][Math.floor(Math.random() * 4)],
      caste: ['Brahmin', 'Kshatriya', 'Vaishya', 'Shudra', 'N/A'][Math.floor(Math.random() * 5)],
      profession: ['Engineer', 'Doctor', 'Teacher', 'Lawyer', 'Entrepreneur'][Math.floor(Math.random() * 5)]
    }));
    setSearchResults(mockResults);
    setCurrentPage(1);
  };

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = searchResults.slice(indexOfFirstResult, indexOfLastResult);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="search-container">
      
      <h2>Search Potential Matches</h2>

      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-row">
          <div className="search-field" style={{ width: '150px' }}>
            <label htmlFor="minAge">Min Age</label>
            <select id="minAge" name="minAge" value={searchCriteria.minAge} onChange={handleInputChange}>
              <option value="">Select Min Age</option>
              {Array.from({ length: 40 }, (_, i) => i + 21).map(age => (
                <option key={age} value={age}>{age}</option>
              ))}
            </select>
          </div>
          <div className="search-field" style={{ width: '150px' }}>
            <label htmlFor="maxAge">Max Age</label>
            <select id="maxAge" name="maxAge" value={searchCriteria.maxAge} onChange={handleInputChange}>
              <option value="">Select Max Age</option>
              {Array.from({ length: 40 }, (_, i) => i + 21).map(age => (
                <option key={age} value={age}>{age}</option>
              ))}
            </select>
          </div>
          <div className="search-field" style={{ width: '200px' }}>
            <label htmlFor="religion">Religion</label>
            <select id="religion" name="religion" value={searchCriteria.religion} onChange={handleInputChange}>
              <option value="">Select Religion</option>
              <option value="Hindu">Hindu</option>
              <option value="Muslim">Muslim</option>
              <option value="Christian">Christian</option>
              <option value="Sikh">Sikh</option>
            </select>
          </div>
          <div className="search-field" style={{ width: '200px' }}>
            <label htmlFor="caste">Caste</label>
            <input type="text" id="caste" name="caste" value={searchCriteria.caste} onChange={handleInputChange} />
          </div>
          <div className="search-field" style={{ width: '200px' }}>
            <label htmlFor="profession">Profession</label>
            <input type="text" id="profession" name="profession" value={searchCriteria.profession} onChange={handleInputChange} />
          </div>
        </div>
        <button type="submit" className="search-button">Search</button>
      </form>

      <div className="search-results">
        {currentResults.map(result => (
          <div key={result.id} className="search-result-item">
            <h4>{result.name}</h4>
            <p>Age: {result.age}</p>
            <p>Religion: {result.religion}</p>
            <p>Caste: {result.caste}</p>
            <p>Profession: {result.profession}</p>
          </div>
        ))}
      </div>

      {searchResults.length > resultsPerPage && (
        <div className="search-pagination">
          {Array.from({ length: Math.ceil(searchResults.length / resultsPerPage) }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={currentPage === i + 1 ? 'active' : ''}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;