import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BooksServiceService } from '../../services/books-service.service';
import { Ibook } from '../../interfaces/ibooks';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-authors-book',
  imports: [CarouselModule,FormsModule,RouterLink],
templateUrl: './authors-book.component.html',
  styleUrl: './authors-book.component.css'
})
export class AuthorsBookComponent implements OnInit {

  private readonly activatedRoute =inject (ActivatedRoute)
  private readonly booksServiceService =inject (BooksServiceService)
  
  bookList: Ibook[] = []
    pageNumber:number=1
  search:string=''
  counter: number = 1;



  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next:(p)=>{
        let idTitle = p.get('id');
    this.booksServiceService.getAllPages(idTitle).subscribe({
      next:(res)=>{
        console.log(res.results);
        this.bookList = res.results
      },error:(err)=>{
        console.log(err);
        
      }
    })
        
      }
    })
       this.getAllPage(this.pageNumber)

  }
    customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay:true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
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

