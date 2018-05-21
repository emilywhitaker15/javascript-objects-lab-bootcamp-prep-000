function Objects(flour, sugar, butter) {
  this.flourAmount = flour;
  this.sugarAmount = sugar;
  this.butterAmount = butter;
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object)
  return delete newObject[key]
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}