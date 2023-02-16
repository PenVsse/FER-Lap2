import React, { useContext, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './FilmPre.css';
import { ThemeContext } from '../ThemeContext';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function FilmPre({ FilmProp }) {
    const [film, setFilm] = useState([]);
    const { card, toggle, dark } = useContext(ThemeContext);
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <Row xs={1} md={3} className="g-4" style={{ margin: '-20px 0 20px 0' }}>

                {Array.from({ length: 1 }).map((_, idx) => (

                    FilmProp.map((film) => (
                        <Col >
                            <Card style={{ border: 'solid 2px gray', marginTop: '15px' }}>
                                <img className='card-img' alt='' variant="top" src={film.img} />
                                <Card.Body style={{ backgroundColor: card.backgroundColor }}>
                                    <CardActions disableSpacing>
                                        <Card.Title>{film.name}</Card.Title>

                                        <ExpandMore
                                            expand={expanded}
                                            onClick={() => { handleExpandClick(setFilm(film)) }}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                            <ExpandMoreIcon />
                                        </ExpandMore>

                                    </CardActions>
                                    {
                                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                                            <Typography>
                                                Nation: {film.nation}<br />
                                                Year: {film.year}<br />
                                            </Typography>
                                        </Collapse>
                                    }
                                </Card.Body>

                                <Link className='button-detail' to={`/detail/${film.id}`} >
                                    <button>Detail</button>
                                </Link>

                            </Card>


                        </Col>
                    )
                    )
                )

                )
                }


            </Row >


            {
                <Collapse Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Typography>
                        Nation: {film.nation}<br />
                        Year: {film.year}<br />
                    </Typography>
                </Collapse>
            }
        </>

    )
}
