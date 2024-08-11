import React, { useEffect, useState } from 'react'
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import axios from 'axios';
import { Link } from 'react-router-dom';

(pdfMake).vfs = pdfFonts.pdfMake.vfs;

export default function Downloadpdf() {

    const [list,setSlist]=useState([])

    useEffect(()=>{
        Getpapers()
    },[])

    function Getpapers()
    {
        axios.get("http://localhost:8080/Getpaper")
        .then((res)=>{
            setSlist(res.data)
        })
    }

    const Download = (itemQSet) => {
        debugger;
        const date = new Date().toLocaleDateString();
        axios.get(`http://localhost:8080/Getpaperbyqset/${itemQSet}`)
          .then((res) => {
            
            const sub = res.data[0].subject;
      
            let tableBody = [];
            let i = 1;
            tableBody.push(['QNo.', 'Question', 'Marks']);
      
            res.data.forEach((item) => {
              tableBody.push([i++, item.question, item.marks]);
            });
      
            const docDefinition = {
              content: [
                {
                  text: 'Karnataka Secondary Education Examination Board, Malleswaram Bangalore - 560003',
                  style: 'sectionHeader',
                },
                {
                  text: 'S.S.L.C Examination , March/April',
                  style: 'subHeader',
                },
                {
                  text: 'Subject : ' + sub,
                  style: 'textCenter',
                },
                {
                  text: 'Date : ' + date,
                  style: 'date',
                },
                {
                  text: 'Max. Marks :' + '100',
                  style: 'max',
                },
                {
                  table: {
                    headerRows: 1,
                    widths: [50, 400, 50], // Set the width for each column
                    body: tableBody,
                  },
                },
              ],
              styles: {
                sectionHeader: { fontSize: 12, bold: true, alignment: 'center', margin: 3 },
                subHeader: { fontSize: 12, bold: true, alignment: 'center', margin: 3 },
                textCenter: { alignment: 'center', fontSize: 16, margin: 3 },
                date: { fontSize: 12, bold: true, margin: 3 },
                max: { fontSize: 12, bold: true, alignment: 'right', margin: 3 },
              },
            };
      
            pdfMake.createPdf(docDefinition).download('Questionpaper.pdf');
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      };
      

  return (
    <div>
    <div className="container">
    <div className="col-sm-8 offset-2">
        <div className="card mt-5">
            <div className="card-header bg-info">
                <h4 className="text-center text-white">Download Question Papers</h4>
            </div>
        </div>
    
        <table className="table table-striped table-hover text-center mt-3">
            <thead>
                <tr>
                   
                    <th>Subject</th>
                    <th>Question set</th>
                    <th>Download Pdf</th>
                   
                </tr>
            </thead>
            <tbody >
            {
                list.map((item,index)=>(
                    <tr key={index}>
                      <td>{item.subject}</td>
                      <td>{item.qset}</td>
                     <td>
                     <Link className='btn btn-danger' onClick={() => Download(item.qset)}>Download</Link>
                     </td>
                    </tr>
                ))
             }
            </tbody>
        </table>
    </div>
      </div>
    </div>
  )
}
