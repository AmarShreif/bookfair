import { Component, inject, OnInit } from '@angular/core';
import { BooksServiceService } from '../../services/books-service.service';
import { Ititle } from '../../interfaces/ititle';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-authors',
  imports: [FormsModule,RouterLink],
templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent implements OnInit {
  private readonly booksServiceService=inject(BooksServiceService)
  titleSearch:string=''
  pageTitle:Ititle[]=[]
  pageNumber:number=1
  counter: number = 1;


  ngOnInit(): void {
  this.getPageTitle(this.titleSearch)
  }
  
  getPageTitle(search:string):void{
        this.booksServiceService.getBookBySearch(this.titleSearch).subscribe({
      next:(res)=>{
        console.log(res.results);        
        this.pageTitle=res.results
      },error:(err)=>{
        console.log(err);
        
      }
    })
  }
    getAllPage(pegeNumber:any):void{
     this.booksServiceService.getAllPages(this.pageNumber).subscribe({
      next:(res)=>{
        console.log(res.results); 
        this.pageTitle = res.results
      },error:(err)=>{
        console.log(err);
      }
     })
  }



  nextPage():void{
    this.pageNumber++
    this.getAllPage(this.pageNumber)
  }

  pervPage():void{
    if(this.pageNumber > 1){
      this.pageNumber--
      this.getAllPage(this.pageNumber)
    }
  }
  increment() {
  this.counter++;
}

decrement() {
  if (this.counter > 1) {
    this.counter--;
  }
}

}
