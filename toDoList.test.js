// 001A - newTask - Création nouvelle tâche


import { divide, add, deleteTask, changeOrder, changeOrderNotEmpty, supprimerTache, supprimerObjet, addNewTask} from "./toDoList";
import { expect, test } from 'vitest'

test('divides 10 by 5 equals 2', () => {
  expect(divide(10, 5)).toBe(2)
})

test('create a new task', () => {
expect(add("Jordan doit")).toBe("call Lyoubo")
})

// 001 - add New Task

test('addNewTask',  () => {
  var arrayTasks = [];

  var task1 = {
    "label" : "Nettoyer la cuisine",
    "done" : false
  }

  /*var task2 = {
    "label" : "Faire la vaisselle",
    "done" : true
  }*/

addNewTask(arrayTasks, task1)
expect(arrayTasks).toContain(task1);
})



//002 - changeOrder : changer l'ordre d'une tâche

//describe('Test de la fonction changeOrder', () => {
  test('Déplacer "banane" de l\'index 0 à l\'index 3', () => {
    // Créez une liste de tâches de test
    const tasks = ['banane', 'pomme', 'orange', 'fraise'];

    // Appelez la fonction pour déplacer "banane" de l'index 0 à l'index 3
    const modifiedTasks = changeOrder(tasks, 0, 3);

    // Vérifiez que "banane" a été correctement déplacé
    expect(modifiedTasks).toEqual(['pomme', 'orange', 'fraise', 'banane']);
  });
//});


//002B - changeOrderNotEmpty - vérifier que l'index sélectionné contient bien une tâche (= not empty)

test("Vérifier index 1 n'est pas vide", () => {
// Créez une liste de tâches de test
const tasks = ['banane', 'pomme', 'orange', 'fraise'];

//Appelez la fonction pour vérifier que l'index 1 n'est pas vide
const verifyIndex = changeOrderNotEmpty(tasks, );

//Retourner la réponse concernant l'index 1
// expect(verifyIndex).toEqual([1] === [x], "index not empty");
})



//003A - deleteTask : supprimer une tâche

/*test('deleteTask', () => {
expect(deleteTask("call Lyoubo")).toBe()
})*/


//003B - supprimer une tâche existante

  // Penser à copier le tableau initial pour éviter de modifier l'original
  

test('Supprimer une tâche existante', () => {

  const fondantAuChocolat = [
    10,
    "Etape 1 : faire fondre au bain-marie le chocolat et le beurre",
    "Etape 2 : mélanger la farine, les œufs et le sucre aux ingrédients de l'étape 1",
    "Etape 3 : verser le tout dans un moule et enfourner pendant 10 min à 180°C"
  ];

  const tacheExistante = "Etape 1 : faire fondre au bain-marie le chocolat et le beurre";
  const newArray = supprimerTache(tacheExistante, fondantAuChocolat);
  console.log(newArray.includes(tacheExistante));
  

  // Vérifier que la tâche a été supprimée

  expect(newArray.includes(tacheExistante)).toBe(false)
});






  
 

