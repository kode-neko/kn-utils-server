/* eslint-disable no-plusplus */
/* eslint-disable import/no-mutable-exports */
import { faker } from '@faker-js/faker';
import shortid from 'shortid';
import randomNum from '../utils/randomNum.js';
import {
  Animal, ColorEyes, ColorFur, Size, SizeFur, Species,
} from './Animal.js';

const animalList: Animal[] = [];
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');

function getBreedBySpecies(species: Species): string {
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

function createAnimalList(): void {
  for (let i = 0; i < 50; i++) {
    const species = Object.keys(Species)[randomNum(0, 7)] as Species;
    const animal: Animal = {
      id: shortid.generate(),
      name: faker.internet.userName(),
      bday: new Date(),
      desc: faker.lorem.paragraph(),
      breed: getBreedBySpecies(species),
      color: [Object.keys(ColorFur)[randomNum(0, 7)] as ColorFur],
      eyes: Object.keys(ColorEyes)[randomNum(0, 5)] as ColorEyes,
      species,
      size: Object.keys(Size)[randomNum(0, 3)] as Size,
      sizeFur: Object.keys(SizeFur)[randomNum(0, 3)] as SizeFur,
    };
    animalList.push(animal);
  }
}

export {
  animalList,
  createAnimalList,
};
