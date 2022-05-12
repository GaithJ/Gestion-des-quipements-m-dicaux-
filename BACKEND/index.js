const express = require ('express');
const app = express();
const Connection = require('mysql/lib/Connection');
const db = require ('./db')
const cors =require('cors')

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.get('/mylist',(req, res)=>{
  let qr ='select * from mylist'
  db.query (qr,(err,result)=>{
   
   res.send(result)
  

    });
  });
  app.get('/mylist/:id',(req, res)=>{
    let NInv=req.params.id
    let qr =`select * from mylist where NInv= ${NInv} `
    db.query (qr,(err,result)=>{
     
     res.send(result)
    
      });
    });
  app.post('/mylist',(req, res)=>{
    console.log(req.body)
    let Famille=req.body.Famille
    let Nom=req.body.Nom
    let Marque=req.body.Marque
    let Modele=req.body.Modele
    let Nserie=req.body.Nserie
    let Fournisseur=req.body.Fournisseur
    let Mser=req.body.Mser
    let Modacq=req.body.Modacq
    let Origine=req.body.Origine
    let qr=`INSERT INTO mylist ( Famille, Nom, Marque, Modele, Nserie, Fournisseur, Mser, Modacq, Origine) 
    VALUES ('${Famille}','${Nom}','${Marque}','${Modele}','${Nserie}',
    '${Fournisseur}','${Mser}','${Modacq}','${Origine}')`
    db.query (qr,(err,result)=>{
   
      res.send(result)
    })
  });
  app.put ('/mylist',(req, res)=>{
    let NInv=req.body.NInv
   
    console.log(req.body)
    let Famille=req.body.Famille
    let Nom=req.body.Nom
    let Marque=req.body.Marque
    let Modele=req.body.Modele
    let Nserie=req.body.Nserie
    let Fournisseur=req.body.Fournisseur
    let Mser=req.body.Mser
    let Modacq=req.body.Modacq
    let Origine=req.body.Origine
    let qr=`UPDATE mylist SET  (Famille='${Famille}',Nom='${Nom}',Marque='${Marque}',Modele='${Modele}',Nserie='${Nserie}',Fournisseur='${Fournisseur}',Mser='${Mser}',Modacq='${Modacq}',Origine='${Origine }) 
    where NInv= ${NInv}`
    db.query (qr,(err,result)=>{
   
      res.send(result)
    })
  });


port=3000
app.listen(port,()=>{
    console.log(`the server is runnig on port ${port}` )
})
