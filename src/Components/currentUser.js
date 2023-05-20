import useFetchData from "../CustomHooks/useFetchData";

export default function CurrentUser () {
    const {data} = useFetchData ('https://twitter-express-server.vercel.app/users/listone?id=615cefd72b3e8272f6c87502')

    if (!data) {
        return <div>Loading...</div>;
      }

        const {user} = data

    return(
        <div>
            <div><img src={user.image} alt='pic'/></div>
            <div>{user.username}</div>
            <div>{user.email}</div>
            <div>{user.city}</div>
            <div>{user.country}</div>
            <div>{user.age}</div>
            <div>{user.gender}</div>
            <div>{user.hobbies[0]},{user.hobbies[1]}</div>
            
        </div>
    )
}

