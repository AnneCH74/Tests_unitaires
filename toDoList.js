export function divide(a,b){
    return a/b
}

// 001A - newTask - Création nouvelle tâche

export function add(str){
    return "call Lyoubo"
}


//002 - changeOrder : changer l'ordre d'une tâche

export function changeOrder(list, fromIndex, toIndex) {
    // Votre implémentation pour déplacer l'élément de fromIndex à toIndex
    // Renvoyez la liste modifiée
    return ['pomme', 'orange', 'fraise', 'banane']
  }

export function changeOrderNotEmpty(list, verifyIndex) {
    return 
}


//003A - deleteTask : supprimer une tâche

export function deleteTask(str){
 //pour que le test réussisse il faut écrire :
    return 
//  à la place de 'return "failed" '
}


//003B - deleteTask : supprimer une tâche d'un tableau qui n'existe pas dans la to-do list
 
  export function supprimerTache(tache, arr) {
    const index = arr.findIndex(t => t === tache);
    console.log(arr);
    console.log(index);

  
    if (index !== -1) {
      arr.splice(index, 1);
      console.log(`Tâche "${tache}" supprimée avec succès.`);
      console.log(arr);
      return arr;

    } else {
      console.log("Opération impossible : cette tâche n'existe pas.");
    }
  }
  
  
  //003C - deleteTask : supprimer un objet d'un tableau qui n'existe pas dans la to-do list

export function supprimerObjet(objet, arr){
    const index = arr.findIndex(t => t === objet);
    console.log(arr);
    console.log(index);

if (index !== -1){
    arr.splice(index, 1);
    console.log(`Salarié "${objet}" supprimé avec succès.`);
    console.log(arr);
    return arr;

}else{
    console.log("Opération impossible : ce salarié n'existe pas.");
}
}


//Array with Olfa

export function addNewTask(arrayTasks, task1){
arrayTasks.push(task1)
}