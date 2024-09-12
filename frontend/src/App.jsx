import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import NewsCard from './components/NewsCard';
import Pagination from './components/Pagination';

function App() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    fetchNews();
  }, [currentPage]);

  const fetchNews = async () => {
    try {
      const queryParams = new URLSearchParams({
        q: searchQuery,
        lang: 'en',
        max: '10',
        page: currentPage.toString(),
        ...(category && { category }),
        ...(country && { country }),
      });

      const response = await fetch(`https://aconews-backend-henna.vercel.app/api/news?${queryParams}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setArticles(data.articles);
      setTotalPages(Math.ceil(data.totalResults / 10));
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchNews();
  };

  return (
    <div className="w-full">
      <div className="w-full lg:h-[300px] md:h-[200px] h-[200px] flex flex-col items-center justify-end bg-blue-500 p-6 mb-6">
        <h1 className="text-7xl font-bold mb-8 text-white">AcoNews</h1>
        <SearchBar query={searchQuery} onQueryChange={setSearchQuery} />
      </div>
      <form onSubmit={handleFormSubmit} className="mb-8 mx-8">
        <div className="flex flex-col lg:flex-row md:flex-row space-y-4">
          <div className="flex flex-row space-x-4 items-center">
            <Filters
              category={category}
              country={country}
              onCategoryChange={setCategory}
              onCountryChange={setCountry}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-800"
            >
              Search
            </button>
          </div>
        </div>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mx-8">
        {articles && articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default App;
