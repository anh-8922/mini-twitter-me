import useFetchData from "../CustomHooks/useFetchData";
import TimeAgo from 'react-timeago'
import './css/pages.css';


const { DateTime } = require("luxon");

export default function AllMessages() {
  const { data } = useFetchData('https://twitter-express-server.vercel.app/posts/list');


  if (!data) {
    return <div>Loading...</div>;
  }

  const { posts } = data;




  return (
    <div className="messages" >
      
      {posts.map((item, index) => (
        <div className="items" key={index} >
          {item.text}<br/>
          <img src={item.owner.image} style={{width: "5rem"}}/><br/>
          {item.owner.username}<br/>
          {DateTime.now().toLocaleString(item.date)}<br/>
          <TimeAgo date={item.date}/>
        </div>
      ))}
    </div>
  );
}