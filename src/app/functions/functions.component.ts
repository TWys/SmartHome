import { Component, OnInit } from '@angular/core';
import { Auth } from '../auth.service';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.css','../../assets/bootstrap/css/bootstrap.css']
})
export class FunctionsComponent implements OnInit {

  title= 'Panel Sterowania';


  fprofil(x) {
  if (x==1) document.getElementById('profile_container').style.display = 'block';
  else if (x==0) document.getElementById('profile_container').style.display = 'none';
}

  public ngOnInit(): any {}
  constructor(private auth: Auth) {};

  public wybranaFunkcja;

  public wybierzFunkcje = (funkcja) => {
    if(this.wybranaFunkcja == funkcja) return;
    this.wybranaFunkcja = funkcja;
    return funkcja;
  }

}


