import useFetchData from "../CustomHooks/useFetchData";


export default function AllUsers() {
  const { data } = useFetchData('https://twitter-express-server.vercel.app/users/list');

  if (!data) {
    return <div>Loading...</div>;
  }

  const { users } = data;

  return (
    <div>
      {users.map((item, index) => (
        <div key={index}>
          <div><img src={item.image} alt="profile pic"/></div>
          <div>User Name: {item.username}</div>
          <div>Email: {item.email}</div>
          <div>City: {item.city} Country: {item.country}</div>
          <div>Age: {item.age}</div>
          <div>Gender: {item.gender}</div>
          <div>Hobbies: {item.hobbies[0]}, {item.hobbies[1]}</div>
        </div>
      ))}
    </div>
  );
}
