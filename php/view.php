<?php
    include "connectionDB.php";

    header("Content-type: text/xml");
	header("Cache-Control: no-cache");

	mysqli_query($link, "SET NAMES 'utf8'");

    $results = mysqli_query($link, "SELECT nick, tresc, czas FROM wiadomosci");
    
    echo "<?xml version='1.0' ?>";
	echo "<wiadomosci>";
	while ($row = mysqli_fetch_array($results, MYSQLI_ASSOC))
	{
		echo "<wiadomosc>";
		echo "<nick>".$row['nick']."</nick>";
		echo "<tresc>".$row['tresc']."</tresc>";
		echo "<czas>".date('d-m-y H:i:s',$row['czas'])."</czas>";
		echo "</wiadomosc>";
	}
	
	echo "</wiadomosci>";
@mysqli_close($link);
?>