import { faker } from '@faker-js/faker';
import { Router } from 'express';
import { animalList } from './Factory.js';
function postAnimal(req, res) {
    const animal = req.body;
    animal.id = faker.datatype.uuid();
    animalList.unshift(animal);
    res.status(200).json(animal);
}
function putAnimal(req, res) {
    const animal = req.body;
    const finded = animalList.find((a) => a.id === animal.id);
    if (finded) {
        const modified = Object.assign({ animal }, finded);
        const index = animalList.findIndex((a) => a.id === animal.id);
        animalList[index] = modified;
        res.status(200).json(modified);
    }
    else {
        res.status(404).json({ msg: 'not found' });
    }
}
function deleteAnimal(req, res) {
    const { id } = req.params;
    const found = animalList.find((a) => a.id === id);
    if (found) {
        const index = animalList.findIndex((a) => a.id === id);
        animalList.splice(index, 1);
        res.status(200).json(found);
    }
    else {
        res.status(404).json({ msg: 'not found' });
    }
}
function getAnimalById(req, res) {
    const { id } = req.params;
    const found = animalList.find((a) => a.id === id);
    if (found) {
        res.status(200).json(found);
    }
    else {
        res.status(404).json({ msg: 'not found' });
    }
}
function getAnimalAll(req, res) {
    res.status(200).json(animalList);
}
const animal = Router();
animal.post('/', postAnimal);
animal.put('/', putAnimal);
animal.delete('/:id', deleteAnimal);
animal.get('/:id', getAnimalById);
animal.get('/', getAnimalAll);
export default animal;
//# sourceMappingURL=index.js.map