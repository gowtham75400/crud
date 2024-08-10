import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
    const { users, setUsers } = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:3000")
        .then((res) => setUsers(res.data))
        .catch((err) => console.error(err));
    });
    return (
        <div>
        <table className="table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
            </thead>

            <tbody>
            {
                users.map((user,index) => (
                    <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td>Activities</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
        </div>
    );
};

export default Users;
