function selector(selectorType, setSelectorType, key, array) {
  if (selectorType == 0) {
    setSelectorType(1);
    array[key] = "X";
    verificaGanhou(array, "X");
    verificaEmpate(array, "X");
  } else {
    setSelectorType(0);
    array[key] = "O";
    verificaGanhou(array, "O");
    verificaEmpate(array, "O");
  }
}

function verificaGanhou(array, type) {
  if (array[0] == type && array[1] == type && array[2] == type) {
    alert(`${type} ganhou!`);
    return true
  } else if (array[3] == type && array[4] == type && array[5] == type) {
    alert(`${type} ganhou!`);
    return true
  } else if (array[6] == type && array[7] == type && array[8] == type) {
    alert(`${type} ganhou!`);
    return true
  } else if (array[0] == type && array[4] == type && array[8] == type) {
    alert(`${type} ganhou!`);
    return true
  } else if (array[2] == type && array[4] == type && array[6] == type) {
    alert(`${type} ganhou!`);
    return true
  } else if (array[0] == type && array[3] == type && array[6] == type) {
    alert(`${type} ganhou!`);
    return true
  } else if (array[1] == type && array[4] == type && array[7] == type) {
    alert(`${type} ganhou!`);
    return true
  } else if (array[2] == type && array[5] == type && array[8] == type) {
    alert(`${type} ganhou!`);
    return true
  }
}

function verificaEmpate(array, type) {
    const arrayEmpate = []
    for(let i = 0; i < array.length; i++){
        if(array[i] == "X" || array[i] == "O"){
            arrayEmpate.push(array[i])
        }
    }
    if(arrayEmpate.length == 9 && verificaGanhou(array, type) != true) {
        alert("Empate")
    }
}

export default { selector };
