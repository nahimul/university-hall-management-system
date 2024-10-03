import React,{useState,useEffect} from 'react';
import '../allotedStudent/allotedstudent.css';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AlloteRequest = () => {
    const [store, setStore] = useState([]);
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
      axios.get('http://localhost:8080/api/v1/officers/requested',{
        withCredentials:true,
      }) 
      .then((res) => {
        setData(res.data.data);
        setStore(res.data.data);
      })
      .catch((error) => {
        console.log("ERROR: ", error);
      })
    }, []);

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

    const getFilterData = () => {
      console.log(searchBy, search);
      if (searchBy === 'name') {
        setData(data.filter((records) => records.student.name.toLowerCase().includes(search.toLowerCase())));
      } else if (searchBy === 'department') {
        setData(records.filter((records) => records.student.department.toLowerCase().includes(search.toLowerCase())));
      } else if (searchBy === 'roll') {
        setData(records.filter((records) => records.student.roll.toLowerCase().includes(search.toLowerCase())));
      }else if (searchBy === 'mobile') {
        setData(data.filter((records) => records.student.mobile.toLowerCase().includes(search.toLowerCase
        ())));
      }
    }

    useEffect(() => {
      setData(records);
    }, []);
   console.log(store);
    return (
      <div className='records'>
        <div className='students'>
            <label htmlFor='search-by'>Search by : </label>
            <select className='search-by' onChange={handleSearchBy}>
                <option value="" selected disabled hidden>--select one--</option>
                <option value='name'>Name</option>
                <option value='department'>Department</option>
                <option value='roll'>Roll</option>
                <option value='mobile'>Mobile</option>
              </select>
            <label htmlFor='search'> Value : </label>
            <input type='text' className='search' onChange={handleSearch}/>
            
            <input type='submit' value='Search' className='search-btn' onClick={getFilterData}/>
            <input type='submit' value='Reset' className='reset-btn' onClick={() => setData(store)}/>


            <table className='students-table'>
                  <thead>
                    <th>STUDENT NAME</th>
                    <th>DEPARTMENT</th>
                    <th>STUDENT ID</th>
                    <th>MOBILE</th>
                    <th>DESIRED ALLOT</th>
                    <th style={{width:'60px'}}>ACTION</th>
                  </thead>
                  <tbody>
                    {records.map((user) => (
                                          
                      <tr>
                        <td style={{width:'20%'}}>{user.student.name}</td>
                        <td style={{width:'20%'}}>{user.student.department}</td>
                        <td style={{width:'20%'}}>{user.student.roll}</td>
                        <td style={{width:'20%'}}>{user.student.mobile}</td>
                        <td style={{width:'20%'}}>{user.expectedDate}</td>
                        <td id='action'><Link className='action-btn' to={`/action/${user._id}`} onClick=''><img id='setting' src={process.env.PUBLIC_URL + '/setting.png'} /></Link></td>
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

export default AlloteRequest;
