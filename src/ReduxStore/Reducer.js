
var initialData = {
    name: "Ravi",
}

const Reducer =(storeData = initialData, action) => {
  if(action.type === "name") {
    return {
        name: action.username,
    };
  }
  return storeData;
}

export default Reducer;
