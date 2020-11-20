import React from 'react'
import { Alert, Button, Col, Form, Row, Spinner } from 'react-bootstrap'
import SingleBook from "./SingleBook"



class CommentsForm extends React.Component {
    state = {
        feedback: {
            comment: "",
            rate: 0,
            elementId: ""
        },
        //errMessage: '',
        //loading: false
    }

    updateComment = (e) => {
        console.log(e)
        let feedback = { ...this.state.feedback } // creating a copy of the current state
        let currentId = e.currentTarget.id // 'name', 'phone', etc.

        feedback[currentId] = e.currentTarget.value // e.currentTarget.value is the keystroke
        //feedback['name'] --> feedback.name = 'S'
        //feedback['phone'] --> feedback.phone = '3'
        this.setState({ feedback: feedback })
    }

    /* submitComment = async (e) => {
        e.preventDefault();
        this.setState({ loading: true })
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' ,
                {
                    method: 'POST',
                    body: JSON.stringify(this.state.feedback),
                    headers: new Headers({
                        
                        "Authorization":
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2ODVhNjk4MzViMDAwMTc1ODRmMTciLCJpYXQiOjE2MDU3OTcyODYsImV4cCI6MTYwNzAwNjg4Nn0.IUm5jK9dklJ5rJxt7g6FywJ8fuvZsjirrDq-hFvkyF4", 

                        "Content-Type": "application/json"
                    })
                }) */
            




    render() {
        return (
            <div>
                {/* {
                    this.state.errMessage && (
                        <Alert variant="danger">
                            We encountered a problem with your request
                            {this.state.errMessage}
                        </Alert>
                    )
                }
                {
                    this.state.loading && (
                        <div className="d-flex justify-content-center my-5">
                            Reserving your table, please wait
                            <div className="ml-2">
                                <Spinner animation="border" variant="success" />
                            </div>
                        </div>
                    )
                } */}
                <h1>ADD YOUR FEEDBACK</h1>
                <Form className="w-50 mt-5 mb-5 bg-white" onSubmit={this.submitComment}>
                    <Row>
                        <Col md={12}>
                            <Form.Group>
                                <Form.Label htmlFor="comment">Comment</Form.Label>
                                <Form.Control
                                    type="text-area"
                                    name="comment"
                                    id="comment"
                                    placeholder="leave your comment"
                                    value={this.state.feedback.comment}
                                    onChange={this.updateComment}
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label htmlFor="rate">
                                    Which is your vote?
                            </Form.Label>
                                <Form.Control
                                    as="select"
                                    name="rate"
                                    id="rate"
                                    value={this.state.feedback.rate}
                                    onChange={this.updateComment}
                                    required
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label htmlFor="elementId">Element Id</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="elementId"
                                    id="elementId"
                                    placeholder="element Id"
                                    value={this.state.feedback.elementId}
                                    onChange={this.updateComment}
                                    disabled

                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button type="submit">Submit Your Comment</Button>
                </Form>
            </div>
        )
    }
}



export default CommentsForm
