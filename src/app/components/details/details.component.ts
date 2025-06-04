import { Component, inject, OnInit } from '@angular/core';
import { BooksServiceService } from '../../services/books-service.service';
import { ActivatedRoute } from '@angular/router';
import { Idetails } from '../../interfaces/idetails';

@Component({
  selector: 'app-details',
  imports: [],
templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
[x: string]: any;
private readonly activatedRoute = inject(ActivatedRoute)
private readonly booksServiceService = inject(BooksServiceService)

detailsProducts:Idetails= {} as Idetails

ngOnInit(): void {
this.activatedRoute.paramMap.subscribe({
  next:(p)=>{
    let idDetails =p.get('id')

    this.booksServiceService.getDetailsBook(idDetails).subscribe({
      next:(res)=>{
        console.log(res.results[0]);
        
        this.detailsProducts =res.results[0]
        
      },error:(err)=>{
        console.log(err);
        
      }
       

    })
    
  },error:(err)=>{
    console.log(err);
    
  }
})
}
}
