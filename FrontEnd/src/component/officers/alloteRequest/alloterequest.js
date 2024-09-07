import React,{useState} from 'react';
import DataTable from 'react-data-table-component';
import '../allotedStudent/allotedstudent.js';

const AlloteRequest=()=>{

    const student={
        roll:'1911077121',
        name:'Nahimul Islam',
        room:'140 C',
        mobile:'01774366602',
        allotedForm:'January 2020',
        allotedExpire:'January 2025',
    };

    const column =[ 
    {
      name:"ROLL NO",
      selector: row=>row.roll,
      maxWidth:'10px',
      sortable:true
    },
    {
      name:"NAME",
      selector: row=>row.name,
      maxWidth:'200px',
      sortable:true
    },
    {
      name:"ROOM NO",
      selector: row=>row.room,
      sortable:true
    },
    {
      name:"MOBILE NO",
      selector: row=>row.mobile,
    },
    {
      name:"FEE INFO",
      selector: row=>row.fees,
    },
    {
      name:"EXPIRE",
      selector: row=>row.allotedExpire,
      sortable:true
    },
    {
      name:"ACTION",
      selector: row=>row.action,
      Cell:(props)=>(
        <button> action</button>
      )
    },
    ];
    const data=[
      {
        id:1,
        roll:student.roll,
        name:student.name,
        room:student.room,
        mobile:student.mobile,
        fees:student.fees,
        allotedExpire:student.allotedExpire,
        action: 'action',
      },
      {
        id:2,
        roll:student.roll,
        name:student.name,
        room:student.room,
        mobile:student.mobile,
        fees:student.fees,
        allotedExpire:student.allotedExpire,
        action: 'action',
      },
      {
        id:3,
        roll:student.roll,
        name:student.name,
        room:student.room,
        mobile:student.mobile,
        fees:student.fees,
        allotedExpire:student.allotedExpire,
        action: 'action',
      },
      {
        id:4,
        roll:student.roll,
        name:student.name,
        room:student.room,
        mobile:student.mobile,
        fees:student.fees,
        allotedExpire:student.allotedExpire,
        action: 'action',
      },
      {
        id:5,
        roll:student.roll,
        name:student.name,
        room:student.room,
        mobile:student.mobile,
        fees:student.fees,
        allotedExpire:student.allotedExpire,
        action: 'action',
      },
      {
        id:6,
        roll:student.roll,
        name:student.name,
        room:student.room,
        mobile:student.mobile,
        fees:student.fees,
        allotedExpire:student.allotedExpire,
        action:'action',
      },
      {
        id:7,
        roll:19454545,
        name:'Sakil',
        room:'240 D',
        mobile:student.mobile,
        fees:student.fees,
        allotedExpire:student.allotedExpire,
        action: 'action',
      }
    ];

    const [records,setRecords]=useState(data);

    const handleChange =(e) =>{
      const newData=data.filter(row=> {return row.name.toLowerCase().includes(e.target.value.toLowerCase())});
      setRecords(newData);
    }
    
    return(

   <div>
     <div className='filter'>
      <input type='text' onChange={handleChange}/>
     </div>
     <div className="students">
     <DataTable
     columns={column}
     data={records}
     fixedHeader
     pagination
     bodyClassName="students-table"
     ></DataTable>
     </div>
   </div>
    );
};

export default AlloteRequest;