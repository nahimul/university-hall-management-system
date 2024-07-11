import React from 'react';

import './allotment.css';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

const AllotmentInfo = () => {

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
                <td>Emergency Contact Persion</td>
                <td>: Rahik bhai ( Brother )</td>
              </tr>
              <tr>
                <td>Emergency Contact Persion Number</td>
                <td>: 01774366602</td>
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
          <FilterAltOutlinedIcon className="filter" />
          <select>
            <option>2022</option>
            <option>2022</option>
          </select>  
        </div>
        <div className="fees-data-table">
        <table>
            <tbody>
              <tr>
                <th>FEE NAME</th>
                <th>FEE DUEATION</th>
                <th>AMOUNT</th>
                <th>DUE DATE</th>
                <th>STATUS</th>
              </tr>
              <tr>
                <td>Monthly Fee</td>
                <td>5 month</td>
                <td>500 BDT</td>
                <td>10 July, 2024</td>
                <td><boutton id='paid'>Paid</boutton> </td>
              </tr>
              <tr>
                <td>Internet Fee</td>
                <td>1 year</td>
                <td>350 BDT</td>
                <td>10 July, 2024</td>
                <td><boutton type="submit" id="due">Due</boutton> </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    )};

export default AllotmentInfo;