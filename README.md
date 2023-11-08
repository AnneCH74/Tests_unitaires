# Tests_unitaires


Répondez aux questions suivantes, sans vous aider d’internet, puis à l’oral, nous ferons un tour de table de vos réponses.


1) Selon-vous, qu’est-ce un test ?
En programmation informatique, le test unitéraire est une procédure permettant de vérifier le bon fonctionnement d'une partie précise d'un logiciel ou d'une portion d'un programme. C'est une vérification du code, de l'application.


2) À quoi servent les tests ?
Pour prévenir les erreurs, pour s'assurer qu'il y ait le moins d'erreur possible.


3)Y a-t-il plusieurs types de tests ? Si oui, quelle est leur différence ?
Oui. Les tests unitaires (attention qu'une seule chose testée : une fonction, un bloc du code), les tests de performance, les tests fonctionnels (bloc de toute une fonctionnalité), les tests end-to-end (bon fonctionnement d'une page web, par exemple : tester si le bouton "ajouter au panier" fonctionne).  


4) Intuitivement, à quelles bonnes pratiques de conception de tests, vous pouvez penser ?
Il faut bien découper son code.


5) À l’inverse, et toujours sans vous aider d’internet, qu’est-ce qui pourrait être une mauvaise pratique de conception de test ?
Ne pas faire de test, mal couper son code. 


6) Définir ce qu’est le TDD et quels sont les avantages de cette pratique.
TDD = Test Driven Development
Ecrire les tests avant d'écrire le code.



https://fr.wikipedia.org/wiki/Test_driven_development#:~:text=Test%2DDriven%20Development%20(TDD),%C3%A0%20r%C3%A9soudre%20sous%20forme%20d
https://2022.stateofjs.com/fr-FR/libraries/testing/




REALISATION DE TESTS UNITAIRES = logique inversée => Ecrire le test PUIS écrire la fonction

Ecrire le test = montrer une photo d'un gâteau (résultat attendu) PUIS Ecrire la fonction = avoir en sa possession la recette du gâteau et la faire : retourner le gâteau (résultat obtenu, conforme au résultat attendu)

Par exemple :
ECRIRE LE TEST (step 1)

Fichier "calc.test.js" :

import { divide } from "./calc";

test('divides 10 by 5 equals 2', () => {
  expect(divide(10, 5)).toBe(2)
})

+

Fichier "calc.js" :

export function divide(a,b){
    
}

Terminal result = failed (red)

PUIS
ECRIRE LA FONCTION (step 2)

Fichier "calc.js" :
export function divide(a,b){
    return a/b
}

Terminal result = success (green)






Un aperçu détaillé de la syntaxe de test :

it(description, testFunction) : La fonction it (ou test, ce sont des synonymes) est utilisée pour créer un scénario de test distinct. Il faut deux paramètres :

description : Il s’agit d’une chaîne descriptive qui explique ce que fait le test. Cette ligne s'affiche pendant l'exécution du test et vous aide à comprendre exactement ce qui est testé dans le test.

testFunction : Il s’agit de la fonction qui contient la logique de test. Dans cette fonction, vous définissez les étapes de test et appelez la fonction expect pour vérifier le résultat.

expect(value) : La fonction expect prend la valeur que vous souhaitez tester et renvoie un objet « attente ». Cet objet contient des méthodes pour déterminer le résultat attendu. Les méthodes les plus courantes incluent :

toBe(expected) : vérifie si la valeur est égale à la valeur attendue.

toEqual (attendu) : vérification de l'égalité profonde des objets.

not.toBe(expected) : vérifie que la valeur n'est pas égale à la valeur attendue.

toThrow(expected) : vérifie que la fonction lève une exception qui correspond à celle attendue.

Il existe de nombreuses autres méthodes pour différents types de contrôles.


Exemple pour illustrer les explications de la syntaxe de test ci-dessus :

// test addTask 

describe ('add a new task', () =>{

  it('have to add a new task in the array', () => {

    const tasks = [];

    const obj = {
        name: "call Anne",
        task: {
          label: "call Anne this friday",
          done: false
        }
    }

    addTask(obj, tasks);
    expect(tasks.length === 1).toBe(true)

  })


})


// addTask

function addTask (object, tasks){
  tasks.push(object);
}

export { sum, addTask}
