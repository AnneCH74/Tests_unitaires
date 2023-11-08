// 001A - newTask - Création nouvelle tâche


import { divide, add, deleteTask, changeOrder, changeOrderNotEmpty} from "./calc";
import { expect, test } from 'vitest'

test('divides 10 by 5 equals 2', () => {
  expect(divide(10, 5)).toBe(2)
})

test('create a new task', () => {
expect(add("Jordan doit")).toBe("call Lyoubo")
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
expect(verifyIndex).toEqual([1] === [x], "index not empty");
})



//003 - deleteTask : supprimer une tâche

test('deleteTask', () => {
expect(deleteTask("call Lyoubo")).toBe()
})