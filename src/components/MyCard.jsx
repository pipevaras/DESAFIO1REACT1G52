import './style.css'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Tags from './Tags'

const MyCard = ({ image, name, description, bg, text }) => {
  return (
    <>
      <Card className="tarjeta" style={{ width: '18rem' }}>
        <Card.Img className="foto" variant="top" src={image} />
        <Card.Body className="bod">
          <Card.Title className="nam">{name}</Card.Title>
          <Card.Text className="desc">{description}</Card.Text>
          <Tags className="tag" bg={bg} text={text} />
        </Card.Body>
      </Card>
    </>
  )
}

export default MyCard
