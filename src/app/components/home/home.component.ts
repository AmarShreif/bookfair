import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { BooksServiceService } from '../../services/books-service.service';
import { Ibook } from '../../interfaces/ibooks';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements OnInit {
  private readonly booksServiceService = inject(BooksServiceService)
  bookList: Ibook[] = []

  ngOnInit(): void {
    this.booksServiceService.getBooks().subscribe({
      next: (res) => {
        this.bookList = res.results;
      },
      error: (err) => {
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
