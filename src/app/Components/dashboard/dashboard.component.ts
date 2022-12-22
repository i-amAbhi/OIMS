import { Component } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  TotalAssets = 7;
  AvailableAssets = 8;
  AssignedAssets = 4; 
  OutOfStock = 5;
}
