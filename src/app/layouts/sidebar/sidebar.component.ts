import { NgClass } from '@angular/common';
import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from '../../app.routes';


@Component({
  selector: 'app-sidebar',
  imports: [NgClass, RouterLinkActive, RouterLink],
  templateUrl: './sidebar.component.html',
  styles: [`

.custom-scrollbar::-webkit-scrollbar {
  width: 3px; /* Hace la barra más delgada */
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.4);
}

@media (max-width: 768px) {
  .custom-scrollbar::-webkit-scrollbar {
    display: none;
  }
}
 `]
})
export class SidebarComponent {
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (this.isMobile && this.showToggle) {
      if (!this.elRef.nativeElement.contains(event.target)) {
        this.showToggle = false;

      }
    }
  }

  @Input({ required: true }) showToggle = true;
  @Input({ required: true }) isMobile = true;


  constructor(private elRef: ElementRef) {}


  academicRoute = routes.find((route: any) => route.path === 'sistemaAcademico');
  menuRoutes = this.academicRoute?.children?.filter(route => {
    return (
      route?.data &&
      route?.data['title'] &&
      route?.data['icon']
    )
  });







  // menuSections: MenuSection[] = [
  //   {
  //     title: 'Dashboards',
  //     items: [
  //       { name: 'Analytics', icon: 'solar:hand-money-outline', active: true },
  //       { name: 'eCommerce', icon: 'solar:cart-line-duotone' },
  //     ]
  //   },
  //   {
  //     title: 'Apps',
  //     isSubsection: true,
  //     items: [
  //       { name: 'Chat', icon: 'solar:chat-round-line-outline' },
  //       { name: 'Calendar', icon: 'solar:calendar-line-duotone' },
  //       { name: 'Email', icon: 'solar:explicit-outline' },
  //       { name: 'Contacts', icon: 'solar:call-chat-outline' },
  //       { name: 'Contacts List', icon: 'solar:user-plus-outline', badge: 'New' },
  //       { name: 'Notes', icon: 'solar:document-add-outline' },
  //       { name: 'Tickets', icon: 'solar:ticket-line-duotone' },
  //       { name: 'Invoice', icon: 'solar:file-text-line-duotone' },
  //       { name: 'ToDo', icon: 'solar:settings-outline' }
  //     ]
  //   }
  // ];



}

