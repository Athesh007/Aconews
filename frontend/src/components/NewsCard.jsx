import React from 'react';

const NewsCard = ({ article }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col hover:bg-slate-100 border-2">
      {article.image && (
        <img src={article.image} alt={article.title} className="w-full h-fit" />
      )}
      <div className="p-4 h-full flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
          <p className="text-gray-600 mb-4">{article.description}</p>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">{article.source.name}</span>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;