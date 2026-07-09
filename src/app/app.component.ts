import { Component } from '@angular/core';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UsuariosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'actividad-usuarios';
}
