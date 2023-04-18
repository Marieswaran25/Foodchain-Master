import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import Navheader from '../Navbar/Nav';
import Hotelcard from './hotelcard';


function Hotelspage () {
const [data,setData]:any=React.useState([]);
const loadData=async()=>{
  try {
    const response=await axios.get('http://localhost:9000/hotel');
    return (response.data);
  } catch (error:any) {
    return error
  }
}
    React.useEffect(()=>{
        if(data.length===0){
          const fetchdata=async()=> {
            const fetchdata=await loadData()
            setData(fetchdata)
             return true;
          }
          fetchdata()
        }
    })
  return ( 
    <div className="bg-img">
      <div className="card-overlay">
        <Navheader />
        <Container>
        <div className='rows'>
      {
        data.map((val:any,index:number)=>{
          return <Hotelcard name={data[index].hotelname} Address={data[index].address} contact={data[index].mobile} />
          
        })
      }
    </div>
        </Container>
     
      </div>
    </div>
  );
}
export default  Hotelspage
