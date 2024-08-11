import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function Approvemember() {
    const [list, setList] = useState([]);

    useEffect(() => {
        getmembers();
    }, []);

    function getmembers() {
        axios.get('http://localhost:8080/getuser')
            .then((res) => {
                setList(res.data);
            });
    }

    function Approve(id) {
        debugger
        axios
            .put(`http://localhost:8080/Approveusers/${id}`)
            .then((res) => {
                alert(res.data);
                getmembers();
            })
            .catch((err) => {
                alert('Failed');
            });
    }

    return (

        <div className="col-sm-10 mt-5 lbl offset-1">
            <div className="card">
                <div className=" text-center bg-success text-white">
                    <h4 className="text-center mt-2">Approve Products </h4>
                </div>
            </div>
            <table className="table table-striped table-hover text-center mt-4 shadow bg-white">
                <thead>
                    <tr>
                        <th>Member Name </th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Approve</th>
                    </tr>
                </thead>
                <tbody>
                    {list.filter((item)=>item.status==="Pending")
                        .map((lst, index) => (
                            <tr key={index}>
                                <td>{lst.name}</td>
                                <td>{lst.email}</td>
                                <td>{lst.address}</td>
                                <td>{lst.phone}</td>
                                <td>{lst.status}</td>
                                <td>
                                    
                                        <Link
                                            className="btn btn-danger"
                                            onClick={() => {
                                                Approve(lst.regid);
                                            }}
                                        >
                                            Approve
                                        </Link>
                                 
                                      
                                  
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}
