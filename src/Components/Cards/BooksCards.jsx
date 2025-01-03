import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BooksCards({book}) {
 
  return (
   <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={book?.thumbnailUrl} />
      <Card.Body>
        <Card.Title>{book?.title}</Card.Title>
        <Card.Text>
         {book.longDescription}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

   </>
  )
}

export default BooksCards