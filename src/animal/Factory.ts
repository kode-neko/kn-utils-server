import { faker } from '@faker-js/faker';
import shortid from 'shortid';
import randomNum from '../utils/randomNum';
import {
  Animal, ColorEyes, ColorFur, Sex, Size, SizeFur, Species,
} from './Animal';

const animalList: Animal[] = [];
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');

function getBreedBySpecies(species: Species): string {
  let breed: string;

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

function createAnimalList(): void {
  for (let i: number = 0; i < 10; i++) {
    const species: Species = Object.values(Species)[randomNum(0, 2)] as Species;
    const animal: Animal = {
      id: shortid.generate(),
      name: faker.name.firstName(),
      bday: new Date(),
      sex: Object.values(Sex)[randomNum(0, 1)] as Sex,
      desc: faker.lorem.sentences(),
      breed: getBreedBySpecies(species),
      color: [Object.values(ColorFur)[randomNum(0, 6)] as ColorFur],
      eyes: Object.values(ColorEyes)[randomNum(0, 4)] as ColorEyes,
      species,
      size: Object.values(Size)[randomNum(0, 2)] as Size,
      sizeFur: Object.values(SizeFur)[randomNum(0, 2)] as SizeFur,
    };
    animalList.push(animal);
  }
}

export {
  animalList,
  createAnimalList,
};
