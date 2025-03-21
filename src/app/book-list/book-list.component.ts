import { Component } from '@angular/core';
import { Book } from '../book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

   books: Book[] = [
    { id: 1, author: 'Author1', title: 'Book1' },
    { id: 2, author: 'Author2', title: 'Book2' },
    { id: 3, author: 'Author3', title: 'Book3' },
    { id: 4, author: 'Author4', title: 'Book4' },
    { id: 5, author: 'Author5', title: 'Book5' }
  ]

}
