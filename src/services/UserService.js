import uniqid from "uniqid";

function saveUser(user) {
  let userObj = _getEmptyUser();
  userObj = Object.assign(userObj, user);
  localStorage.setItem("user", JSON.stringify(userObj));
  return userObj;
}

function getUser() {
  const user = JSON.parse(localStorage.getItem("user"));
  return user;
}

function addMove(move) {
  let moveObj = _getEmptyTransaction();
  moveObj = Object.assign(moveObj, move);
  moveObj.at = Date.now();
  moveObj._id = uniqid();
  let user = getUser();
  user.moves.push(moveObj);
  saveUser(user);
  return user;
}

function _getEmptyUser() {
  return { name: "Puki", balance: 100, moves: [] };
}

function _getEmptyTransaction() {
  return { at: 173989218, amount: 2, to: "Shraga" };
}

export default {
  saveUser,
  getUser,
  addMove
};
