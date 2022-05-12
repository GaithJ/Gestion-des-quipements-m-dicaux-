import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../model/categorie';
import { equipement } from '../model/equipement';

const httpOptions = {
  headers: new HttpHeaders
    ({
      'Content-Type': 'application/json'
    })
}

@Injectable({
  providedIn: 'root'
})

export class EquipementService {

  equipements: equipement[] = [];
  equipement: any;
  categories: Categorie[] = []
  categorie: any

  nomCat: string | undefined

  url = 'http://localhost:3000/mylist'
  updateequipement: any;


  constructor(private http: HttpClient) { }

  getall(): Observable<equipement[]> {
    return this.http.get<equipement[]>(`${this.url}`)
  }
  addequipement(data: equipement): Observable<equipement[]> {
    // console.log(data);
    
    return this.http.post<equipement[]>(`${this.url}`, data, httpOptions)

    //   listeEquipement():equipement[]{
    //     return this.equipements;
    //   }
    //   ajouetrequipement (equipement: equipement){
    //     this.equipements.push(equipement);
    //  }
    //supprimerEquipement(element: equipement){
    // const index = this.equipements.indexOf(element,0)
    // if (index > -1) {
    //this.equipements.splice(index,1);
  }
}
  //  consulterEquipement(NInv:number): equipement{
  //   return this.equipement.find((element: { NInv: number; }) => element.NInv == NInv);
  //   //return this.equipement;
  //   }
  //   updateequipement(element:equipement)
  //   {
  //   // console.log(p);
  //   this.supprimerEquipement(element);
  //   this.ajouetrequipement(element);
  //   }
  //   listeCategories():Categorie[] {
  //     return this.categories;
  //     }

  //     consulterCategorie(id:number): Categorie{
  //       this.categorie = this.categories.find(cat => cat.idCat == id);
  //       return this.categorie;
  //       }







