import React from 'react';

import './allotment.css';
import Fees from './info';
// import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

const AllotmentInfo = () => {

  const [fees, setFees] = React.useState(Fees);

  
    return (
        <div className="hall-details pi">
         <h2 className="info-container">Allotment Details</h2>
         <div className="hall-info">
          <table>
            <tbody>
              <tr>
                <td>Room Number</td>
                <td>: 140 C</td>
              </tr>
              <tr>
                <td>Allotment From</td>
                <td>: July,2020</td>
              </tr>
              <tr>
                <td>Allotment Expires</td>
                <td>: July,2025</td>
              </tr>

              <tr>
                <td>Emergency Contact Person</td>
                <td>: Rahik bhai ( Brother )</td>
              </tr>
              <tr>
                <td>Emergency Contact Person Number</td>
                <td>: 017******02</td>
              </tr>
              <tr>
                <td>Latest Result</td>
                <td>: CGPA 3.5 ( Third Year )</td>
              </tr>
            </tbody>
          </table>
        </div>
      
      <div className="fees-info">
        <div className="select-year">
          <h2>Hall Fees</h2> 
        </div>
        <div className="fees-data-table">
        <table className='fees-table'>
            <thead>
              <tr>
                <th>FEE NAME</th>
                <th>FEE DUEATION</th>
                <th>AMOUNT</th>
                <th>DUE DATE</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
            {fees.map((fee) => {
                return (
                  <tr key={fee.feeType}>
                    <td>{fee.feeType}</td>
                    <td>{fee.feeDuration}</td>
                    <td>{fee.amount}</td>
                    <td>{fee.dueDate}</td>
                    <td><button id={`${fee.status.toLowerCase()}-btn`}>{fee.status}</button> </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    )};

export default AllotmentInfo;