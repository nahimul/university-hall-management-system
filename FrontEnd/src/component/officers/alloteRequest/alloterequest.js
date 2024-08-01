import React from 'react';


const ResidentStudent=()=>{
   <div className="students">
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
}

export default ResidentStudent;