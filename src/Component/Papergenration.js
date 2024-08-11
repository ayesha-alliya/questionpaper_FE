import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Papergenration() {

  const [subjects, setSubject] = useState([]);

  const [sid, setSId] = useState("");
  const [qset, setQset] = useState("");

  useEffect(() => {
    Viewsubjects()

  }, [])

  function Viewsubjects() {
    axios.get("http://localhost:8080/GetSubject")
      .then((res) => {
        setSubject(res.data)
        console.log(res.data.sid)
      })
  }

  function Submit() {
    axios.post(`http://localhost:8080/AddPapergenerator/${sid}/${qset}`, '')
      .then((res) => {
        alert("Paper generate Successfully")
      })
      .catch((err) => {
        alert("Error")
      })
  }

  return (
    <div>
      <div className='container'>
        <div className="row">
          <div className="col-sm-9 mt-5 offset-1">
            <div className="card">
              <h4 className='text-center p-2'>Paper Generation</h4>

              <div className="card-body">

                <div className="form-group">
                  <label className="form-label">Select Subject</label>
                  <select
                    className="form-select mb-1 text-center"
                    value={sid}
                    onChange={(e) => setSId(e.target.value)}
                    required
                  >
                    <option value="" hidden>----Select----</option>
                    {subjects.map((sub, index) => (
                      <option key={index} value={sub.sid}>
                        {sub.subject}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-outline">
                  <label>Enter Question set No.</label>
                  <input type="text" className='form-control'
                    value={qset}
                    onChange={(e) => setQset(e.target.value)} />
                </div>

              </div>
              <div className='py-2'>
                <Link className="btn btn-primary p-2 me-3 float-end" type='submit' onClick={Submit}>Submit</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
