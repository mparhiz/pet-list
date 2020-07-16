import React from 'react';
import Style from './Owners.module.css';
import { Pets } from '../pets/Pets';
import { getOwnerList } from '../../core/services/owner.service';
import { sortByName } from '../../core/helpers/sorting';
import { filterOwnersByGender, filterByPetType, returnPetList} from '../../core/helpers/filtering';

export class Owners extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            owners: [],
            isLoading: true,
            error: null,
            showPetList: false
        };
        this.showCats = this.showCats.bind(this);
    }

    componentDidMount() {
        getOwnerList()
            .then(data => {
                this.setState({
                    owners: data,
                    isLoading: false
                })
            })
            .catch(error => {
                this.setState({
                    error,
                    isLoading: false
                })
            });
    }
    
    showCats() {
        const cloneOwners = [...this.state.owners];

        const maleOwnerPets = filterOwnersByGender(cloneOwners, 'male').map(owner => owner.pets);
        const femaleOwnerPets = filterOwnersByGender(cloneOwners, 'female').map(owner => owner.pets);

        const maleOwnerCatsName = filterByPetType(returnPetList(maleOwnerPets), 'cat').map(pet => pet.name);
        const femaleOwnerCatsName = filterByPetType(returnPetList(femaleOwnerPets), 'cat').map(pet => pet.name);

        this.setState({
            maleOwnerCatsName: sortByName(maleOwnerCatsName),
            femaleOwnerCatsName: sortByName(femaleOwnerCatsName),
            showPetList: true
        });   
    };

    render() {
        const {showPetList} = this.state;

        const loading = (isLoading) => {
            return isLoading ? <small>Loading...</small> : null;
        };

        return (
            <div>
                <h1 className={Style.header}>Owners</h1>
                {loading(this.state.isLoading)}
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Number of Pets</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.owners.map((owner, index) => {
                            return (
                                <tr key={index}>
                                    <td>{owner.name}</td>
                                    <td>{owner.gender}</td>
                                    <td>{owner.age}</td>
                                    <td>{owner.pets?.length ?? 0}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <button onClick={() => this.showCats()}>Show List of Cats</button>
                {showPetList && <Pets gender="Male" petsName={this.state.maleOwnerCatsName} />}
                {showPetList && <Pets gender="Female" petsName={this.state.femaleOwnerCatsName} />}
            </div>
        );
    }
}