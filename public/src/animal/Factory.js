/* eslint-disable no-plusplus */
/* eslint-disable import/no-mutable-exports */
import { faker } from '@faker-js/faker';
import shortid from 'shortid';
import randomNum from '../utils/randomNum.js';
import { ColorEyes, ColorFur, Size, SizeFur, Species, } from './Animal.js';
const animalList = [];
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');
function getBreedBySpecies(species) {
    let breed = '';
    switch (species) {
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
    for (let i = 0; i < 50; i++) {
        const species = Object.keys(Species)[randomNum(0, 7)];
        const animal = {
            id: shortid.generate(),
            name: faker.internet.userName(),
            bday: new Date(),
            desc: faker.lorem.paragraph(),
            breed: getBreedBySpecies(species),
            color: [Object.keys(ColorFur)[randomNum(0, 7)]],
            eyes: Object.keys(ColorEyes)[randomNum(0, 5)],
            species,
            size: Object.keys(Size)[randomNum(0, 3)],
            sizeFur: Object.keys(SizeFur)[randomNum(0, 3)],
        };
        animalList.push(animal);
    }
}
export { animalList, createAnimalList, };
//# sourceMappingURL=Factory.js.map