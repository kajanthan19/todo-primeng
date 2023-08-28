import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  status: boolean = false;
  menuItems: MenuItem[] | undefined;

  ngOnInit(){
    this.menuItems =[
      {
          label: 'Dashboard',
          items: [
              {
                  label: 'Sales',
                  icon: 'pi pi-desktop',
                  command: () => {
                    
                }
              },
          ]
      },
      {
          label: 'Apps',
          items: [
              {
                  label: 'Todo',
                  icon: 'pi pi-check-circle',
                  url: 'todo'
              },
          ]
      },
      {
        label: 'Pages',
        items: [
            {
                label: 'Login',
                icon: 'pi pi-sign-in',
                url: 'http://angular.io'
            },
            {
              label: 'Error',
              icon: 'pi pi-times-circle',
              url: 'http://angular.io'
          },
        ]
    },
    {
      label: 'Help',
      items: [
          {
              label: 'Documentation',
              icon: 'pi pi-info-circle',
              url: 'http://angular.io'
          },
      ]
  }
  ];
  }

  onHomePage(): void {

  }
}
