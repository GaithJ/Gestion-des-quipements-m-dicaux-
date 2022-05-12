import { Component, OnInit } from '@angular/core';
import { equipement } from '../model/equipement';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipementService } from '../services/equipement.service';

@Component({
  selector: 'app-update-equipement',
  templateUrl: './update-equipement.component.html',
  styleUrls: ['./update-equipement.component.css']
})
export class UpdateEquipementComponent implements OnInit {
  currentEquipement = new equipement();


  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
              private equipementservice : EquipementService) { }

  ngOnInit(): void {
    //console.log(this.activatedRoute.snapshot.params['NIvn']);
    // this.currentEquipement = this.equipementservice.consulterEquipement(this.activatedRoute.snapshot.params['NIvn'])
    // console.log(this.currentEquipement)
    
     
    }
    
    updateequipement(){
      // return this.equipementservice.updateequipement(this.currentEquipement ).subscribe(res=>{this.equipements=res)
      // console.log(this.currentEquipement);
      // this.equipementservice.updateequipement(this.currentEquipement);
      // this.router.navigate(["equipements"])

    }

  





 
}

