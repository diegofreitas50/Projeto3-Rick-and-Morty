const Personagem = require('../models/Personagem');

const createPersonagemService = async (newPersonagem) => {
  const createdPersonagem = await Personagem.create(newPersonagem);
  return createdPersonagem;
};

const allPersonagensService = async () => {
  const personagens = await Personagem.find();
  return personagens;
};

const personagemByIdService = async (id) => {
  const personagem = await Personagem.findById(id);
  return personagem;
};

const updatePersonagemService = async (id, editedPersonagem) => {
  await Personagem.findByIdAndUpdate(id, editedPersonagem);
  return editedPersonagem;
};

const deletePersonagemService = async (id) => {
  return await Personagem.findByIdAndDelete(id);
};

const searchPersonagemService = async (nome) => {
  return await Personagem.findOne({ nome: nome });  
};

module.exports = {
  createPersonagemService,
  allPersonagensService,
  personagemByIdService,
  updatePersonagemService,
  deletePersonagemService,
  searchPersonagemService,
};
