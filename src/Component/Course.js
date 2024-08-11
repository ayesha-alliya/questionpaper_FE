import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Course() {

    const [course, Setcourse] = useState("")
    const [list, setSlist] = useState([])


    function Addcourse() {
        const data = { course }
        axios
            .post("http://localhost:8080/Addcourse", data)
            .then((res) => {
                alert(res.data)
                viewCourse()
                Setcourse("")
            })
            .catch((err) => {
                alert("Failed")
            })
    }

    function viewCourse() {
        axios.get("http://localhost:8080/Getcourse")
            .then((res) => {
                setSlist(res.data)
            })
    }

    useEffect(() => {
        viewCourse()
    }, [])

    return (
        <div className='container'>
            <div className="row">
                <div className="col-sm-6 mt-5">
                    <div className="card">
                        <h4 className='text-center p-2'>Add Course</h4>

                        <div className="card-body">
                            <div className="form-outline">
                                <label>Enter Course</label>
                                <input type="text" className='form-control' value={course} onChange={(e) => Setcourse(e.target.value)} />
                            </div>
                        </div>
                        <div className='py-2'>
                            <Link className="btn btn-primary p-2 me-3 float-end" type='submit' onClick={Addcourse}>Submit</Link>
                        </div>
                    </div>
                </div>

                <div className=" p-2 col-sm-6 mx-auto mt-5">
                    <div className="card">
                        <div className=" text-center bg-success text-white">
                            <h4 className="text-center">Added Courses</h4>
                        </div>
                    </div>
                    <table className="table table-striped table-hover text-center mt-4 shadow bg-white">
                        <thead>
                            <tr>
                                <th>Course Id</th>
                                <th>Course</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                list.map((item, index) => (
                                    <tr key={index}>

                                        <td>{item.cid}</td>
                                        <td>{item.course}</td>


                                    </tr>
                                ))
                            }</tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
