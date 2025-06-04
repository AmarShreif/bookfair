import { Component, inject } from '@angular/core';
import { BooksServiceService } from '../../services/books-service.service';
import { Ibook } from '../../interfaces/ibooks';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-allbook',
  imports: [FormsModule,RouterLink],
  templateUrl: './allbook.component.html',
  styleUrl: './allbook.component.css'
})
export class AllbookComponent {
private readonly booksServiceService = inject(BooksServiceService)

  bookList: Ibook[] = []
  pageNumber:number=1
  search:string=''
  counter: number = 1;

  


  ngOnInit(): void {
   this.getAllPage(this.pageNumber)
   this.getBookBySearch(this.search)
  }

  getBookBySearch(search:string):void{
    this.booksServiceService.getBookBySearch(this.search).subscribe({
      next:(res)=>{
        console.log(res);
    this.bookList =res.results
      },error:(err)=>{
        console.log(err);
        
      }
    })
  }

  getAllPage(pegeNumber:any):void{
     this.booksServiceService.getAllPages(this.pageNumber).subscribe({
      next:(res)=>{
        console.log(res.results); 
        this.bookList = res.results
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
