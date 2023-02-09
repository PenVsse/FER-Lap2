import React, { Component } from 'react'
import { Films } from '../share/ListOfPlayers'
import FilmPre from './Film/FilmPre';
export default class ContainerCom extends Component {
    constructor() {
        super();
        this.state = {
            films: Films
        };
    }
    render() {
        return (
            <div>
                <FilmPre FilmProp={this.state.films} />
            </div>
        )
    }
}
