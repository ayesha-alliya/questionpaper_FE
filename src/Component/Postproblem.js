import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Postproblem() {

    const [problem, setProblem] = useState("")
    const [list, setSlist] = useState([])


    function Submit() {
        const mid=sessionStorage.getItem("UserId");
        const data = { problem }
        axios
            .post(`http://localhost:8080/PostproblemTicket/${mid}`, data)
            .then((res) => {
                alert(res.data)
                GetPostproblemTicket()
                setProblem("")
            })
            .catch((err) => {
                alert("Failed")
            })
    }

    function GetPostproblemTicket() {
        axios.get("http://localhost:8080/GetPostproblemTicket")
            .then((res) => {
                setSlist(res.data)
            })
    }

    useEffect(() => {
        GetPostproblemTicket()
    }, [])

    return (
        <div className='container'>
            <div className="row">
                <div className="col-sm-6 mt-5">
                    <div className="card">
                        <h4 className='text-center p-2'>Post Problem Ticket</h4>

                        <div className="card-body">
                            <div className="form-outline">
                                <label>Problem</label>
                                <input type="text" className='form-control' value={problem} onChange={(e) => setProblem(e.target.value)} />
                            </div>
                        </div>
                        <div className='py-2'>
                            <Link className="btn btn-primary p-2 me-3 float-end" type='submit' onClick={Submit}>Submit</Link>
                        </div>
                    </div>
                </div>

                <div className=" p-2 col-sm-6 mx-auto mt-5">
                    <div className="card">
                        <div className=" text-center bg-success text-white">
                            <h4 className="text-center">View Problem Ticket</h4>
                        </div>
                    </div>
                    <table className="table table-striped table-hover text-center mt-4 shadow bg-white">
                        <thead>
                            <tr>
                     
                                <th>Problem</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                list.map((item, index) => (
                                    <tr key={index}>

                                     
                                        <td>{item.problem}</td>
                                        <td>{item.status}</td>


                                    </tr>
                                ))
                            }</tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
