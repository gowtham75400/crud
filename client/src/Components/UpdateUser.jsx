import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
    const { id } = useParams(); 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    useEffect(() => {
        axios
        .get(`http://localhost:3000/getUser/${id}`)
        .then((res) => {
            console.log(res.data);
            setName(res.data.name);
            setEmail(res.data.email);
            setAge(res.data.age);
        })
        .catch((err) => console.log(err));
    }, [id]); 

    const navigate = useNavigate();

    const Update = (e) => {
        e.preventDefault();
        axios
        .put(`http://localhost:3000/updateUser/${id}`, { name, email, age })
        .then((res) => {
            console.log(res.data);
            navigate("/");
        })
        .catch((err) => console.log(err));
    };

    return (
        <div>
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-80 bg-white rounded p-3">
            <form onSubmit={Update}>
                <h2>UPDATE USER</h2>
                <div className="mb-2">
                <label htmlFor="">Name</label>
                <input
                    type="text"
                    placeholder="Enter your Name"
                    className="form-control"
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                />
                </div>
                <div className="mb-2">
                <label htmlFor="">Email</label>
                <input
                    type="text"
                    placeholder="Enter your email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>
                <div className="mb-2">
                <label htmlFor="">Age</label>
                <input
                    type="text"
                    placeholder="Enter your Age"
                    className="form-control"
                    value={age} 
                    onChange={(e) => setAge(e.target.value)}
                />
                </div>
                <button className="btn btn-success">Update</button>
            </form>
            </div>
        </div>
        </div>
    );
    };

    export default UpdateUser;
