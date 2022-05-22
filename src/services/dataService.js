
// Here dataToDo are saved temporrary to display in the list of item.
const dataToDo = [
//   {
//     title: "Electric bill",
//     deadline: "Tomorrow",
//     status:"#5BC85B",
//     id: "5b21ca3eeb7f6fbccd471815"
//   },
];
export function getDataToDo() {
  return dataToDo;
}
export function updateDataToDo(item){
    console.log('dataDb',item )
  dataToDo.splice(dataToDo.findIndex(a => a.title === item[0].title) , 1)
  console.log('dataDb',dataToDo )
  //add to it
  const newItem=[{title:item[0].title,deadline:item[0].deadline,status:item[0].status,id: Date.now().toString()}];
  dataToDo.push(newItem);
  console.log('dataDb',dataToDo )

}

export function saveDataToDo(item) {
  let newdataToDo = dataToDo.find(m => m.id === item.id) || {};
  newdataToDo.title = item[0].title;
  newdataToDo.deadline=item[0].deadline
  newdataToDo.status=item[0].status

  if (!newdataToDo.id) {
    newdataToDo.id = Date.now().toString();
    dataToDo.push(newdataToDo);
  }
  return newdataToDo;
}

export function deleteData(id) {
  let dataDb = dataToDo.find(m => m.id === id);
  dataToDo.splice(dataToDo.indexOf(dataDb), 1);
  return dataDb;
}
