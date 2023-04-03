import * as tuitsDao from "./tuits-dao.js";
// import posts from "./tuits.js";

// let tuits = posts;

const createTuit = async (req, res) => {
  const newTuit = req.body;
  // newTuit._id = new Date().getTime() + "";
  newTuit.likes = 0;
  newTuit.dislikes = 0;
  newTuit.liked = false;
  // tuits.push(newTuit);
  const insertedTuit = await tuitsDao.createTuit(newTuit);
  res.json(insertedTuit);
};

const findTuit = async (req, res) => {
  const tuits = await tuitsDao.findTuits();
  res.json(tuits);
};

const updateTuit = async (req, res) => {
  const tuitIdToUpdate = req.params["tid"];
  const updates = req.body;
  // const tuitIndex = tuits.findIndex((t) => t._id === tuitIdToUpdate);
  // tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};
  const status = await tuitsDao.updateTuit(tuitIdToUpdate, updates);
  res.json(status);
};

const deleteTuit = async (req, res) => {
  const tuitIdToDelete = req.params["tid"];
  const status = await tuitsDao.deleteTuit(tuitIdToDelete);
  // tuits = tuits.filter((t) => t._id !== tuitIdToDelete);
  res.json(status);
};

export default (app) => {
  app.post("/api/tuits", createTuit);
  app.get("/api/tuits", findTuit);
  app.put("/api/tuits/:tid", updateTuit);
  app.delete("/api/tuits/:tid", deleteTuit);
};
