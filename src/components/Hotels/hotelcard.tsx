import { Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface hotelCard{
    name:string,
    Address:string,
    contact:number
}
export default function Hotelcard(hotelCard:hotelCard) {
  const navigate=  useNavigate()
  function handlehotel(e:any){
  e.preventDefault();
  navigate(`/${e.target.id}/dishes`)
  }
  return (
    <Container>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{hotelCard.name}</Card.Title>
            <Card.Text>{hotelCard.Address}</Card.Text>
            <Card.Text>{hotelCard.contact}</Card.Text>

            <Button variant="primary"id={hotelCard.name} onClick={e=>handlehotel(e)}>Explore</Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}
