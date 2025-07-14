import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardHero() {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://imgs.search.brave.com/06gMqLWWVqsCi8sdEKJlnSySw2PPW4-FNG2CJoz2wK8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9kL2RhL1Ro/ZV9QYXJ0aGVub25f/aW5fQXRoZW5zLmpw/Zy81MTJweC1UaGVf/UGFydGhlbm9uX2lu/X0F0aGVucy5qcGc" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardHero;