<?php

  // Przypisanie zmiennych POST
  $name = $_POST['name'];
  $email = $_POST['email'];
  $title = $_POST['title'];
  $message = $_POST['message'];

  $od_kogo = "mail@smarthome.pl";
  $do_kogo = "mail@smarthome.pl";

  // Złożenie wiadomości
  $wiadomosc = "";
  $wiadomosc .= "Imie i nazwisko: " . $name . "\n";
  $wiadomosc .= "Email: " . $email . "\n";
  $wiadomosc .= "Tytuł: " . $title . "\n";
  $wiadomosc .= "Wiadomość: " . $message . "\n";

  $sukces = mail($do_kogo, $title, $wiadomosc, "Od: <$od_kogo>");

  if ($sukces){
    print "Wiadomość została wysłana!";
  }

  else{
    print "Błąd! Nie wysłano wiadomości.";
  }

?>
