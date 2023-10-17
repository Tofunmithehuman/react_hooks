import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


const MovieCard = ({ title, description, posterURL, rating }) => {
    return (
        <Card className="m-4" style={{ width: '18rem' }}>
        <Card.Img variant="top" src= {posterURL} alt={title} />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>Rating: {rating}</Card.Text>
            <Button variant="primary">Watch Now</Button>
            </Card.Body>
        </Card>
    );
};


export default MovieCard;

