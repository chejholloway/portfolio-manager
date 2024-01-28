// components/NewsFeed.tsx
import React from 'react';
import useNews from '../hooks/useNews';
import { NewsItem } from '../types';

const NewsFeed: React.FC = () => {
  const { data: news, isLoading, isError } = useNews();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading news</div>;
  }

  return (
    <ul>
      {news.map((item: NewsItem) => (
        <li key={item.uuid}>
          <h3>{item.headline}</h3>
          <p>{item.summary}</p>
          <img src={item.imageUrl} alt={item.headline} />
        </li>
      ))}
    </ul>
  );
};

export default NewsFeed;
