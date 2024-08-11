import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Solveproblem() {
    const [list, setList] = useState([]);

    useEffect(() => {
        GetPostproblemTicket();
    }, []);

    function GetPostproblemTicket() {
        axios.get('http://localhost:8080/GetPostproblemTicket')
            .then((res) => {
                setList(res.data);
            });
    }

    function Solve(id) {
        debugger
        axios
            .put(`http://localhost:8080/Solveproblem/${id}`)
            .then((res) => {
                alert(res.data);
                GetPostproblemTicket();
            })
            .catch((err) => {
                alert('Failed');
            });
    }

    return (

        <div className="col-sm-10 mt-5 lbl offset-1">
            <div className="card">
                <div className=" text-center bg-success text-white">
                    <h4 className="text-center mt-2">View Problem Ticket</h4>
                </div>
            </div>
            <table className="table table-striped table-hover text-center mt-4 shadow bg-white">
                <thead>
                    <tr>
                        <th>Member Name </th>
                        <th> Problem </th>
                        <th>Status</th>
                        <th>Solve</th>
                    </tr>
                </thead>
                <tbody>
                    {list
                        .map((lst, index) => (
                            <tr key={index}>
                                <td>{lst.member?.name}</td>
                                <td>{lst.problem}</td>
                                <td>{lst.status}</td>
                                <td>

                                    {
                                        lst.status==="Pendingt" ?
                                        <Link
                                        className="btn btn-danger"
                                        onClick={() => {
                                            Solve(lst.postid);
                                        }}
                                    >
                                        Solve
                                    </Link>
                                    : null
                                    }


                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}
