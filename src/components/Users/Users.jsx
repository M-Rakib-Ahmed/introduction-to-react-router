import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
           <h2>Our Usrs:{users.length}</h2>
           <h2>Fantastic and vodro Users</h2>
           <div className="grid">
            {
                users.map(user =><User key={user.id} user={user}></User>)
            }
           </div>
        </div>
    );
};

export default Users;