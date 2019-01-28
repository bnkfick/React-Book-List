import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

// add code so that when the component mounts, 
// we retrieve the book for the rendered route and save it to `this.state.book`. 
// e.g. when the route is `/books/59a39cf2549cf482c814333f`, 
// an AJAX request should be made to get the book with an `_id` of `59a39cf2549cf482c814333f`. 
// If completed successfully, you should see the book's synopsis on this page.

// You may need to look into 
// [URL params with React Router](https://reacttraining.com/react-router/web/example/url-params) to accomplish this.

// To access props in a class component you must use `this.props` instead of `props`.


class Detail extends Component {
  state = {
    book: {}
  };

  // Add code to get the book with an _id equal to the id in the route param
  // e.g. http://localhost:3000/books/:id
  // The book id for this route can be accessed using this.props.match.params.id
  componentDidMount() {
    console.log(this.props.match);
    API.getBook(this.props.match.params.id)
    .then(res =>
      this.setState({ book: res.data })
    )
    .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.book.title} by {this.state.book.author}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <p>{this.state.book.synopsis}</p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Authors</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
