import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Addquestion() {
  const qtype=['Easy','Medium','Hard']

  const [level,setLevel]=useState([])
  const [subjects, setSubject] = useState([]);

  const [sid, setSId] = useState("");
  const [question, setQuestion] = useState("");
  const [marks, setMarks] = useState("");
 

  console.log(subjects)
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

  function handlisubmit(e) {
    debugger
    e.preventDefault();
    const data = { question, marks,level }

    axios
      .post(`http://localhost:8080/Addquestions/${sid}`, data)
      .then((res) => {
        alert("Added Successfully")
        ClearAll()

      })
      .catch((err) => {
        alert("Failed")
      })
  }
  function ClearAll()
  {
    setLevel("")
    setQuestion("")
    setMarks("")
  }

 
  return (
    <div>


      <div className='container'>
        <div className="row">
          <div className="col-sm-9 mt-5 offset-1">
            <div className="card">
              <h4 className='text-center p-2'>Add Question</h4>

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

                <div className="form-group">
                  <label className="form-label">Select Level</label>
                  <select
                    className="form-select mb-1 text-center"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    required
                  >
                    <option value="" hidden>----Select----</option>
                    {qtype.map((sub, index) => (
                      <option key={index} value={sub}>
                        {sub}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-outline">
                  <label>Enter Question</label>
                  <input type="text" className='form-control' value={question}
                    onChange={(e) => setQuestion(e.target.value)} />
                </div>
                <div className="form-outline">
                  <label>Enter Marks</label>
                  <input type="text" className='form-control' value={marks}
                    onChange={(e) => setMarks(e.target.value)} />
                </div>
              </div>
              <div className='py-2'>
                <Link className="btn btn-primary p-2 me-3 float-end" type='submit' onClick={handlisubmit}>Submit</Link>
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  )
}
