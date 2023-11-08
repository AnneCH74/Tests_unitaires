Rédigez sur un fichier Markdown une liste exhaustive des différentes fonctions qui vont vous servir pour gérer votre todo-list. Il s’agit ici de créer votre “cahier de tests” (plus d’information dans les ressources).
Exemple : Une fonction markAllAsDone qui modifie le statut done à true de tous les éléments de la toto-list.

Comment rédiger un cahier de test ?

Lors de la rédaction du cahier de test, il est important d’inclure les éléments suivants.

    Nom du test : Le titre qui décrit la fonctionnalité à tester.
    ID du test : Généralement un identifiant numérique ou alphanumérique que les testeurs utilisent pour regrouper les cas de test en suites de test.
    Objectif : Également appelé description, ce composant décrit ce que le test doit valider.
    Références : Liens vers vos « user stories » et les spécifications de conception ou les exigences que le test doit vérifier.
    Conditions préalables : Toutes les conditions nécessaires pour que le testeur puisse effectuer le test.
    Configurations : Ce composant identifie ce dont le scénario de test a besoin pour fonctionner correctement, comme la version de l'application, le système d'exploitation, les exigences en matière de date et d'heure et les spécifications de sécurité.
    Étapes de test : Des descriptions détaillées des actions séquentielles qui doivent être effectuées pour terminer le test.
    Résultat attendu : Une explication de la manière dont la fonctionnalité ou le système doit réagir.


- newTask : créer une nouvelle tâche (saisie + insertion dans la liste)
- newList : créer une nouvelle to-do List
- selectTask : sélectionner une tâche
- selectALLTask : sélectionner toutes les tâches de la to-do list
- deleteTask : supprimer la tâche sélectionnée
- modifyTask : modifier la tâche sélectionnée
- changeOrder : changer l'ordre d'une tâche
- markAsDone : modifier le statut done à true de la tâche sélectionnée
- markAllAsDone : modifier le statut done à true de toutes les tâche sélectionnées
- save : enregistrer la modification
- closeList :fermer la to-do liste en cours d'utilisation
- closeWindow: fermer la fenêtre



001 - newTask : créer une nouvelle tâche (saisie + insertion dans la liste)

Cet exemple sert à vérifier que la fonction produit le résultat attendu dans le cadre d'une utilisation normale :

NOM DU TEST : newTask - Création nouvelle tâche
ID DU TEST : 001A
OBJECTIF : une nouvelle tâche de la to-do list doit pouvoir être créée
REFERENCES : user story V1
CONDITIONS PREALABLES : test 001 codé
CONFIGURATIONS : N/A
ETAPES DE TEST : ouverture de la fenêtre pop-up pour saisir les champs de la nouvelle tâche (titre, description, ordre de priorité, durée de la tâche), validation des données de la pop-up, insertion de la nouvelle tâche dans la to-do list
RESULTAT ATTENDU : la nouvelle tâche doit être inclue dans la liste


Je vais créer par la suite un autre test (ID 001B) où cette fois il sera vérifié qu'un message d'erreur se déclenche si l'un des champs n'est pas renseigné

NOM DU TEST : newTask - Création nouvelle tâche champ manquant
ID DU TEST : 001B
OBJECTIF : vérifier qu'un message d'erreur apparait à l'écran et que l'enregistrement n'ait pas lieu lorsque l'un des champs N'EST PAS renseigné
REFERENCES : user story V1 - anomalie bloquante - champ vide
CONDITIONS PREALABLES : test 001 codé + test 001A validé
CONFIGURATIONS : N/A
ETAPES DE TEST : ouverture de la fenêtre pop-up pour saisir les champs de la nouvelle tâche (titre, description, ordre de priorité, durée de la tâche), champ "durée de la tâche" non renseigné, validation de la nouvelle tâche  
RESULTAT ATTENDU : apparition du message d'erreur "Erreur : tous les champs doivent être renseignés" + impossibilité de valider l'enregistrement lors du retour sur la fenêtre du nouvel enregistrement + la nouvelle tâche ne doit pas être inclue dans la liste


Je créerais ensuite un autre et dernier test (ID 001C) pour vérifier qu'un message d'erreur (anomalie bloquante) se déclenche si l'un des champs n'est pas renseigné SELON LE FORMAT ATTENDU

NOM DU TEST : newTask - Création nouvelle tâche champ format erroné
ID DU TEST : 001C
OBJECTIF : vérifier qu'un message d'erreur apparait à l'écran et que l'enregistrement n'ait pas lieu lorsque l'un des champs n'est pas renseigné selon le format attendu
REFERENCES : user story V1 - anomalie bloquante - champ format erroné
CONDITIONS PREALABLES : test 001 codé + test 001A validé
CONFIGURATIONS : N/A
ETAPES DE TEST : ouverture de la fenêtre pop-up pour saisir les champs de la nouvelle tâche (titre, description, ordre de priorité, durée de la tâche), champ "durée de la tâche" n'est pas renseigné au format numérique (FYI : nature de la durée de la tâche est sous le format d'une liste déroulante (minute, heure, jour, semaine, mois, année)), validation de la nouvelle tâche  
RESULTAT ATTENDU : apparition du message d'erreur "Erreur : format du champ non respecté" + impossibilité de valider l'enregistrement lors du retour sur la fenêtre du nouvel enregistrement + la nouvelle tâche ne doit pas être inclue dans la liste



002 - changeOrder : changer l'ordre d'une tâche

Cet exemple sert à vérifier que la fonction produit le résultat attendu dans le cadre d'une utilisation normale :

NOM DU TEST : changeOrder - changer l'ordre d'une tâche
ID DU TEST : 002A
OBJECTIF : une tâche doit pouvoir être déplacée parmi les autres tâches
REFERENCES : user story V1
CONDITIONS PREALABLES : avoir à minima deux tâches dans la to-do list
CONFIGURATIONS : N/A
ETAPES DE TEST : vérifier qu'il y a à minima deux tâches dans la to-do list (si non : alors ne pas exécuter la fonction = stop). Si oui = dans un tableau ("to-do liste") composé de 4 index (soit 5 tâches) sélectionner l'enregistrement de l'index numéro 2 et l'inverser avec l'enregistrement de l'index numéro 1
RESULTAT ATTENDU :la tâche "faire fondre le chocolat" qui était à l'index 2 est passée à l'index 1 (soit sur la to-do liste du numéro 3 au numéro 2 (sur 5 au total))


Je vais créer par la suite un autre test (ID 002B) où cette fois il sera vérifié que l'index sélectionné contient bien une tâche (= not empty)

NOM DU TEST : changeOrder - changer l'ordre d'une tâche
ID DU TEST : 002B
OBJECTIF : une tâche doit être contenue dans l'index sélectionné
REFERENCES : user story V1
CONDITIONS PREALABLES : avoir à minima deux tâches dans la to-do list
CONFIGURATIONS : N/A
ETAPES DE TEST : vérifier qu'il y a à minima deux tâches dans la to-do list (si non : alors ne pas exécuter la fonction = stop). Si oui = dans l'index x du tableau ("to-do liste"), si x = vide alors ne pas exécuter la fonction =stop, si index != vide alors exécuter la fonction.
RESULTAT ATTENDU :


Je vais créer par la suite un autre test (ID 002C) où cette fois il sera vérifié qu'il n'est pas créé d'index en dehors du tableau

NOM DU TEST : changeOrder - changer l'ordre d'une tâche
ID DU TEST : 002C
OBJECTIF : une tâche doit être contenue dans l'index sélectionné
REFERENCES : user story V1
CONDITIONS PREALABLES : avoir à minima deux tâches dans la to-do list
CONFIGURATIONS : N/A
ETAPES DE TEST : vérifier qu'il y a à minima deux tâches dans la to-do list (si non : alors ne pas exécuter la fonction = stop). Si oui = dans l'index x du tableau ("to-do liste"), si x = vide alors ne pas exécuter la fonction =stop, si index != vide alors exécuter la fonction.
RESULTAT ATTENDU :



003 - deleteTask : supprimer une tâche

Cet exemple sert à vérifier que la fonction produit le résultat attendu dans le cadre d'une utilisation normale :

NOM DU TEST : deleteTask - supprimer une tâche
ID DU TEST : 003A
OBJECTIF : une tâche doit pouvoir être supprimée
REFERENCES : user story V1
CONDITIONS PREALABLES : avoir à minima une tâche dans la to-do list
CONFIGURATIONS : N/A
ETAPES DE TEST : vérifier qu'il y a à minima une tâche dans la to-do list (si non : alors ne pas exécuter la fonction = stop). Si oui = sélectionner la tâche "call Lyoubo" et la supprimer
RESULTAT ATTENDU :la tâche "call Lyoubo" a disparu de la to-do list




COVERAGE :

Qu'est-ce-que la couverture de code ?
La couverture du code structurel est l'identification du code qui a été exécuté et enregistré dans le but de déterminer si le système a été testé de manière adéquate. La couverture de code exprime le degré auquel le code source de l'application est exercé par toutes les pratiques de test.

Qu'est-ce-qu'une couverture de code acceptable ?
Nous recommandons une couverture de code minimale de 60 %, qui devrait être facile à obtenir. Cela vous rassurera un peu mais savoir que 40% du code n'a pas été testé risque de vous donner des nuits blanches. Certains recommandent 70 à 80 %, mais la meilleure façon de déterminer si vous devez augmenter votre pourcentage de couverture est basée sur le nombre de défauts qui ont été identifiés.
ATTENTION en cas de normes ISO (automobile, domaine médical, etc.) 
