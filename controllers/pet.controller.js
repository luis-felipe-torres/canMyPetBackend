import petRepository from "../repository/pet.repository.js";

class PetController {
  async getAllPets(req, res, next) {
    try {
      const pets = await petRepository.findAll();
      res.json(pets);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getPetById(req, res, next) {
    try {
      const pet = await petRepository.findById(req.params.id);
      res.json(pet);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async insertPet(req, res, next) {
    try {
      const newPet = await petRepository.create(req.body);
      res.status(201).json(newPet);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updatePet(req, res, next) {
    try {
      const updatedPet = await petRepository.update(req.params.id, req.body);
      res.json(updatedPet);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async deletePet(req, res, next) {
    try {
      const result = await petRepository.delete(req.params.id);
      res.json(result);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

export default new PetController();
