import useFetchData from "../CustomHooks/useFetchData";
import TimeAgo from 'react-timeago'


const { DateTime } = require("luxon");

export default function AllMessages() {
  const { data } = useFetchData('https://twitter-express-server.vercel.app/posts/list');

  if (!data) {
    return <div>Loading...</div>;
  }

  const { posts } = data;

  return (
    <div>
      {posts.map((item, index) => (
        <div key={index}>
          <div>{item.text}</div>
          <div><img src={item.owner.image}/></div>
          <div>{item.owner.username}</div>
          <div>{DateTime.now().toLocaleString(item.date)}</div>
          <div><TimeAgo date={item.date}/></div>
        </div>
      ))}
    </div>
  );
}
