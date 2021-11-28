import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { ListadoComponent } from './pages/listado/listado.component';
import { MaterialModule } from '../material/material.module';
import { NgModule } from '@angular/core';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';

@NgModule({
  declarations: [
    AgregarComponent,
    HeroeComponent,
    HomeComponent,
    BuscarComponent,
    ListadoComponent,
    HeroeTarjetaComponent,
    ImagenPipe,
    ConfirmarComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    HeroesRoutingModule,
    FormsModule,
  ],
})
export class HeroesModule {}
