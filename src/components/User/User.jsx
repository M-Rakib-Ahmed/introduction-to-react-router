

const User = ({user}) => {
    console.log(user);
    
    const {id, name, username, email,  phone} =user;
    const userStyle ={
        border: '2px solid, gray',
        padding: '10px',
        borderRadius: '10px',
        
       
    }
    return (
        <div style={userStyle}>
          <h2>Naem: {name}</h2>  
          <h3>UserName: {username}</h3>
          <p>Email: {email}</p>
           <p>Phones:{phone}</p>
          <p></p>
        </div>
    );
};

export default User;