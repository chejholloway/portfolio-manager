// components/NewsFeed.tsx
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import newsData from "../../app/constants/newsData";
import ScrollableFeed from 'react-scrollable-feed'

const NewsFeed: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    // Simulate fetching news data asynchronously
    const fetchNews = async () => {
      try {
        const data = newsData
        ;
        setNews(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    // Call the fetchNews function when the component mounts
    fetchNews();
  }, []);

  return (
    <div className="w-full md:w-1/3 p-4 card stock">
      <h1 className="text-3xl p-2"> Top Stories</h1>
      <ul className="h-[400px] flex space-x-4 no-scrollbar stock">
        <ScrollableFeed>
        {news.map(({ uuid, headline, image, provider, summary, url, date }) => (
          <li key={uuid} className="card flex">
            <a href={url} target="_blank" className="flex items-center">
              <div className="p-4">
                <Image
                  className="rounded-none"
                  priority
                  src={image}
                  alt="Image"
                  height={48}
                  width={48}
                />
                <span>{new Date(date).toDateString()}</span>
               <p className="text-blue-500 text-ellipsis overflow-hidden ...">
                  {headline}
               </p>
              </div>
            </a>
            <hr className="py-4"/>
          </li>
        ))}
        </ScrollableFeed>
      </ul>
    </div>
  );
};

export default NewsFeed;
