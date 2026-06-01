# KleberDev Portfolio

Un portafolio Full Stack desarrollado con **Java + Spring Boot** (backend) y **React + Vite** (frontend).

## 🚀 Características

- **Backend REST API** con Spring Boot 3.x
- **Frontend moderno** con React 18 y Tailwind CSS
- **Base de datos** PostgreSQL (con H2 para desarrollo)
- **Documentación API** con Swagger/OpenAPI
- **CORS habilitado** para desarrollo local
- **Responsive design** para todos los dispositivos

## 📋 Requisitos

- Java 17+
- Node.js 18+
- Maven 3.6+
- PostgreSQL (opcional, usa H2 en desarrollo)
- Git

## 🛠️ Instalación

### Backend

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

El backend estará disponible en `http://localhost:8080`
- API: `http://localhost:8080/api`
- Swagger UI: `http://localhost:8080/swagger-ui.html`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

El frontend estará disponible en `http://localhost:3000`

## 📁 Estructura del Proyecto

```
.
├── backend/                    # Spring Boot API REST
│   ├── src/main/java/
│   │   └── com/kleberdev/portfolio/
│   │       ├── entity/         # Entidades JPA
│   │       ├── repository/     # Repositorios Spring Data
│   │       ├── service/        # Lógica de negocio
│   │       ├── controller/     # Controladores REST
│   │       ├── dto/            # DTOs
│   │       └── PortfolioApplication.java
│   ├── src/main/resources/
│   │   └── application.properties
│   └── pom.xml
├── frontend/                   # React + Vite
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
├── Procfile                    # Heroku deployment
└── README.md
```

## 🔌 API Endpoints

### Projects

- `GET /api/projects` - Obtener todos los proyectos
- `GET /api/projects/{id}` - Obtener proyecto por ID
- `POST /api/projects` - Crear nuevo proyecto
- `PUT /api/projects/{id}` - Actualizar proyecto
- `DELETE /api/projects/{id}` - Eliminar proyecto

### Skills

- `GET /api/skills` - Obtener todas las habilidades
- `GET /api/skills/{id}` - Obtener habilidad por ID
- `POST /api/skills` - Crear nueva habilidad
- `PUT /api/skills/{id}` - Actualizar habilidad
- `DELETE /api/skills/{id}` - Eliminar habilidad

## 🌐 Variables de Entorno

### Backend (.env o Heroku Config Vars)

```
DATABASE_URL=jdbc:postgresql://host:5432/portfolio
DATABASE_USER=username
DATABASE_PASSWORD=password
DATABASE_DRIVER=org.postgresql.Driver
JPA_PLATFORM=org.hibernate.dialect.PostgreSQL10Dialect
PORT=8080
```

### Frontend (.env.local)

```
VITE_API_BASE_URL=http://localhost:8080/api
```

## 🚢 Despliegue en Heroku

### 1. Crear app en Heroku

```bash
heroku create tu-portfolio-app
```

### 2. Agregar base de datos PostgreSQL

```bash
heroku addons:create heroku-postgresql:hobby-dev -a tu-portfolio-app
```

### 3. Configurar variables de entorno

Las variables `DATABASE_URL`, `DATABASE_USER`, etc. se configuran automáticamente.

### 4. Build del backend

```bash
cd backend
mvn clean package -DskipTests
```

### 5. Deploy

```bash
git push heroku main
```

## 🧪 Testing

### Backend

```bash
cd backend
mvn test
```

### Frontend

```bash
cd frontend
npm test
```

## 📊 Mejoras Futuras

- [ ] Autenticación con JWT
- [ ] Sistema de contacto / formularios
- [ ] Carga de imágenes
- [ ] Análisis y métricas
- [ ] Tests end-to-end
- [ ] CI/CD con GitHub Actions
- [ ] Dockerización

## 👨‍💻 Autor

**KleberDev** - Desarrollador Full Stack

- GitHub: [github.com/kleber89](https://github.com/kleber89)
- Portfolio: [kleberdev.com](https://kleberdev.com)

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver `LICENSE` para más detalles.
