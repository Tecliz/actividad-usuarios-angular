# Administración de Usuarios - TechSolutions

Aplicación Angular que implementa las operaciones **GET, POST, PUT y DELETE** consumiendo la API pública **DummyJSON**, como parte de la actividad grupal de la asignatura.

##  Descripción

TechSolutions necesita un módulo de administración de usuarios que permita:
- Consultar la lista de usuarios registrados.
- Registrar un nuevo usuario.
- Actualizar un usuario existente.
- Eliminar un usuario.

> **Nota importante:** DummyJSON simula las operaciones de creación, actualización y eliminación. Aunque la API responde con éxito, los cambios **no se almacenan permanentemente** en su base de datos.

##  Tecnologías utilizadas

- **Angular** (standalone components)
- **TypeScript**
- **HttpClient** (Angular) para el consumo de la API REST
- **Bootstrap** para el diseño visual (tablas y formularios)
- **DummyJSON API** como backend simulado

## Estructura del proyecto

```
src/app/
├── modelo/
│   └── user.ts                    # Interfaz que define la estructura de un Usuario
├── servicios/
│   └── users.service.ts           # Servicio con los 4 métodos HTTP (GET, POST, PUT, DELETE)
├── components/
│   └── usuarios/
│       ├── usuarios.component.ts   # Lógica del componente
│       └── usuarios.component.html # Tabla y formularios
├── app.component.ts
└── app.config.ts                  # Configuración de HttpClient
```

##  Endpoints utilizados

| Operación | Método HTTP | Endpoint | Descripción |
|---|---|---|---|
| Listar usuarios | `GET` | `https://dummyjson.com/users` | Obtiene todos los usuarios registrados |
| Registrar usuario | `POST` | `https://dummyjson.com/users/add` | Crea un nuevo usuario |
| Actualizar usuario | `PUT` | `https://dummyjson.com/users/{id}` | Actualiza los datos de un usuario existente |
| Eliminar usuario | `DELETE` | `https://dummyjson.com/users/{id}` | Elimina un usuario por su ID |

### Datos enviados y recibidos

**POST / PUT** — se envía un objeto con:
```json
{
  "firstName": "Ana",
  "lastName": "Perez",
  "age": 25,
  "email": "ana@email.com"
}
```

La API responde con el mismo objeto, agregando un `id` (en el caso de POST) o confirmando la actualización (en el caso de PUT).

**DELETE** — se envía el `id` del usuario en la URL, y la API responde con el objeto del usuario eliminado más una propiedad `isDeleted: true`.

##  Cómo ejecutar el proyecto

1. Clonar o descargar este repositorio.
2. Instalar las dependencias:
   ```bash
   npm install
   ```
3. Ejecutar el servidor de desarrollo:
   ```bash
   ng serve
   ```
4. Abrir el navegador en:
   ```
   http://localhost:4200
   ```

##  Funcionalidades implementadas

- [x] **GET** — Listado de usuarios en una tabla Bootstrap con ID, Nombre, Apellido, Edad y Correo electrónico.
- [x] **POST** — Formulario de registro con mensaje de confirmación y visualización de la respuesta de la API.
- [x] **PUT** — Selección de un usuario desde la tabla ("Editar") y actualización mediante formulario, con mensaje de confirmación.
- [x] **DELETE** — Eliminación de un usuario desde la tabla, con mensaje de confirmación.
- [x] Integración de las cuatro funcionalidades en una sola aplicación.

##  Autores

Actividad grupal - Implementación de CRUD (GET, POST, PUT, DELETE) con DummyJSON.
