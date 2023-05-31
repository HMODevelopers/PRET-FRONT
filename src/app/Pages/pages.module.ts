import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ComponentsModule } from '../shared/components/components.module';
import { PageRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    UsuariosComponent
  ],
  imports: [CommonModule, PageRoutingModule, ComponentsModule]
})
export class PagesModule {}
