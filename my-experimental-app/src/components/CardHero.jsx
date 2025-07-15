import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardHero({ 
  imageUrl = "https://via.placeholder.com/300", // Valore di default
  title = "Titolo Default", 
  text = "Descrizione default della card",
  buttonText = "Scopri di più" 
}) {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{ height: '40vh' }}>
      <Card className="card-hero-animated card-entrance" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imageUrl} style={{ 
          height: '200px',
          objectFit: 'cover' ,
          transition: 'transform 0.3s ease'
        }}  />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button className="pulse-on-hover" variant="primary">{buttonText} </Button>
        </Card.Body>
      </Card>
      
    </div>
    
  );
}

export default CardHero;