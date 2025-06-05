import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteCard from './components/Card';
import ThemeToggle from './components/ThemeToggle';
import QuoteButton from './components/button';
import FontSizeSelector from './components/Fontsize';
import './App.css';
import './styles/light.css';
import './styles/dark.css';

function App() {
  const [quote, setQuote] = useState(null); // Changed to null initially
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState('light');
  const [fontSize, setFontSize] = useState(20);
  const [isLiked, setIsLiked] = useState(false);

  const fetchQuote = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get('https://zenquotes.io/api/random');
      const [quoteData] = response.data;
      setQuote({ text: quoteData.q, author: quoteData.a });
      setIsLiked(false);
    } catch (err) {
      console.error('Error fetching quote:', err);
      setError('Failed to fetch quote. Please try again.');
      setQuote(null); // Clear any previous quote on error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className={`app ${theme}`}>
      <div className="header">
        <h1>QuoteSage</h1>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
      
      <div className="main-content">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <>
            {error && !quote && (
              <div className="error-message">
                {error}
                <QuoteButton theme={theme} onClick={fetchQuote}>
                  Try Again
                </QuoteButton>
              </div>
            )}
            {quote && (
              <QuoteCard 
                quote={quote.text} 
                author={quote.author} 
                fontSize={fontSize}
                theme={theme}
                onLike={handleLike}
                isLiked={isLiked}
              />
            )}
          </>
        )}
        
        <div className="controls">
          {quote && (
            <QuoteButton theme={theme} onClick={fetchQuote}>
              New Quote
            </QuoteButton>
          )}
          
          <FontSizeSelector 
            fontSize={fontSize} 
            setFontSize={setFontSize}
            theme={theme}
          />
        </div>
      </div>
    </div>
  );
}

export default App;