import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Subject() {

  const [subject, setSubject] = useState("")
  const [cid, Setcid] = useState("")
  const [list, setSlist] = useState([])
  const [course, Setcourse] = useState([])

  useEffect(() => {
    Viewsubjects()
    viewCourse()
  }, [])

  function Addsubject() {
    debugger
    const data = { subject }
    axios
      .post(`http://localhost:8080/Addsubject/${cid}`, data)
      .then((res) => {
        alert(res.data)
        ClearAll()
        Viewsubjects()
      })
      .catch((err) => {
        alert("Failed")
      })
  }

  function Viewsubjects() {
    axios.get("http://localhost:8080/GetSubject")
      .then((res) => {
        setSlist(res.data)
      })
  }

  function viewCourse() {
    axios.get("http://localhost:8080/Getcourse")
      .then((res) => {
        Setcourse(res.data)
      })
  }

  function ClearAll() {
    Setcid("")
    setSubject("")
  }

  return (
    <div className='container'>
      <div className="row">
        <div className="col-sm-6 mt-5">
          <div className="card">
            <h4 className='text-center p-2'>Add Subject</h4>

            <div className="card-body">
              <div className="form-group">
                <label className="form-label">Select Course</label>
                <select
                  className="form-select mb-1 text-center"
                  value={cid}
                  onChange={(e) => Setcid(e.target.value)}
                  required
                >
                  <option value="" hidden>----Select----</option>
                  {course.map((sub, index) => (
                    <option key={index} value={sub.cid}>
                      {sub.course}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-outline">
                <label>Enter Subject</label>
                <input type="text" className='form-control' value={subject} onChange={(e) => setSubject(e.target.value)} />
              </div>
            </div>
            <div className='py-2'>
              <Link className="btn btn-primary p-2 me-3 float-end" type='submit' onClick={Addsubject}>Submit</Link>
            </div>
          </div>
        </div>

        <div className=" p-2 col-sm-6 mx-auto mt-5">
          <div className="card">
            <div className=" text-center bg-success text-white">
              <h4 className="text-center">Added Subject</h4>
            </div>
          </div>
          <table className="table table-striped table-hover text-center mt-4 shadow bg-white">
            <thead>
              <tr>
                <th>Course</th>
                <th>Subject</th>
              </tr>
            </thead>
            <tbody>
              {
                list.map((item, index) => (
                  <tr key={index}>

                    <td>{item.course.course}</td>
                    <td>{item.subject}</td>


                  </tr>
                ))
              }</tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
