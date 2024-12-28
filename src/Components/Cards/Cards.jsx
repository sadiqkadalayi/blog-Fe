import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import WritingPad from '../WritingPad/WritingPad';

function Cards({post}) {

  let imgPath = process.env.REACT_APP_API_BASE_URL+"/"+post?.imagePath;
  

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgPath} width={100} height={150} />
      <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
        <Card.Text>
        <WritingPad value={post.content} readOnly={true} theme={'bubble'} />
        </Card.Text>
       
      </Card.Body>
    </Card>
  );
}

export default Cards;