import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import './Contact.css';
import React, { Component } from 'react';


export default class Contact extends Component {
    constructor() {
        super();
        this.state = {
            form: {
                name: '',
                email: '',
                phonenumber: '',
                favoritefilm: ''
            }
        }
    }

    handleChangeValue = (e) => {
        const data = { ...this.state.form };
        data[e.target.name] = e.target.value;
        this.setState({
            form: data
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, phonenumber, favoritefilm } = this.state.form;
        console.log(name, email, phonenumber, favoritefilm)
    }

    render() {

        const { form } = this.state;

        console.log(form)
        return (
            <Container>
                <h3>Contact Us</h3>
                <form onSubmit={this.handleSubmit} >
                    <TextField className='input'
                        id="name"
                        name="name"
                        type="text"
                        required="required"
                        label="Your Name"
                        variant="standard"
                        onChange={this.handleChangeValue}
                    />
                    <TextField className='input'
                        id="email"
                        name="email"
                        type="email"
                        required="required"
                        label="Email"
                        variant="standard"
                        onChange={this.handleChangeValue}
                    />
                    <TextField className='input'
                        id="phonenumber"
                        name="phonenumber"
                        type="number"
                        required="required"
                        label="Phone Number"
                        variant="standard"
                        onChange={this.handleChangeValue}
                    />
                    <FormControl className='input' variant="standard" sx={{ m: 1, minWidth: 120 }} >
                        <InputLabel>Favorite Film</InputLabel>
                        <Select

                            id="favoritefilm"
                            name="favoritefilm"
                            label="Your favorite film"
                            onChange={this.handleChangeValue}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"Teen Wolf"}>Teen Wolf</MenuItem>
                            <MenuItem value={"Operation Fortune"}>Operation Fortune</MenuItem>
                            <MenuItem value={"Lullaby (2023)"}>Lullaby (2023)</MenuItem>
                        </Select>
                    </FormControl>
                    <Button type='submit'>Submit</Button>
                </form>
            </Container>
        )
    }
}

