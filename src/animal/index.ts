import { Request, Response, Router } from 'express';
import shortid from 'shortid';
import { Animal } from './Animal.js';
import { animalList } from './Factory.js';

function postAnimal(req: Request, res: Response) {
  const animal = req.body;
  animal.id = shortid.generate();
  animalList.unshift(animal);
  res.status(200).json(animal);
}

function putAnimal(req: Request, res: Response) {
  const animal = req.body;
  const finded = animalList.find((a) => a.id === animal.id);
  if (finded) {
    const modified = { ...finded, ...animal };
    const index = animalList.findIndex((a) => a.id === animal.id);
    animalList[index] = modified;
    res.status(200).json(modified);
  } else {
    res.status(404).json({ msg: 'not found' });
  }
}

function deleteAnimal(req: Request, res: Response) {
  const { id } = req.params;
  const found = animalList.find((a) => a.id === id);
  if (found) {
    const index = animalList.findIndex((a) => a.id === id);
    animalList.splice(index, 1);
    res.status(200).json(found);
  } else {
    res.status(404).json({ msg: 'not found' });
  }
}

function getAnimalById(req: Request, res: Response) {
  const { id } = req.params;
  const found = animalList.find((a) => a.id === id);
  if (found) {
    res.status(200).json(found);
  } else {
    res.status(404).json({ msg: 'not found' });
  }
}

function getAnimalAll(req: Request, res: Response) {
  res.status(200).json(animalList);
}

function getAnimalList(req: Request, res: Response) {
  const { offset, limit, search } = req.body;
  const regex = new RegExp(search.toLowerCase());
  const animalSearch = animalList.filter((animal) => regex.test(animal.name.toLowerCase()));
  const end = offset + limit < animalSearch.length ? offset + limit : animalSearch.length;
  const slice = animalSearch.slice(offset, end);
  res.status(200).json(slice);
}

const animal = Router();
animal.post('/', postAnimal);
animal.put('/', putAnimal);
animal.delete('/:id', deleteAnimal);
animal.get('/:id', getAnimalById);
animal.get('/', getAnimalAll);
animal.post('/list', getAnimalList);

export default animal;
