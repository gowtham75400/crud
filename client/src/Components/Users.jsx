import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Users = () => {

    const[users,setUsers] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3000')
        .then(result=>setUsers(result.data))
        .catch(err=>console.log(err))
    })

    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/deleteUser/'+id)
        .then(result=> {
            console.log(result)
            window.location.reload()
        })
        .catch(err => console.log(err))

    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className="w-80 bg-white rounded p-3 ">
            <Link to='/create' className='btn btn-sucess'>ADD User</Link>
        <table className='table'>
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
            users.map((user,index)=>{
                return(
                    <tr key={index}>
                        <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td><Link to={`/update/${user._id}`} className='btn btn-success'>Update</Link> &nbsp;
                    <button className='btn btn-danger' onClick={()=>handleDelete(user._id)}>Delete</button>
                </td>
                    </tr>
                )
            })
        }
            </tbody>
        </table>
        </div>
        </div>
    )
    }

export default Users
