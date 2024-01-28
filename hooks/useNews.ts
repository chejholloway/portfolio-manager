// hooks/useNews.ts
import { useQuery } from 'react-query';
import axios from 'axios';
import { NewsItem } from '../types';

const fetchNews = async () => {
  const { data } = await axios.get<NewsItem[]>('/api/news');
  return data;
};

const useNews = () => {
  return useQuery('news', fetchNews);
};

export default useNews;
