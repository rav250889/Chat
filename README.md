<html>
  <h1>Chat Application</h1>
  <p><b>Create database in MySQL</b></p>
  <p>create database 'any name';<br>
  <p><b>Create table wiadomosci with columns "id, nick, tresc, czas" in your database</b></p>
  <p>create table wiadomosci (id serial <b>PRIMARY KEY, nick VARCHAR(20), feed TEXT(), czas INT();</b></p>
  <p><b>Change your database connection in file "connection.php"</b></p>
  <p>$connection = mysqli_connect("your server address", " your user name", "your password", "your database name");</p>
</html>
