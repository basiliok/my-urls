import { Component } from '@angular/core';
import { PageCardComponent } from '../../components/page-card/page-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PageCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
