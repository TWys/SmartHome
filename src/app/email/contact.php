<?php
if(!$_POST) exit;
if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");

// Dane otrzymane z formularza przypisujemy do zmiennych.
$name     = $_POST['name'];
$email    = $_POST['email'];
$subject  = $_POST['subject'];
$comments = $_POST['comments'];
$verify   = $_POST['verify'];

// Walidacja poprawnoœci danych.
if(trim($name) == '') {
	echo '<div class="error_message">Prosimy o podanie imienia i nazwiska.</div>';
	exit();
} 

else if(trim($email) == '') {
	echo '<div class="error_message">Prosimy o podanie poprawnego adresu email.</div>';
	exit();
} 

if(trim($subject) == '') {
	echo '<div class="error_message">Prosimy o podanie tematu wiadomoœci.</div>';
	exit();
} 

else if(trim($comments) == '') {
	echo '<div class="error_message">Prosimy o wpisanie treœci wiadomoœci.</div>';
	exit();
} 

else if(!isset($verify) || trim($verify) == '') {
	echo '<div class="error_message">Aby wyslac wiadomosc nalezy uzupelnic wynik dzialania.</div>';
	exit();
} 

// W tym miejscu umieszczamy poprawny wynik dzia³ania do weryfikacji.
else if(trim($verify) != '22') {
	echo '<div class="error_message">Numer weryfikacyjny jest niepoprawny. Prosimy wpisac wynik dzialania.</div>';
	exit();
}

if(get_magic_quotes_gpc()) {
	$comments = stripslashes($comments);
}

$msg = "<strong>Autor:</strong> $name <br /> <strong>Temat:</strong> $subject <br /> <strong>Kontakt:</strong> $email <br /><br />
        Wiadomosc ze strony Smarthome:<br /> <br />
        \"$comments\"<br /><br />";
 

require 'phpmailer/PHPMailerAutoload.php'; /* podajemy odpowiednia sciezke w stosunku do aktualnego pliku php */

$mail = new PHPMailer;

/* KONFIGURACJA PHPMailer */
$mail->isSMTP(); 				/* Wysy³anie za pomoc¹ SMTP */
$mail->Host = 'smtp.gmail.com'; 		/* Adres serwera poczty */
$mail->SMTPAuth = true; 			/* Uruchomienie autoryzacji SMTP */
$mail->Username = 'smarthomepg2017@gmail.com'; 	/* Login do poczty */
$mail->Password = 'Projekt2017';		/* Haslo do poczty */
$mail->SMTPSecure = 'tls';			/* W³¹czamy szyfrowanie tls, mo¿na ustawiæ równie¿ ssl - mo¿liwoœci poczty powinny byæ dostêpne w dokumentacji dostawcy */
$mail->Port = 587;				/* Port po którym skrypt ma siê ³¹czyæ z kontem, przy tls jest to zazwyczaj 587, przy ssl 465 - mo¿e to siê jednak ró¿niæ w zale¿noœci od dostawcy poczty */
$mail->CharSet = "UTF-8";                       /* Ustawienie kodowania wiadomoœci na UTF-8 */

/* KONFIGURACJA KONKRETNEGO ADRESU */
$mail->From = 'smarthomepg2017@gmail.com';                      /* Adres nadawcy maila*/
$mail->FromName = 'Smarthome';                                  /* Nazwa nadawcy */

$mail->addAddress('smarthomepg2017@gmail.com', 'SmartHome');	/* Dodajemy odbiorcê wiadomoœci (mo¿na dodaæ kilku) */

$mail->addReplyTo($email, $name);                               /* Je¿eli chcemy aby odpowiedzi na wys³any mail trafia³y na inny adres ni¿ ten z którego zosta³y wys³ane */

$mail->isHTML(true);                                            /* Wys³anie w formacie HTML */

$mail->Subject = $name . ' kontaktuje sie poprzez formularz SmartHome.';
$mail->Body    = $msg;

if(!$mail->send()) {				
    echo 'Wyst¹pi³ b³¹d w trakcie wysy³ania wiadomoœci. Prosimy zapoznaæ siê z jego treœci¹: <br /> ' . $mail->ErrorInfo;      	
} 

else {					
	echo "<fieldset>";
	echo "<div id='success_page'>";
	echo "<h1>Dziekujemy za wyslanie wiadomosci.</h1>";
	echo "</div>";
	echo "</fieldset>";
}