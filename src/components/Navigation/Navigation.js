// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { useContext } from 'react'
// import { ThemeContext } from '../ThemeContext';

// function Navigation() {
//     const { nav, toggle, dark } = useContext(ThemeContext)
//     return (

//         <p className='switch-mode' href='#'
//             style={{
//                 backgroundColor: nav.backgroundColor,
//                 color: nav.color,
//                 fontWeight: '550',
//                 outline: 'none'
//             }} data-testid="toggle-theme-btn">
//             <Navbar collapseOnSelect expand="lg" variant="dark">
//                 <Container>
//                     <Navbar.Brand style={{
//                         color: nav.color,
//                         fontWeight: '700',
//                         outline: 'none'
//                     }} href="/home">Film</Navbar.Brand>
//                     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                     <Navbar.Collapse id="responsive-navbar-nav">
//                         <Nav className="me-auto">

//                             <Nav.Link href="#features" style={{ color: nav.color }} >Features</Nav.Link>
//                             <Nav.Link href="#features" style={{ color: nav.color }} >Movie Lists</Nav.Link>
//                             <Nav.Link href="#pricing" style={{ color: nav.color }} >Movie Trailers</Nav.Link>
//                             <Nav.Link href="#features" style={{ color: nav.color }} >TV List</Nav.Link>
//                             {/* <Link style={{ color: nav.color }} to="/contact">Contact</Link> */}
//                             <Nav.Link href="/contact" style={{ color: nav.color }} >Contact</Nav.Link>

//                             {/* <NavDropdown title='More' id="collasible-nav-dropdown">
//                                 <NavDropdown.Item href="#action/3.1" style={{ color: nav.color }} >Movie Lists</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action/3.2" style={{ color: nav.color }} >
//                                     TV List
//                                 </NavDropdown.Item>
//                                 <NavDropdown.Item href="#action/3.3" style={{ color: nav.color }} >Privacy Policy</NavDropdown.Item>
//                                 <NavDropdown.Divider />
//                                 <NavDropdown.Item href="#action/3.4" style={{ color: nav.color }} >
//                                     Help
//                                 </NavDropdown.Item>
//                             </NavDropdown> */}

//                         </Nav>
//                         <Nav onClick={toggle}>
//                             {!dark ? 'Dark' : 'Light'} mode
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//         </p >);
// }

// export default Navigation;
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Home from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function Navigation() {

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);


    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);



    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };



    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };



    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            sx={{
                marginLeft: '-30px',
                marginTop: '30px'
            }}
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <Nav.Link href='/home'>
                    <IconButton size="small" color="inherit" sx={{ marginRight: '20px' }}>
                        <Badge color="error">
                            <Home /> &nbsp; Home
                        </Badge>
                    </IconButton>
                </Nav.Link>
            </MenuItem>
            <MenuItem>
                <IconButton size="small" color="inherit">
                    <Badge color="error">
                        <InfoOutlinedIcon /> &nbsp; About
                    </Badge>
                </IconButton>
            </MenuItem>
            <MenuItem >
                <IconButton size="small" color="inherit" >
                    <Badge color="error">
                        <ArticleOutlinedIcon /> &nbsp; News
                    </Badge>
                </IconButton>
            </MenuItem>
            <MenuItem >
                <Nav.Link href='/contact'>
                    <IconButton size="small" color="inherit" sx={{ marginRight: '20px' }} >
                        <Badge color="error" sx={{ textDecoration: 'none' }} >
                            <ContactPhoneOutlinedIcon /> &nbsp;  Contact
                        </Badge>
                    </IconButton>
                </Nav.Link>
            </MenuItem>

        </Menu >
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#207c97' }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        <Nav.Link href='/home'>
                            FilmsVipPro

                        </Nav.Link>
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                        <Nav.Link href='/home'>
                            <IconButton size="small" color="inherit" sx={{ marginRight: '20px' }}>
                                <Badge color="error">
                                    <Home /> &nbsp; Home
                                </Badge>
                            </IconButton>
                        </Nav.Link>
                        <IconButton size="small" color="inherit" sx={{ marginRight: '20px' }}>
                            <Badge color="error">
                                <InfoOutlinedIcon /> &nbsp; About
                            </Badge>
                        </IconButton>
                        <IconButton size="small" color="inherit" sx={{ marginRight: '20px' }} >
                            <Badge color="error">
                                <ArticleOutlinedIcon /> &nbsp;  News
                            </Badge>
                        </IconButton>
                        <Nav.Link href='/contact'>
                            <IconButton size="small" color="inherit" sx={{ marginRight: '20px' }} >
                                <Badge color="error" sx={{ textDecoration: 'none' }} >
                                    <ContactPhoneOutlinedIcon /> &nbsp;  Contact
                                </Badge>
                            </IconButton>
                        </Nav.Link>


                    </Box>
                    <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </Box >
    );
}