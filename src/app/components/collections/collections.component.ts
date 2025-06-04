import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BooksServiceService } from '../../services/books-service.service';
import { Ibook } from '../../interfaces/ibooks';
import { SwiperOptions } from 'swiper/types';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-collections',
  imports: [FormsModule,RouterLink],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class CollectionsComponent {
private readonly booksServiceService = inject(BooksServiceService)
  bookList: Ibook[] = []
  search:string=''

  
  ngOnInit(): void {
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
    breakpointsConfig: SwiperOptions['breakpoints'] = {
  640: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 1,
  },
  1024: {
    slidesPerView: 1,
  },
  };
}
