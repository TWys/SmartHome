<?php
session_start();
if((!isset($_POST['login']))||(!isset($_POST['haslo'])))
{    
    header('Location: index.php');
    exit();    
}

require_once "connect.php";
$polaczenie = @new mysqli($host, $db_user, $db_password, $db_name);

if ($polaczenie->connect_errno!=0)
{
    echo "Error:".$polaczenie->connect_errno;
} else 
{   
    
    $login = $_POST['login']; 
    $haslo = $_POST['haslo'];
        
    $sql = "SELECT * FROM group_table ORDER BY group_table_ndx DESC LIMIT 1";
    $sqlw = "SELECT * FROM group_table ORDER BY value DESC LIMIT 1";
    $sqln = "SELECT * FROM group_table ORDER BY value ASC LIMIT 1";
    
    if ($rezultat = @$polaczenie->query($sql))
    {
       $ile_wierszy = $rezultat->num_rows;
       
       if($ile_wierszy>0)
       {
           
        $_SESSION['zalogowany']=TRUE;
        
        $wiersz = $rezultat->fetch_assoc();
        
        $_SESSION['akt_temp']=$wiersz['value'];
        $_SESSION['oswietleniePokoj1']=$wiersz['name'];

        unset($_SESSION['blad']);
        $rezultat->close();
        
        header('Location:panel.php');
       }        
       else 
       {  
           $_SESSION['blad']='<span style="color:red">Nieprawidłowy login lub hasło !</span>';
           header('Location: index.php');              
       }
    }
          
    if ($rezultat = @$polaczenie->query($sqlw))
    {
       $ile_wierszy = $rezultat->num_rows;
       
       if($ile_wierszy>0)
       {
           
        $_SESSION['zalogowany']=TRUE;       
        $wiersz = $rezultat->fetch_assoc();        
        $_SESSION['tempHigh']=$wiersz['value'];
        unset($_SESSION['blad']);
        $rezultat->close();
        
        header('Location:panel.php');
       }        
       else 
       {  
           $_SESSION['blad']='<span style="color:red">Nieprawidłowy login lub hasło !</span>';
           header('Location: index.php');              
       }
    }
    
        if ($rezultat = @$polaczenie->query($sqln))
    {
       $ile_wierszy = $rezultat->num_rows;
       
       if($ile_wierszy>0)
       {
           
        $_SESSION['zalogowany']=TRUE;       
        $wiersz = $rezultat->fetch_assoc();        
        $_SESSION['tempLow']=$wiersz['value'];
        unset($_SESSION['blad']);
        $rezultat->close();
        
        header('Location:panel.php');
       }        
       else 
       {  
           $_SESSION['blad']='<span style="color:red">Nieprawidłowy login lub hasło !</span>';
           header('Location: index.php');              
       }
    }
          
 $polaczenie->close();
}
?>
