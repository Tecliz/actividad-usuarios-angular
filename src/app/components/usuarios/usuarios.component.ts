import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../servicios/users.service';
import { User } from '../../modelo/user';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {

  usuarios: any[] = [];
  mensaje: string = '';

  nuevoUsuario: User = { firstName: '', lastName: '', age: 0, email: '' };
  usuarioEditar: User = { firstName: '', lastName: '', age: 0, email: '' };
  idEditar: number | null = null;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  // GET
  cargarUsuarios(): void {
    this.usersService.getUsers().subscribe({
      next: (data) => this.usuarios = data.users,
      error: (err) => console.error('Error al listar usuarios', err)
    });
  }

  // POST
  registrarUsuario(): void {
    this.usersService.addUser(this.nuevoUsuario).subscribe({
      next: (data) => {
        this.mensaje = `Usuario registrado con éxito. ID: ${data.id}`;
        console.log('Respuesta POST:', data);
        this.nuevoUsuario = { firstName: '', lastName: '', age: 0, email: '' };
      },
      error: (err) => console.error('Error al registrar usuario', err)
    });
  }

  seleccionarParaEditar(user: any): void {
    this.idEditar = user.id;
    this.usuarioEditar = {
      firstName: user.firstName,
      lastName: user.lastName,
      age: user.age,
      email: user.email
    };
  }

  // PUT
  actualizarUsuario(): void {
    if (this.idEditar === null) return;
    this.usersService.updateUser(this.idEditar, this.usuarioEditar).subscribe({
      next: (data) => {
        this.mensaje = `Usuario con ID ${data.id} actualizado correctamente.`;
        console.log('Respuesta PUT:', data);
        this.idEditar = null;
      },
      error: (err) => console.error('Error al actualizar usuario', err)
    });
  }

  // DELETE
  eliminarUsuario(id: number): void {
    this.usersService.deleteUser(id).subscribe({
      next: (data) => {
        this.mensaje = `Usuario con ID ${id} eliminado correctamente.`;
        console.log('Respuesta DELETE:', data);
        this.usuarios = this.usuarios.filter(u => u.id !== id);
      },
      error: (err) => console.error('Error al eliminar usuario', err)
    });
  }
}