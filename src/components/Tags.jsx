import Badge from 'react-bootstrap/Badge'
import Stack from 'react-bootstrap/Stack'

const Tags = ({ bg, text }) => {
  return (
    <>
      <Badge bg={bg}>{text}</Badge>
    </>
  )
}

export default Tags
