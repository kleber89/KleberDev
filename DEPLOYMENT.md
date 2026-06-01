# Guía de Despliegue - Portfolio KleberDev

## 📌 Índice

1. [Despliegue en Heroku](#despliegue-en-heroku)
2. [Despliegue con Docker](#despliegue-con-docker)
3. [Variables de Entorno](#variables-de-entorno)
4. [Troubleshooting](#troubleshooting)

---

## Despliegue en Heroku

### Prerrequisitos

- Cuenta en [Heroku.com](https://www.heroku.com)
- Heroku CLI instalado: `brew tap heroku/brew && brew install heroku`
- Git instalado
- Java 17+ y Maven 3.6+ instalados localmente

### Pasos

#### 1. Autenticarse en Heroku

```bash
heroku login
```

#### 2. Crear nueva app en Heroku

```bash
heroku create tu-portfolio-app
```

#### 3. Agregar PostgreSQL

```bash
heroku addons:create heroku-postgresql:hobby-dev -a tu-portfolio-app
```

Se generará automáticamente la variable `DATABASE_URL`.

#### 4. Configurar variables de entorno

```bash
heroku config:set DATABASE_USER=tu_usuario -a tu-portfolio-app
heroku config:set DATABASE_PASSWORD=tu_password -a tu-portfolio-app
heroku config:set JPA_PLATFORM=org.hibernate.dialect.PostgreSQL10Dialect -a tu-portfolio-app
```

#### 5. Build local del backend

```bash
cd backend
mvn clean package -DskipTests
cd ..
```

Esto crea `backend/target/portfolio-backend-1.0.0.jar`

#### 6. Deployar a Heroku

```bash
git add .
git commit -m "Initial deployment to Heroku"
git push heroku main
```

Si estás en una rama diferente:

```bash
git push heroku tu-rama:main
```

#### 7. Ver logs

```bash
heroku logs --tail -a tu-portfolio-app
```

#### 8. Verificar que está running

```bash
heroku ps -a tu-portfolio-app
```

---

## Despliegue con Docker

### Local con Docker Compose

#### Prerrequisitos

- Docker instalado
- Docker Compose instalado

#### Pasos

```bash
# Construir e iniciar los servicios
docker-compose up --build

# En otra terminal, ver logs
docker-compose logs -f

# Detener
docker-compose down
```

**URLs:**
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:8080`
- Swagger API: `http://localhost:8080/swagger-ui.html`
- PostgreSQL: `localhost:5432`

### Construir imágenes Docker individuales

#### Backend

```bash
cd backend
docker build -t portfolio-backend:1.0 .
docker run -p 8080:8080 \
  -e DATABASE_URL=jdbc:h2:mem:portfoliodb \
  portfolio-backend:1.0
```

#### Frontend

```bash
cd frontend
docker build -t portfolio-frontend:1.0 .
docker run -p 3000:3000 \
  -e VITE_API_BASE_URL=http://localhost:8080/api \
  portfolio-frontend:1.0
```

---

## Variables de Entorno

### Backend

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `DATABASE_URL` | JDBC URL para PostgreSQL | `jdbc:postgresql://host:5432/portfolio` |
| `DATABASE_USER` | Usuario de base de datos | `portfolio_user` |
| `DATABASE_PASSWORD` | Contraseña de base de datos | `secure_password` |
| `DATABASE_DRIVER` | Driver JDBC | `org.postgresql.Driver` |
| `JPA_PLATFORM` | Dialecto Hibernate | `org.hibernate.dialect.PostgreSQL10Dialect` |
| `PORT` | Puerto del servidor | `8080` |
| `SPRING_PROFILES_ACTIVE` | Perfil de Spring | `prod` |

### Frontend

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | URL base de la API | `https://tu-app-heroku.herokuapp.com/api` |

---

## Troubleshooting

### 1. Error: "No main manifest attribute in jar"

**Solución:**

```bash
cd backend
mvn clean package -DskipTests
```

Asegúrate de que el pom.xml tiene configurado correctamente el `spring-boot-maven-plugin`.

### 2. Error: "Connection refused" entre frontend y backend

**Verificar:**

- Backend está corriendo en el puerto correcto
- Variable `VITE_API_BASE_URL` tiene la URL correcta
- CORS está habilitado en backend

### 3. PostgreSQL connection error en Heroku

**Verificar:**

```bash
heroku config -a tu-portfolio-app
```

Confirma que `DATABASE_URL` está presente.

### 4. Heroku: "Slug too large"

**Solución:**

Agregá `.gitignore` adecuadamente:

```bash
# Backend
backend/target/
backend/node_modules/

# Frontend
frontend/node_modules/
frontend/dist/
```

Luego:

```bash
git rm -r --cached .
git add .
git commit -m "Fix gitignore"
git push heroku main
```

### 5. Frontend en blanco en producción

**Verificar:**

- El build fue exitoso: `npm run build`
- Revisa la consola del navegador (F12) para errors
- URL de la API es correcta en `VITE_API_BASE_URL`

---

## Comandos Útiles

### Heroku

```bash
# Ver logs
heroku logs --tail

# Ver variables de entorno
heroku config

# Ejecutar comando en dyno
heroku run "cd backend && mvn migrate"

# Destruir app
heroku apps:destroy --app tu-portfolio-app --confirm tu-portfolio-app
```

### Docker

```bash
# Listar imágenes
docker images

# Listar contenedores
docker ps -a

# Ver logs
docker logs -f nombre-contenedor

# Entrar a contenedor
docker exec -it nombre-contenedor bash
```

---

## Monitoreo

### En Heroku

```bash
# Ver estado
heroku apps:info -a tu-portfolio-app

# Ver procesos
heroku ps -a tu-portfolio-app

# Ver logs filtrados
heroku logs --source app --tail
```

### En Local (Docker)

```bash
# Estadísticas
docker stats

# Conectar a PostgreSQL
docker exec -it portfolio-db psql -U portfolio_user -d portfoliodb
```

---

## Próximos pasos

✅ Despliegue completado
- [ ] Configurar dominio personalizado en Heroku
- [ ] Agregar SSL/TLS (automático en Heroku)
- [ ] Habilitar backups de base de datos
- [ ] Configurar alertas y monitoreo
- [ ] Implementar CI/CD con GitHub Actions
