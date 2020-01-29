toArray = object => {
  const array = Object.entries(object).map(([key, value]) => ({
    key,
    value
  }));
  return array;
};

console.log(
  toArray({
    "key-1": "value-1",
    "key-2": "value-2",
    "key-3": "value-3"
  })
);
