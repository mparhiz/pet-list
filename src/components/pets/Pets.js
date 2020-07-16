import React from 'react';
import Style from './Pets.module.css';

export class Pets extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gender: props.gender,
            petsName: props.petsName
        }
    }
    
    render() {
        return (
            <div>
                <h3 className={Style.header}>{this.state.gender}</h3>
                <ul>
                    {this.state.petsName.map((name, index) => {
                        return <li key={index}>{name}</li>
                    })}
                </ul> 
            </div>
        );
    }
}