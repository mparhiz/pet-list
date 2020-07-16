// gets a list of owners and gender
// returns a list of owners filtered by gender
export function filterOwnersByGender(owners, gender) {
    return owners.filter(owner => 
        owner.gender.toUpperCase() === gender.toUpperCase()
        && owner.pets
    );
}

// gets a list of pets and type of pet
// returns a list of pets filtered by type
export function filterByPetType(pets, type) {
    return pets.filter(pet => pet.type.toUpperCase() === type.toUpperCase());
}

// gets a list of array of pets
// returns a list of pets
export function returnPetList(arrayOfPets) {
    let petList = [];
    arrayOfPets.forEach(pets => {
        pets.forEach(pet => petList.push(pet));
    });
    return petList;
}