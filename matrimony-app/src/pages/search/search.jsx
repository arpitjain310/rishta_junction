import React, { useState } from 'react';
import './search.css';
import axios from 'axios';

const Search = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    age_min: '',
    age_max: '',
    gender: '',
    location: '',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if at least one filter is selected
    if (Object.values(searchCriteria).every(value => value === '')) {
      alert('Please select at least one filter');
      return;
    }
      try {
        const filteredCriteria = Object.fromEntries(
          Object.entries(searchCriteria).filter(([_, value]) => value !== '')
        );
        const response = await axios.get('http://localhost:8000/api/profiles/filter', { params: filteredCriteria });
        setSearchResults(response.data);
        setCurrentPage(1);
      } catch (error) {
        console.error('Error fetching search results:', error);
        alert('An error occurred while fetching search results');
      }
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
          <div className="search-field">
            <label htmlFor="age_min">Min Age</label>
            <input type="number" id="age_min" name="age_min" value={searchCriteria.age_min} onChange={handleInputChange} />
          </div>
          <div className="search-field">
            <label htmlFor="age_max">Max Age</label>
            <input type="number" id="age_max" name="age_max" value={searchCriteria.age_max} onChange={handleInputChange} />
          </div>
          <div className="search-field">
            <label htmlFor="gender">Gender</label>
            <select id="gender" name="gender" value={searchCriteria.gender} onChange={handleInputChange}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="search-field">
            <label htmlFor="location">Location</label>
            <input type="text" id="location" name="location" value={searchCriteria.location} onChange={handleInputChange} />
          </div>
          <div className="search-field">
            <label htmlFor="religion">Religion</label>
            <input type="text" id="religion" name="religion" value={searchCriteria.religion} onChange={handleInputChange} />
          </div>
          <div className="search-field">
            <label htmlFor="caste">Caste</label>
            <input type="text" id="caste" name="caste" value={searchCriteria.caste} onChange={handleInputChange} />
          </div>
          <div className="search-field">
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
            <p>Gender: {result.gender}</p>
            <p>Location: {result.location}</p>
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