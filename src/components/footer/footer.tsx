import React from 'react'
import { Container } from 'react-bootstrap'
import { paymentdata } from '../../Data/payment';
import { data } from '../../Data/social';
import './footer.css'

export default function Footer() {
  return (
<div>
<div className='footer rows'>
     <Container>
            <div className="row ">
                <div className="col-md-5 col-12 column gap40">
                    <div>
                    <h2 className='font2 text-light'>Foodchain</h2>
                    </div>
                 <div id="schedule" className='column gap20'>
                    <h5 className='font4 text-warning'>Working Schedule</h5>
                    <div>
                    <p  className='font3 fl text-light'>Mon - Fri: 9:00 am - 11:00 pm</p>
                    <p  className='font3 fl text-light'>Sat - Sun: 10:00 am - 9:00 pm</p>
                    </div>
                    
                 </div>
                </div>
                <div className="col-md-4 col-12 column gap5">
                    <h6  className='font2 text-success fl'>Call us to make an order !</h6>
                    <p  className='font3 fl text-light'>+916383961454</p>
                </div>
                <div className="col-md-3 col-12 column gap20">
               <div className='column'>
               <p  className='font2 text-light'>Payment Options</p>
                <div className="rows gap20">
                  {paymentdata.map((val: any, index: any) => {
                    return (
                          <img src={paymentdata[index].image} alt={paymentdata[index].name} style={{ width: "50px", height: "18px" }} key={`${index}`}/>
                    );
                  })}
                </div>
               </div>

                   <div>
                   <p  className='font2 text-light'>Follow us</p>
                    <div className="rows gap20">
                  {data.map((val: any, index: any) => {
                    return (
                        <a style={{ textDecoration: "none" }} href={data[index].Link} key={`${index}`}>
                          <img src={data[index].image} alt={data[index].name} style={{ width: "28px", height: "28px" }} key={`${index}`}/>
                        </a>
                    );
                  })}
                </div>
                   </div>

                </div>

            </div>
        </Container>
    </div>
    <div className="credits rows">
    <Container>
        <div className="rows">
        <p className='font4'> © All Rights Reserved. Foodchain 2023</p>

        </div>
    </Container>
</div>
</div>
  )
}