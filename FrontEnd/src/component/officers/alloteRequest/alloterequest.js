import React,{useState,useEffect} from 'react';
import student from '../allotedStudent/student';
import '../allotedStudent/allotedstudent.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const AllotedStudent = () => {
    const [data, setData] = useState(student);
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;
    const lastIdx = currentPage * recordsPerPage;
    const firstIdx = lastIdx - recordsPerPage;
    const records = data.slice(firstIdx, lastIdx);
    const nPages = Math.ceil(data.length / recordsPerPage);
    const pageNumbers = [...Array(nPages).keys()].map((i) => i + 1);//.slice(1);


    const nextPage = () => {  
      if (currentPage < nPages) {
        setCurrentPage(currentPage + 1);
      }
    }

    const prevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }

    const [search, setSearch] = useState('');
    const [searchBy, setSearchBy] = useState('name');

    const handleSearchBy = (e) => {
      setSearchBy(e.target.value);
    };

    const handleSearch = (e) => {
      setSearch(e.target.value);
    };

    const getFilterData = (e) => {
      e.preventDefault();
      console.log(searchBy, search);
      if (searchBy === 'name') {
        setData(student.filter((student) => student.name.toLowerCase().includes(search.toLowerCase())));
      } else if (searchBy === 'department') {
        setData(student.filter((student) => student.department.toLowerCase().includes(search.toLowerCase())));
      } else if (searchBy === 'roll') {
        setData(student.filter((student) => student.roll.toLowerCase().includes(search.toLowerCase())));
      } else if (searchBy === 'room') {
        setData(student.filter((student) => student.room.toLowerCase().includes(search.toLowerCase())));
      } else if (searchBy === 'mobile') {
        setData(student.filter((student) => student.mobile.toLowerCase().includes(search.toLowerCase
        ())));
      }
    }

    useEffect(() => {
      setData(student);
    }, []);

    return (
      <div className='records'>
        <div className='students'>
            <label htmlFor='search-by'>Search by : </label>
            <select className='search-by' onChange={handleSearchBy}>
                <option value="" selected disabled hidden>--select one--</option>
                <option value='name'>Name</option>
                <option value='department'>Department</option>
                <option value='roll'>Roll</option>
                <option value='room'>Room</option>
                <option value='mobile'>Mobile</option>
              </select>
            <label htmlFor='search'> Value : </label>
            <input type='text' className='search' onChange={handleSearch}/>
            
            <input type='submit' value='Search' className='search-btn' onClick={getFilterData}/>
            <input type='submit' value='Reset' className='reset-btn' onClick={() => setData(student)}/>


            <table className='students-table'>
                  <thead>
                    <th>STUDENT NAME</th>
                    <th>DEPARTMENT</th>
                    <th>STUDENT ID</th>
                    <th>ROOM NO</th>
                    <th>MOBILE</th>
                    <th>DESIRED ALLOT</th>
                    <th style={{width:'60px'}}>ACTION</th>
                  </thead>
                  <tbody>
                    {records.map((student) => (
                                          
                      <tr>
                        <td style={{width:'20%'}}>{student.name}</td>
                        <td style={{width:'20%'}}>{student.department}</td>
                        <td style={{width:'20%'}}>{student.roll}</td>
                        <td style={{width:'15%'}}>{student.room}</td>
                        <td style={{width:'20%'}}>{student.mobile}</td>
                        <td style={{width:'20%'}}>{student.date}</td>
                        <td id='action'><button className='action-btn'><img id='setting' src={process.env.PUBLIC_URL + '/setting.png'} /></button></td>
                      </tr>
                    ))
                    }
                    <tr></tr>
                  </tbody>
            </table>  

        </div>
        <div className='pagination'>
                    <li className='page-item'>
                        <a onClick={prevPage} href='#' className='page-link'>
                           {'< '}Previous
                        </a>
                    </li>
                    {pageNumbers.map((i) => (
                        <li key={i} className='page-item'>
                            <a onClick={() => setCurrentPage(i)} href='#' className={currentPage===i? 'active':''}>
                                {i}
                            </a>
                        </li>
                    ))}
                    <li className='page-item'>
                        <a onClick={nextPage} href='#' className='page-link'>
                            Next{' >'}
                        </a>
                    </li>
        </div>
      </div>
    )
}

export default AllotedStudent;
