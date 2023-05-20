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
          <div>Profile piture:<img src={item.owner.image} alt='profile picture'/></div> //we can use Avatar for this from bootstrap
          <div>User Name:{item.owner.username}</div>
          {/* <div>{DateTime.now().toLocaleString(item.date)}</div> */}
          <div>Posted date:{DateTime.fromISO(item.date).toLocaleString(DateTime.DATETIME_MED)}</div>
          {/* <div>{item.date}</div> */}
          <div>Posted: <TimeAgo date={item.date}/></div>
        </div>
      ))}
    </div>
  );
}
