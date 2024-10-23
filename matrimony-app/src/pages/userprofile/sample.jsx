
import React, { useState, useEffect } from 'react';

const StorageDemo = () => {
  const [localData, setLocalData] = useState('');
  const [sessionData, setSessionData] = useState('');
  const [cookieData, setCookieData] = useState('');

  // Local Storage Operations
  const handleLocalStorage = () => {
    localStorage.setItem('localKey', 'This is stored in localStorage');
    setLocalData(localStorage.getItem('localKey'));
  };

  const clearLocalStorage = () => {
    localStorage.removeItem('localKey');
    setLocalData('');
  };

  // Session Storage Operations
  const handleSessionStorage = () => {
    sessionStorage.setItem('sessionKey', 'This is stored in sessionStorage');
    setSessionData(sessionStorage.getItem('sessionKey'));
  };

  const clearSessionStorage = () => {
    sessionStorage.removeItem('sessionKey');
    setSessionData('');
  };

  // Cookie Operations
  const handleCookie = () => {
    document.cookie = "cookieKey=This is stored in cookie; expires=" + new Date(Date.now() + 86400000).toUTCString();
    setCookieData(document.cookie.split('=')[1]);
  };

  const clearCookie = () => {
    document.cookie = "cookieKey=; expires=" + new Date(0).toUTCString();
    setCookieData('');
  };

  useEffect(() => {
    // Check for existing data on component mount
    const localStorageData = localStorage.getItem('localKey');
    const sessionStorageData = sessionStorage.getItem('sessionKey');
    const cookieValue = document.cookie.split('=')[1];

    if (localStorageData) setLocalData(localStorageData);
    if (sessionStorageData) setSessionData(sessionStorageData);
    if (cookieValue) setCookieData(cookieValue);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Web Storage Demo</h1>

      <div className="space-y-8">
        {/* Local Storage Section */}
        <div className="border p-4 rounded">
          <h2 className="text-xl font-semibold mb-4">Local Storage</h2>
          <div className="space-y-2">
            <button 
              onClick={handleLocalStorage}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            >
              Set Local Storage
            </button>
            <button 
              onClick={clearLocalStorage}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Clear Local Storage
            </button>
            <p className="mt-2">Local Storage Value: {localData}</p>
          </div>
        </div>

        {/* Session Storage Section */}
        <div className="border p-4 rounded">
          <h2 className="text-xl font-semibold mb-4">Session Storage</h2>
          <div className="space-y-2">
            <button 
              onClick={handleSessionStorage}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            >
              Set Session Storage
            </button>
            <button 
              onClick={clearSessionStorage}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Clear Session Storage
            </button>
            <p className="mt-2">Session Storage Value: {sessionData}</p>
          </div>
        </div>

        {/* Cookie Section */}
        <div className="border p-4 rounded">
          <h2 className="text-xl font-semibold mb-4">Cookie Storage</h2>
          <div className="space-y-2">
            <button 
              onClick={handleCookie}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            >
              Set Cookie
            </button>
            <button 
              onClick={clearCookie}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Clear Cookie
            </button>
            <p className="mt-2">Cookie Value: {cookieData}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded">
        <h3 className="font-semibold mb-2">Storage Information:</h3>
        <ul className="list-disc ml-6">
          <li>Local Storage: Persists until explicitly cleared</li>
          <li>Session Storage: Persists until browser tab is closed</li>
          <li>Cookies: Can be set with expiration date and are sent with HTTP requests</li>
        </ul>
      </div>
    </div>
  );
};

export default StorageDemo;
