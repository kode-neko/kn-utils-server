/* eslint-disable no-plusplus */
/* eslint-disable import/no-mutable-exports */
import { faker } from '@faker-js/faker';
import shortid from 'shortid';
import randomNum from '../utils/randomNum.js';
import { ColorEyes, ColorFur, Sex, Size, SizeFur, Species, } from './Animal.js';
const animalList = [];
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');
function getBreedBySpecies(species) {
    let breed;
    switch (String(species)) {
        case Species.CAT:
            breed = faker.animal.cat();
            break;
        case Species.DOG:
            breed = faker.animal.dog();
            break;
        case Species.COW:
            breed = faker.animal.cow();
            break;
        default:
            breed = '';
    }
    return breed;
}
function createAnimalList() {
    for (let i = 0; i < 10; i++) {
        const species = Object.values(Species)[randomNum(0, 2)];
        const animal = {
            id: shortid.generate(),
            name: faker.name.firstName(),
            bday: new Date(),
            sex: Object.values(Sex)[randomNum(0, 1)],
            desc: faker.lorem.sentences(),
            breed: getBreedBySpecies(species),
            color: [Object.values(ColorFur)[randomNum(0, 6)]],
            eyes: Object.values(ColorEyes)[randomNum(0, 4)],
            species,
            size: Object.values(Size)[randomNum(0, 2)],
            sizeFur: Object.values(SizeFur)[randomNum(0, 2)],
        };
        animalList.push(animal);
    }
}
export { animalList, createAnimalList, };
//# sourceMappingURL=Factory.js.map