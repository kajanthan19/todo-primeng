import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { OrderListModule } from 'primeng/orderlist';
import { TagModule } from 'primeng/tag';
import { MenuModule } from 'primeng/menu';
import { SidebarModule } from 'primeng/sidebar';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule ,
    OrderListModule,
    MenuModule,
    SidebarModule,
    TooltipModule
  ],
  exports:[
    ButtonModule, 
    OrderListModule, 
    TagModule,
    MenuModule,
    SidebarModule,
    TooltipModule
  ]
})
export class SharedModule { }
