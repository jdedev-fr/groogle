<?php
$bdd = new PDO("mysql:host=localhost;dbname=world;port=3306;charset=utf8",
"root",
"root",
[
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
]);
if(!isset($_GET["name"])) $_GET["name"]="";
$sth =$bdd->prepare("SELECT Name FROM country WHERE Name LIKE :name");
$sth->bindValue(":name","%".$_GET["name"]."%",PDO::PARAM_STR);
$sth->execute();
header('Content-Type: application/json');
echo json_encode($sth->fetchAll());

?>