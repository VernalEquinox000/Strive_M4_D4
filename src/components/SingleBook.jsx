// // // Create a SingleBook component as a function.The component receives a book object as a prop, and displays the cover and the title of the book.Use react - bootstrap Cards to display a book(The book object can be read from the one of the.json book files we gave you yesterday) 

import { Card, Button } from 'react-bootstrap'


class SingleBook extends React.Component {
    state = {
        selected: false
    }
    selectedBook = (e) => {
        const element = e.currentTarget;
      element.classList.toggle(style.border = "5px solid red")
      const saveId= element.asin
      

    }


  render() {
    return (
      <Card style={{ width: '13rem' }} onClick={() => this.selectedBook}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>$ {book.price}
          </Card.Text>
          <Button variant="outline-warning">Buy Now</Button>
        </Card.Body>
      </Card>
    )
  }
  
}


export default SingleBook