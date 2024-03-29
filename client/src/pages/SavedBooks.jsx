import Auth from "../utils/auth";
import { useState, useEffect } from 'react';
import {
  Container,
  Card,
  Button,
  Row,
  Col
} from 'react-bootstrap';

//import { getMe, deleteBook } from '../utils/API';
import 'bootstrap/dist/css/bootstrap.min.css'

import { removeBookId } from '../utils/localStorage';
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import { REMOVE_BOOK } from "../utils/mutations";


const SavedBooks = () => {
  const [deleteBook] = useMutation(REMOVE_BOOK);    

  console.log("SavedBooks");
  var userData;
  const {loading, data} = useQuery(GET_ME, {});  

  if (data)
  {
    userData = data.me;
  }

  if (userData) {
    console.log("userData", userData);
  }

  // useEffect(() => {
  //   console.log("useEffect");
  
  //   if (data?.me)
  //   {
  //     const user = data.me;
  //     setUserData(user);
  //     console.log("userData", userData);
  //   }
  // }, [data]);

// create function that accepts the book's mongo _id value as param and deletes the book from the database
const handleDeleteBook = async (bookId) => {  
  console.log("typeof bookId", typeof bookId);

  const token = Auth.loggedIn() ? Auth.getToken() : null;

  if (!token) {
    return false;
  }

  const userId = Auth.getProfile().data._id;    
  console.log("deleteBook, userId, bookId", userId, bookId);
  const updatedUser = await deleteBook({
    variables: {
      userId: userId,
      bookId: bookId,
    }
  });

  removeBookId(bookId);
};

  // if data isn't here yet, say so
  if (loading) {
    return (<h2>LOADING...</h2>);
  }

  if (!userData) {
    return (<h2>LOADING...</h2>);
  }

  return (
    <>
      <div fluid className="text-light bg-dark p-5">
        <Container>
          <h1>Viewing saved books!</h1>
        </Container>
      </div>
      <Container>
        <h2 className='pt-5'>
          {userData.savedBooks.length
            ? `Viewing ${userData.savedBooks.length} saved ${userData.savedBooks.length === 1 ? 'book' : 'books'}:`
            : 'You have no saved books!'}
        </h2>
        <Row>
        {userData.savedBooks.map((book) => {
            return (
              <Col md="4">
                <Card key={book.bookId} border='dark'>
                  {book.image ? <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' /> : null}
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <p className='small'>Authors: {book.authors}</p>
                    <Card.Text>{book.description}</Card.Text>
                    <Button className='btn-block btn-danger' onClick={() => handleDeleteBook(book.bookId)}>
                      Delete this Book!
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default SavedBooks;
