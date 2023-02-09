import React, { useContext, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './FilmPre.css';
import { ThemeContext } from '../ThemeContext';

export default function FilmPre({ FilmProp }) {
    const [film, setFilm] = useState();
    const { card, toggle, dark } = useContext(ThemeContext)
    return (
        <>
            <Row xs={1} md={3} className="g-4" style={{ margin: '-20px 0 20px 0' }}>
                {Array.from({ length: 1 }).map((_, idx) => (

                    FilmProp.map((film) => (
                        <Col>
                            <Card style={{ border: 'solid 2px gray' }}>
                                <Card.Img variant="top" src={film.img} />
                                <Card.Body style={{ backgroundColor: card.backgroundColor }}>
                                    <Card.Title>{film.name}</Card.Title>
                                    Nation: {film.nation}<br />
                                    Year: {film.year}<br />
                                </Card.Body>
                                <a href="#popup1" id="openPopUp" onClick={() => { setFilm(film) }} style={{ backgroundColor: 'black' }}><button style={{ backgroundColor: 'black', color: 'white' }} >Detail</button></a>

                            </Card>

                        </Col>
                    ))
                ))
                }
            </Row >
            {
                film && <div id="popup1" className="overlay" onClick={() => setFilm()}>
                    <div className="popup" style={{ backgroundColor: card.backgroundColor }}>
                        <img src={film.img} />
                        <h3>{film.name}</h3>
                        Nation: {film.nation}<br />
                        Year: {film.year}<br />
                        Info: {film.info}
                        <a className="close" href="#">&times;</a>
                        <div className="content">

                        </div>
                    </div>
                </div>
            }
        </>

    )
}
