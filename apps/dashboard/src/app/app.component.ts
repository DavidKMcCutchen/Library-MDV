import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'library-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'library';
  links = [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'library', icon: 'view_list', title: 'Library'}
  ]
}
