const personagensService = require('../services/personagem,service');
const mongoose = require('mongoose');

// const createUsersController = (req, res) => {};
// const usersController = (req, res) => {};
// const logincontroller = (req, res) => {};

const createPersonagemController = async (req, res) => {
  const personagem = req.body;
  const newPersonagem = await personagensService.createPersonagemService(
    personagem,
  );
  res.status(201).send(newPersonagem);
};

const allPersonagensController = async (req, res) => {
  const allPersonagens = await personagensService.allPersonagensService();

  if (allPersonagens.length == 0) {
    return res.status(404).send({ message: 'Nenhum personagem cadastrato!' });
  }

  res.send(allPersonagens);
};

const personagemByIdController = async (req, res) => {
  const idParam = req.params.id;
  const chosenPersonagem = await personagensService.personagemByIdService(
    idParam,
  );

  if (!chosenPersonagem) {
    return res.status(404).send({ message: 'Personagem não encontrado!' });
  }

  res.send(chosenPersonagem);
};

const updatePersonagemController = async (req, res) => {
  const idParam = req.params.id;
  const editPersonagem = req.body;
  const updatedPersonagem = await personagensService.updatePersonagemService(
    idParam,
    editPersonagem,
  );
  res.send(updatedPersonagem);
};

const deletePersonagemController = async (req, res) => {
  const idParam = req.params.id;
  await personagensService.deletePersonagemService(idParam);
  res.send({ message: 'Personagem deletado com sucesso!' });
};

const searchPersonagemController = async (req, res) => {
  const personagem = req.params.nome;
  const searchPersonagem = await personagensService.searchPersonagemService(
    personagem,
  );

  if (!searchPersonagem) {
    return res.status(404).send({ message: 'Personagem não encontrado!' });
  }

  res.send(searchPersonagem);
  
};

module.exports = {
  // createUsersController,
  // usersController,
  // logincontroller,
  createPersonagemController,
  allPersonagensController,
  personagemByIdController,
  updatePersonagemController,
  deletePersonagemController,
  searchPersonagemController,
};
