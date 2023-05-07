import { faHotel, faLocationDot, faPhone, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface hotelCard{
    name:string,
    Address:string,
    contact:number,
    ratings:number
}
export default function Hotelcard(hotelCard:hotelCard) {
  const [cardrating,setCardrating]=React.useState([1,2,3,4,5])
  const navigate=  useNavigate()
  function handlehotel(e:any){
  e.preventDefault();
  navigate(`/${e.target.id}/dishes`)
  setCardrating([])

  }
  return (
    <Container>
      <div>
        <Card className="bg-transparent hotelcard col">
          {/* <Card.Img variant="top" src={require('./hotel.jpg')} id="hotelcardimg" /> */}
          <Card.Body className="card-body">
            <Card.Title className="text-light font1"><FontAwesomeIcon icon={faHotel} /> {hotelCard.name}</Card.Title>
            <div className="rows">
              {
                 cardrating.map((index,val)=>{
                  if(val<=hotelCard.ratings-1){
                    return(<FontAwesomeIcon icon={faStar} className="text-warning explore font1"/>)

                  }
                  else{
                    return(<FontAwesomeIcon icon={faStar} className="explore font1"/>)

                  }
                })
              }
            </div>

            <Card.Text className="text-light font1"><FontAwesomeIcon icon={faLocationDot} className="text-danger"/> {hotelCard.Address}</Card.Text>
            <Card.Text className="text-light font1"><FontAwesomeIcon icon={faPhone} className="text-success"/> {hotelCard.contact}</Card.Text>
            <Button variant="primary" className="font1 explore"id={hotelCard.name} onClick={e=>handlehotel(e)}>Explore</Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}
