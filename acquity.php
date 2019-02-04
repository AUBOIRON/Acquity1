<?php

try
{
 $bdd = new PDO('mysql:host=localhost;dbname=acquity;charset=utf8', 'root', '');
}
catch(Exception $e)
{
        die('Erreur : '.$e->getMessage());
}


$req = $bdd->prepare('INSERT INTO solutions (Nom, Prenom, Civilite, Societe, Fixe, Portable, Email, AdresseRue, AdresseVille, AdresseCP) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
$req->execute(array($_POST['Nom'], $_POST['Prenom'], $_POST['Civilite'],  $_POST['Societe'],  $_POST['Fixe'],  $_POST['Portable'],  $_POST['Email'],  $_POST['AdresseRue'],  $_POST['AdresseVille'],  $_POST['AdresseCP']));

?>

<script> alert("Votre demande a bien été traitée\n Retour à la page d'accueil") </script>

<?php echo "<script type='text/javascript'>document.location.replace('accueil.html');</script>"; ?>