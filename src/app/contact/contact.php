<?php
if(!$_POST) exit;
if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");

// Dane otrzymane z formularza przypisujemy do zmiennych.
$name     = $_POST['name'];
$email    = $_POST['email'];
$subject  = $_POST['subject'];
$comments = $_POST['comments'];
$verify   = $_POST['verify'];

// Walidacja poprawno�ci danych.
if(trim($name) == '') {
	echo '<div class="error_message">Prosimy o podanie imienia i nazwiska.</div>';
	exit();
}

else if(trim($email) == '') {
	echo '<div class="error_message">Prosimy o podanie poprawnego adresu email.</div>';
	exit();
}

if(trim($subject) == '') {
	echo '<div class="error_message">Prosimy o podanie tematu wiadomo�ci.</div>';
	exit();
}

else if(trim($comments) == '') {
	echo '<div class="error_message">Prosimy o wpisanie tre�ci wiadomo�ci.</div>';
	exit();
}

else if(!isset($verify) || trim($verify) == '') {
	echo '<div class="error_message">Aby wys�a� wiadomo�� nale�y uzupe�ni� wynik dzia�ania.</div>';
	exit();
}

// W tym miejscu umieszczamy poprawny wynik dzia�ania do weryfikacji.
else if(trim($verify) != '22') {
	echo '<div class="error_message">Numer weryfikacyjny jest niepoprawny. Prosimy wpisa� wynik dzia�ania.</div>';
	exit();
}

if(get_magic_quotes_gpc()) {
	$comments = stripslashes($comments);
}

$msg = "<strong>Autor:</strong> $name <br /> <strong>Temat:</strong> $subject <br /> <strong>Kontakt:</strong> $email <br /><br />
        Wiadomo�� ze strony Smarthome:<br /> <br />
        \"$comments\"<br /><br />";

require '/PHPMailerAutoload.php';
require_once('/class.phpmailer.php');

$mail = new PHPMailer;

/* KONFIGURACJA PHPMailer */
$mail->isSMTP(); 				/* Wysy�anie za pomoc� SMTP */
$mail->Host = 'smtp.gmail.com'; 		/* Adres serwera poczty */
$mail->SMTPAuth = true; 			/* Uruchomienie autoryzacji SMTP */
$mail->Username = 'smarthomepg2017@gmail.com'; 	/* Login do poczty */
$mail->Password = 'Projekt2017';		/* Haslo do poczty */
$mail->SMTPSecure = 'tls';			/* W��czamy szyfrowanie tls, mo�na ustawi� r�wnie� ssl - mo�liwo�ci poczty powinny by� dost�pne w dokumentacji dostawcy */
$mail->Port = 587;				/* Port po kt�rym skrypt ma si� ��czy� z kontem, przy tls jest to zazwyczaj 587, przy ssl 465 - mo�e to si� jednak r�ni� w zale�no�ci od dostawcy poczty */
$mail->CharSet = "UTF-8";                       /* Ustawienie kodowania wiadomo�ci na UTF-8 */

/* KONFIGURACJA KONKRETNEGO ADRESU */
$mail->From = 'smarthomepg2017@gmail.com';                      /* Adres nadawcy maila*/
$mail->FromName = 'Smarthome';                                  /* Nazwa nadawcy */

$mail->addAddress('smarthomepg2017@gmail.com', 'SmartHome');	/* Dodajemy odbiorc� wiadomo�ci (mo�na doda� kilku) */

$mail->addReplyTo($email, $name);                               /* Je�eli chcemy aby odpowiedzi na wys�any mail trafia�y na inny adres ni� ten z kt�rego zosta�y wys�ane */

$mail->isHTML(true);                                            /* Wys�anie w formacie HTML */

$mail->Subject = $name . ' kontaktuje si� poprzez formularz SmartHome.';
$mail->Body    = $msg;

if(!$mail->send()) {
    echo 'Wyst�pi� b��d w trakcie wysy�ania wiadomo�ci. Prosimy zapozna� si� z jego tre�ci�: <br /> ' . $mail->ErrorInfo;
}

else {
	echo "<fieldset>";
	echo "<div id='success_page'>";
	echo "<h1>Dzi�kujemy za wys�anie wiadomo�ci.</h1>";
	echo "</div>";
	echo "</fieldset>";
}

?>
