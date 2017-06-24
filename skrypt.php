<?php


/* Przypisanie danych wysłanych z formularza do zmiennych */
 
    $temp = $_POST['temp'];
    $light = $_POST['light'];
    $rolUp = $_POST['rolUp'];


/* Odczyt danych do połączenia z bazą SQL ze strony connect.php */
require_once "connect.php";

/* Ustanawianie połaczenia z bazą SQL */
$polaczenie = @new mysqli($host,$db_user,$db_password,$db_name);
if($polaczenie->connect_errno!=0)
{
    echo "Error:".$polaczenie->connect_errno;   
}
 else 
    {
         
    /* Zapisywanie danych z formularza HTML do bazy SQL */
    $polaczenie->query("UPDATE `group_table` SET zadaj_temp_grzalki=$temp WHERE group_table_ndx=1");
    $polaczenie->query("UPDATE `group_table` SET zapal_swiatlo=$light WHERE group_table_ndx=1");
    $polaczenie->query("UPDATE `group_table` SET rolety_up=$rolUp WHERE group_table_ndx=1");
     
    /* Przypisanie zapytań SQL do zmiennych */
    $sql="SELECT * FROM `group_table` WHERE group_table_ndx=1"; /* Przypisanie o wiersz w tabeli w którym ustawiono nowe dane */
    $sql1="SELECT * FROM `group_table` ORDER BY `group_table_ndx` DESC LIMIT 1"; /* Przypisanie o wiersz w tabeli który został aktualnie uzupełniony */
            
    /* Odczytywanie danych które wprowadza użytkownik */
    if($rezultat = @$polaczenie->query($sql))
    {
    $ile_wierszy = $rezultat->num_rows;
    if($ile_wierszy>0)
    {      
    $wiersz = $rezultat->fetch_assoc(); 
    
    $setTemp = $wiersz['zadaj_temp_grzalki'];
    $setLight = $wiersz['zapal_swiatlo'];
    $setRolUp = $wiersz['rolety_up'];
    $rezultat->close();
    }
    }
    /* Odczytywanie aktualnych danych pomiarowych z bazy SQL */
    if($rezultat1 = @$polaczenie->query($sql1))
    {
    $ile_wierszy1 = $rezultat1->num_rows;
    if($ile_wierszy1>0)
    {   
    $wiersz1 = $rezultat1->fetch_assoc(); 
    
    $readTemp = $wiersz1['czytaj_temp_grzalki'];
    $readTemp1 = $wiersz1['czytaj_temp_atm'];
    $readCisnienie = $wiersz1['czytaj_cisnienie_atm'];
    $readLight = $wiersz1['czytaj_swiatlo'];
    $readRolUp = $wiersz1['rolety_up'];
    $readRolDown = $wiersz1['rolety_down'];
    $readRolStop = $wiersz1['rolety_stop'];
    $rezultat1->close();
    }
    }
    /* Zamknięcie połączenia z bazą SQL */
    $polaczenie->close();
    }   

    
    $wyjscie = array('temp_ust' => $setTemp, 'temp_akt' => $readTemp, 'swiatlo_On_1_Off_0' => $setLight, 'rolety_Up_1_Down_0' => $setRolUp, 'cisnienie_atm' => $readCisnienie );
    echo json_encode($wyjscie); 
    
?>
