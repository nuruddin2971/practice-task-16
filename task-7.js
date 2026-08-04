const manageInventoryObject = (obj, action) => {
  if (!obj || !action) {
    return "Invalid";
  }

  const deleteAction = action.split(":");
  const isDelete = deleteAction[0];
  const prop = deleteAction[1];
  // console.log(deleteAction);
  if (action == "keys") {
    return Object.keys(obj);
  } else if (action == "values") {
    return Object.values(obj);
  } else if (action == "entries") {
    return Object.entries(obj);
  } else if (action == "seal") {
    return Object.seal(obj);
  } else if (action == "freeze") {
    return Object.freeze(obj);
  } else if (isDelete == "delete") {
    delete obj[prop];
    return obj;
  } else {
    return "Invalid";
  }
};

console.log(manageInventoryObject({ a: 1, b: 2, c: 3 }, "keys"));
console.log(manageInventoryObject({ a: 1, b: 2, c: 3 }, "seal"));
console.log(manageInventoryObject({ a: 1, b: 2, c: 3 }, "freeze"));
console.log(manageInventoryObject({ a: 1, b: 2, c: 3 }, "entries"));
console.log(manageInventoryObject({ a: 1, b: 2, c: 3 }, "delete:c"));
console.log(manageInventoryObject({ a: 1 }, "shrink"));
