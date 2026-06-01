# 🚀 Quick Start - Portfolio KleberDev

Inicia tu portafolio en **5 minutos**.

## ⚡ Opción 1: Local (Desarrollo Rápido)

### Backend (Terminal 1)

```bash
cd backend
mvn spring-boot:run
```

✅ Backend corriendo en `http://localhost:8080`
📖 API Docs: `http://localhost:8080/swagger-ui.html`

### Frontend (Terminal 2)

```bash
cd frontend
npm install  # Solo primera vez
npm run dev
```

✅ Frontend corriendo en `http://localhost:3000`

---

## 🐳 Opción 2: Docker Compose (Recomendado para Producción)

```bash
docker-compose up --build
```

✅ **Acceso:**
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:8080`
- API Docs: `http://localhost:8080/swagger-ui.html`
- Base de datos: PostgreSQL en `localhost:5432`

---

## 📊 Agregar Datos de Prueba

### 1. Crear un Proyecto

```bash
curl -X POST http://localhost:8080/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Mi Primer Proyecto",
    "description": "Descripción del proyecto",
    "url": "https://ejemplo.com",
    "githubUrl": "https://github.com/usuario/proyecto",
    "technologies": "Java, Spring Boot, React"
  }'
```

### 2. Crear una Habilidad

```bash
curl -X POST http://localhost:8080/api/skills \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Java",
    "category": "Backend",
    "proficiencyLevel": 5
  }'
```

### 3. Obtener todos los proyectos

```bash
curl http://localhost:8080/api/projects
```

---

## 🚢 Desplegar en Heroku (5 minutos)

### 1. Crear app

```bash
heroku create tu-portfolio
```

### 2. Agregar PostgreSQL

```bash
heroku addons:create heroku-postgresql:hobby-dev
```

### 3. Deploy

```bash
git push heroku main
```

### 4. Ver en vivo

```bash
heroku open
```

📖 Más detalles en [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## 🏗️ Estructura del Código

```
backend/
├── src/main/java/com/kleberdev/portfolio/
│   ├── entity/        ← Modelos de base de datos
│   ├── repository/    ← Acceso a datos
│   ├── service/       ← Lógica de negocio
│   ├── controller/    ← APIs REST
│   └── dto/           ← Datos de transferencia
└── pom.xml           ← Dependencias Maven

frontend/
├── src/
│   ├── components/    ← Componentes React
│   ├── pages/         ← Páginas (Projects, Skills)
│   ├── services/      ← Llamadas a API
│   ├── App.jsx        ← Componente raíz
│   └── main.jsx       ← Entry point
├── vite.config.js    ← Configuración Vite
└── package.json      ← Dependencias NPM
```

---

## 🔌 Endpoints API

| Método | Endpoint | Descripción |
|--------|----------|------------|
| GET | `/api/projects` | Obtener todos los proyectos |
| POST | `/api/projects` | Crear nuevo proyecto |
| GET | `/api/projects/{id}` | Obtener proyecto por ID |
| PUT | `/api/projects/{id}` | Actualizar proyecto |
| DELETE | `/api/projects/{id}` | Eliminar proyecto |
| | | |
| GET | `/api/skills` | Obtener todas las habilidades |
| POST | `/api/skills` | Crear nueva habilidad |
| GET | `/api/skills/{id}` | Obtener habilidad por ID |
| PUT | `/api/skills/{id}` | Actualizar habilidad |
| DELETE | `/api/skills/{id}` | Eliminar habilidad |

---

## 📝 Personalizar

### Cambiar colores / tema

Editar `frontend/src/index.css` y `frontend/tailwind.config.js`

### Cambiar contenido

Editar `frontend/src/App.jsx` para cambiar títulos, textos y navegación.

### Agregar más páginas

1. Crear `frontend/src/pages/NuevaPage.jsx`
2. Importar en `App.jsx`
3. Agregar botón en navegación

---

## 🛠️ Comandos Útiles

```bash
# Build backend
cd backend && mvn clean package

# Build frontend
cd frontend && npm run build

# Linting frontend
cd frontend && npm run lint

# Ver logs en desarrollo
npm run dev  # Terminal 1
mvn spring-boot:run  # Terminal 2

# Detener servicios Docker
docker-compose down

# Ver logs Docker
docker-compose logs -f
```

---

## 🐛 Troubleshooting

| Problema | Solución |
|----------|----------|
| Puerto 3000 en uso | `lsof -i :3000` luego mata el proceso |
| Puerto 8080 en uso | `lsof -i :8080` luego mata el proceso |
| Error CORS | Verifica `PortfolioApplication.java` |
| BD no conecta | Verifica PostgreSQL está corriendo |
| Build fallido | `mvn clean install` luego `mvn package` |

---

## 📚 Documentación Completa

- [README.md](./README.md) - Descripción general
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Guía de despliegue
- [Swagger API](http://localhost:8080/swagger-ui.html) - Documentación interactiva

---

## ✨ Próximos Pasos

- [ ] Personalizar colores y estilos
- [ ] Agregar más contenido (About, Contact)
- [ ] Configurar dominio personalizado
- [ ] Habilitar GitHub Actions
- [ ] Agregar autenticación
- [ ] Implementar base de datos remota

**¡Listo! Tu portafolio está en funcionamiento.**

¿Necesitas ayuda? Ver [DEPLOYMENT.md](./DEPLOYMENT.md)
