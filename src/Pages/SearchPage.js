import TimeAago from 'react-timeago'
import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import useFetchData from '../CustomHooks/useFetchData'

export default function SearchPage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const { data } = useFetchData(`https://twitter-express-server.vercel.app/posts/search?text=${encodeURIComponent(query)}`);

  useEffect(() => {
    if (data && data.posts) {
      const filtered = data.posts.filter((post) => {
        const { text } = post;
        
        return (
          text.toLowerCase().includes(query.toLowerCase())
        );
      });

      setFilteredPosts(filtered);
    }
  }, [query, data]);

  return (
    <div>
        Search Result for "{query}"
      {filteredPosts.map((item, index) => (
        <div key={index}>
          <div>Post: {item.text}</div>
          <div>User: {item.owner.username}<img src={item.owner.image} alt="profile pic"/></div>
          <div>Time: <TimeAago date={item.date} /></div>
        </div>
      ))}
    </div>
  );
}





