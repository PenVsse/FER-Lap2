// import { useParams } from 'react-router-dom';
// import { Films } from '../../share/ListOfPlayers';
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';

// import Grid from '@mui/material/Grid';

// function FilmDetail() {
//     const userName = useParams();
//     const film = Films.find(obj => {
//         return obj.id == userName.id;
//     });
//     let price = film.price;
//     return (
//         <Grid container >
//             <Grid >
//                 <div >
//                     <img src={`../${film.img}`} alt='' />
//                 </div>
//                 <div >
//                     <h4>{film.name}</h4>
//                     <div >Price:  {price} VND</div>
//                     <div>Nation: {film.nation}.</div>
//                     <div>{film.info}</div>
//                 </div>
//             </ Grid >
//         </Grid>


//     )
// }
// export default FilmDetail;
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { useParams } from 'react-router-dom';
import { Films } from '../../share/ListOfPlayers';
import { useState } from 'react';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import Modal from '../Modal/Modal';
const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});
export default function FilmDetail() {
    const [isOpen, setIsOpen] = useState(false);

    const userName = useParams();
    const film = Films.find(obj => {
        return obj.id == userName.id;
    });
    let pricee = film.price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
    return (
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                marginBottom: '20px',
                marginTop: '20px',
                maxWidth: 700,
                flexGrow: 1,
            }}
        >
            <Grid container spacing={2}>
                <Grid item>
                    <Img alt="" src={`../${film.img}`} sx={{ height: '340px', width: '700px' }} />
                    <a onClick={() => setIsOpen(true)} className="" >
                        <SlideshowIcon sx={{
                            marginLeft: '95%'
                        }}></SlideshowIcon>
                    </a>
                </Grid>


                <Grid item xs={12} container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="h4">
                                {film.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Year:{film.year}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Nation: {film.nation}
                            </Typography>
                        </Grid>

                    </Grid>
                    <Grid item>
                        <Typography variant="h5" color={'#3880eb'}>
                            {pricee}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography sx={{ cursor: 'pointer' }} variant="body2">
                        {film.info}
                    </Typography>
                </Grid>
            </Grid>
            {isOpen && <Modal setIsOpen={setIsOpen} film={film} />}


        </Paper>
    );

}