<?php

  $name = $_POST['name'];
  $email = $_POST['email'];
  $title = $_POST['title'];
  $message = $_POST['message'];

  $od_kogo = "mail@smarthome.pl";
  $do_kogo = "mail@smarthome.pl";

  $wiadomosc = "";
  $wiadomosc .= "Imie i nazwisko: " . $name . "\n";
  $wiadomosc .= "Email: " . $email . "\n";
  $wiadomosc .= "Tytuł: " . $title . "\n";
  $wiadomosc .= "Wiadomość: " . $message . "\n";

  $sukces = mail($do_kogo, $title, $wiadomosc, "Od: <$od_kogo>");

  if ($sukces){
    print "<meta http-equiv=\"refresh\" content=\"0;URL=potwierdzenie.php\">";
  }

  else{
    print "<meta http-equiv=\"refresh\" content=\"0;URL=error.html\">";
  }

?>
