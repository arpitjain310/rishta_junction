import React, { useState } from 'react';
import './search.css';
import axios from 'axios';
import { profileServices } from '../../services/profileServices';

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
        const data = await profileServices.searchProfiles(filteredCriteria);
        setSearchResults(data);
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

  const createMatch = async (profileId) => {
    try {
      let userId = localStorage.getItem("user_id");
      await profileServices.createMatch(userId, profileId);
      alert('Match created successfully!');
    } catch (error) {
      console.error('Error creating match:', error);
      alert('An error occurred while creating the match');
    }
  };

  return (
    <div className="search-container">
      <h2>Search Potential Matches</h2>

      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-row">
          <div className="search-field">
            <label htmlFor="age_min">Min Age</label>
            <select id="age_min" name="age_min" value={searchCriteria.age_min} onChange={handleInputChange}>
              <option value="">Select Min Age</option>
              {[...Array(43)].map((_, i) => (
                <option key={i} value={i + 18}>{i + 18}</option>
              ))}
            </select>
          </div>
          <div className="search-field">
            <label htmlFor="age_max">Max Age</label>
            <select id="age_max" name="age_max" value={searchCriteria.age_max} onChange={handleInputChange}>
              <option value="">Select Max Age</option>
              {[...Array(40)].map((_, i) => (
                <option key={i} value={i + 21} disabled={parseInt(searchCriteria.age_min) >= (i + 21)}>{i + 21}</option>
              ))}
            </select>
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
            <select id="religion" name="religion" value={searchCriteria.religion} onChange={handleInputChange}>
              <option value="">Select Religion</option>
              <option value="hinduism">Hinduism</option>
              <option value="islam">Islam</option>
              <option value="christianity">Christianity</option>
              <option value="sikhism">Sikhism</option>
              <option value="buddhism">Buddhism</option>
              <option value="jainism">Jainism</option>
              <option value="other">Other</option>
            </select>
          </div>
          
         
          <div className="search-field">
            <label htmlFor="profession">Profession</label>
            <select id="profession" name="profession" value={searchCriteria.profession} onChange={handleInputChange}>
              <option value="">Select Profession</option>
              <option value="engineer">Engineer</option>
              <option value="doctor">Doctor</option>
              <option value="teacher">Teacher</option>
              <option value="lawyer">Lawyer</option>
              <option value="accountant">Accountant</option>
              <option value="manager">Manager</option>
              <option value="entrepreneur">Entrepreneur</option>
              <option value="artist">Artist</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <button type="submit" className="search-button">Search</button>
      </form>

      <div className="search-results">
  {currentResults.map(result => (
    <div key={result.id} className="search-result-item">
      <div className="search-result-content">
        <h4>{result.name}</h4>
        <p>Age: {result.age} | Gender: {result.gender}</p>
        <p>Location: {result.location}</p>
        <p>Religion: {result.religion} | Caste: {result.caste}</p>
        <p>Profession: {result.profession}</p>
      </div>
      <button onClick={() => createMatch(result.user_id)} className="create-match-button">Create Match</button>
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