import { Component, inject, OnInit } from '@angular/core';
import { BooksServiceService } from '../../services/books-service.service';
import { Ititle } from '../../interfaces/ititle';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';



@Component({
  selector: 'app-authors',
  imports: [FormsModule,RouterLink,NgxPaginationModule],
templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent implements OnInit {
  private readonly booksServiceService=inject(BooksServiceService)
  titleSearch:string=''
  pageTitle:Ititle[]=[]
  pageNumber:number=1
  counter: number = 1;
  // items: { id: number; name: string }[] = [];        // البيانات الكاملة
  // paginatedItems: { id: number; name: string }[] = []; // البيانات المقسّمة بالصفحات
  //  // العناصر الظاهرة في الصفحة الحالية
  // currentPage = 1;
  // itemsPerPage = 5;



  // setPage(page: number) {
  //   this.currentPage = page;
  //   const start = (page - 1) * this.itemsPerPage;
  //   const end = start + this.itemsPerPage;
  //   this.paginatedItems = this.items.slice(start, end);
  // }


  ngOnInit(): void {
  this.getPageTitle(this.titleSearch)
    //   this.setPage(this.currentPage);
    //      this.items = [
    //   { id: 1, name: 'Author 1' },
    //   { id: 2, name: 'Author 2' },
    //   { id: 3, name: 'Author 3' },
    //   { id: 4, name: 'Author 4' },
    //   { id: 5, name: 'Author 5' },
    //   { id: 6, name: 'Author 6' },
    // ];

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
