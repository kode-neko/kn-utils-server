import { Request, Response, Router } from 'express';
import shortid from 'shortid';
import { animalList } from './Factory';
import { Animal } from './Animal';

function postAnimal(req: Request, res: Response): void {
  const animal: Animal = req.body;
  animal.id = shortid.generate();
  animalList.unshift(animal);
  res.status(200).json(animal);
}

function putAnimal(req: Request, res: Response): void {
  const animal: Animal = req.body;
  const finded: Animal = animalList.find((a) => a.id === animal.id);
  if (finded) {
    const modified: Animal = { ...finded, ...animal };
    const index: number = animalList.findIndex((a) => a.id === animal.id);
    animalList[index] = modified;
    res.status(200).json(modified);
  } else {
    res.status(404).json({ msg: 'not found' });
  }
}

function deleteAnimal(req: Request, res: Response): void {
  const { id } = req.params;
  const found: Animal  = animalList.find((a) => a.id === id);
  if (found) {
    const index: number = animalList.findIndex((a) => a.id === id);
    animalList.splice(index, 1);
    res.status(200).json(found);
  } else {
    res.status(404).json({ msg: 'not found' });
  }
}

function getAnimalById(req: Request, res: Response): void {
  const { id } = req.params;
  const found: Animal = animalList.find((a) => a.id === id);
  if (found) {
    res.status(200).json(found);
  } else {
    res.status(404).json({ msg: 'not found' });
  }
}

function getAnimalAll(req: Request, res: Response): void {
  res.status(200).json(animalList);
}

function getAnimalList(req: Request, res: Response): void {
  const { offset, limit, search } = req.body;
  const regex: RegExp = new RegExp(search.toLowerCase());
  const animalSearch: Animal[] = animalList.filter((animal: Animal) => regex.test(animal.name.toLowerCase()));
  const end: number = offset + limit < animalSearch.length ? offset + limit : animalSearch.length;
  const slice: Animal[] = animalSearch.slice(offset, end);
  res.status(200).json(slice);
}

const animal: Router = Router();
animal.post('/', postAnimal);
animal.put('/', putAnimal);
animal.delete('/:id', deleteAnimal);
animal.get('/:id', getAnimalById);
animal.get('/', getAnimalAll);
animal.post('/list', getAnimalList);

export default animal;
