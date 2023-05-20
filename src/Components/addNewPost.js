
import { useState } from 'react';

export default function AddNewMessage() {
  const [post, setPost] = useState('');
  const handlePost = async () => {
    try {
      const response = await fetch('https://twitter-express-server.vercel.app/posts/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: post,
          owner: '615cefd72b3e8272f6c87502',
        }),
      });

      if (response.ok) {
        console.log('Message posted successfully!');
        setPost('');
      } else {
        console.error('Failed to post the message.');
      }
    } catch (error) {
      console.error('Error occurred while posting the message:', error);
    }
  };

  return (
    <div>
      <input value={post} onChange={(e) => setPost(e.target.value)} />
      <button onClick={handlePost}>POST</button>

    </div>
  );
}
