import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dropdown-tasks',
  templateUrl: './dropdown-tasks.component.html',
  styleUrls: ['./dropdown-tasks.component.css'],
})
export class DropdownTasksComponent {
  dropdownItems: any[] = [];
  selectedItem: any;
  movies: any[] = [];
  lastMovieId: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadSeriesData();
  }

  loadSeriesData() {
    this.http.get<any[]>('../../assets/series-data.json').subscribe((data) => {
      this.dropdownItems = data;
      this.selectedItem = this.dropdownItems[0];
    });
  }

  loadMoviesData() {
    this.http.get<any[]>('../../assets/movies-data.json').subscribe((data) => {
      this.dropdownItems = data;
      this.selectedItem = this.dropdownItems[0];
    });
  }

  updateMoviesData() {
    this.http.put<any[]>('../../assets/movies-data.json', this.movies).subscribe((response) => {
      console.log('Movies data updated successfully');
    }, (error) => {
      console.error('Failed to update movies data:', error);
    });
  }

  onSearch(term: string) {
    if (term.trim() !== '') {
      this.http
        .get<any[]>(`../../assets/movies-data.json`)
        .subscribe((data) => {
          const filteredMovies = data.filter((movie) =>
            movie.title.toLowerCase().includes(term.toLowerCase())
          );
          // if (filteredMovies.length > 0) {
          //   this.dropdownItems = filteredMovies;
          //   this.selectedItem = this.dropdownItems[0];
          // } else {
          //   this.dropdownItems = [{ id: -1, title: 'Not Found' }];
          //   this.selectedItem = this.dropdownItems[0];
          // }
          if (filteredMovies.length > 0) {
            this.dropdownItems = filteredMovies;
            this.selectedItem = this.dropdownItems[0];
          } else {
            const searchedMovie = { id: +4, title: term };
            this.dropdownItems = [searchedMovie];
            this.selectedItem = searchedMovie;
            this.movies.push(searchedMovie);
          }
        });
    } else {
      this.loadSeriesData();
    }
  }
}
