# 🎯 KleberDev Portfolio - Guía Completa

¡Bienvenido a tu portafolio Full Stack! Esta es tu brújula para navegar por el proyecto.

---

## 📚 Documentación

### 🚀 **¿Por dónde empiezo?**

1. **[QUICKSTART.md](./QUICKSTART.md)** ⚡ (5 minutos)
   - Inicio rápido en desarrollo local
   - Comandos para ver el portafolio funcionando
   - Primeros pasos con datos de prueba
   
   **Ideal para:** Ver el proyecto corriendo YA

### 📖 **Documentación General**

2. **[README.md](./README.md)** 📋
   - Descripción completa del proyecto
   - Requisitos y arquitectura
   - API endpoints documentados
   - Despliegue básico en Heroku
   
   **Ideal para:** Entender qué es el proyecto

3. **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)** 🏗️
   - Árbol de archivos del proyecto
   - Flujo de datos (Backend → Frontend)
   - Stack de tecnologías usado
   - Arquitectura de despliegue
   
   **Ideal para:** Navegar el código fuente

### 💼 **Guías Específicas**

4. **[DEPLOYMENT.md](./DEPLOYMENT.md)** 🚢
   - Despliegue a Heroku paso a paso
   - Docker compose para producción
   - Variables de entorno
   - Troubleshooting detallado
   - Comandos útiles
   
   **Ideal para:** Llevar a producción

5. **[CODE_IMPROVEMENTS.md](./CODE_IMPROVEMENTS.md)** 💡
   - Mejoras ya implementadas en el código
   - Mejoras recomendadas (prioridad alta/media/baja)
   - Patrones y best practices
   - Testing
   - Performance
   - Seguridad
   
   **Ideal para:** Mejorar la calidad del código

---

## 🗺️ Mapa del Proyecto

```
┌─────────────────────────────────────────────────────┐
│         Tu Portafolio KleberDev                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Backend (Java + Spring Boot)                       │
│  ├─ REST API en /api/projects y /api/skills        │
│  ├─ Base de datos PostgreSQL (o H2)                │
│  ├─ Documentación Swagger en /swagger-ui.html      │
│  └─ Ejecutar: mvn spring-boot:run                  │
│                                                     │
│  Frontend (React + Tailwind)                        │
│  ├─ Interfaz en http://localhost:3000              │
│  ├─ Componentes modulares                          │
│  ├─ Conecta con Backend via Axios                  │
│  └─ Ejecutar: npm run dev                          │
│                                                     │
│  Despliegue                                         │
│  ├─ Local: docker-compose up                       │
│  ├─ Producción: Heroku (siguiendo DEPLOYMENT.md)   │
│  └─ CI/CD: GitHub Actions configured               │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## ⏱️ Línea de Tiempo Sugerida

### Día 1 (30 minutos)

```
15 min: Leer QUICKSTART.md
10 min: Ejecutar backend (mvn spring-boot:run)
5 min:  Ejecutar frontend (npm run dev)
→ ¡Tu portafolio está corriendo localmente!
```

### Día 2 (1 hora)

```
20 min: Leer README.md y PROJECT_STRUCTURE.md
20 min: Explorar el código (backend/ y frontend/)
10 min: Agregar proyectos/skills via Swagger UI
10 min: Personalizar App.jsx (colores, textos)
→ ¡Tu portafolio está personalizado!
```

### Día 3 (1 hora)

```
30 min: Leer DEPLOYMENT.md
15 min: Crear cuenta en Heroku
15 min: Deployar a Heroku (git push heroku main)
→ ¡Tu portafolio está en producción!
```

### Día 4+ (Mejoras Continuas)

```
Leer CODE_IMPROVEMENTS.md
Implementar validación de input
Agregar tests unitarios
Mejorar manejo de errores
Agregar autenticación (futuro)
→ ¡Tu portafolio es enterprise-grade!
```

---

## 🎓 Estructura de Aprendizaje

### Principiante (Semana 1)

1. ✅ Ejecutar en local
2. ✅ Entender la arquitectura
3. ✅ Personalizar contenido
4. ✅ Deployar a Heroku

**Recursos:**
- QUICKSTART.md
- README.md
- DEPLOYMENT.md

### Intermedio (Semana 2-3)

1. ✅ Mejorar código backend
2. ✅ Agregar validación
3. ✅ Implementar tests
4. ✅ Mejorar frontend

**Recursos:**
- CODE_IMPROVEMENTS.md
- PROJECT_STRUCTURE.md

### Avanzado (Mes 2)

1. ✅ Agregar autenticación
2. ✅ Implementar búsqueda
3. ✅ Configurar CI/CD
4. ✅ Monitoreo y alertas

**Recursos:**
- CODE_IMPROVEMENTS.md (sección Prioridad Alta)

---

## 🔍 Cómo Navegar el Código

### Backend

```
backend/
├── entity/          ← Modelos de datos (JPA)
├── repository/      ← Acceso a BD
├── service/         ← Lógica de negocio (AQUÍ VA LA MAYORÍA)
├── controller/      ← Endpoints REST
└── dto/             ← Estructuras de transferencia
```

**Flujo típico de una petición:**
```
GET /api/projects
  → ProjectController.getAllProjects()
    → ProjectService.getAllProjects()
      → ProjectRepository.findAll()
        → SELECT * FROM projects (BD)
          → List<Project> → List<ProjectDTO> (conversión)
            → JSON response
```

### Frontend

```
frontend/
├── pages/           ← Páginas completas (Projects, Skills)
├── components/      ← Componentes reutilizables (AQUÍ AGREGAR MÁS)
├── services/        ← Llamadas a API
├── App.jsx          ← Componente principal/router
└── index.css        ← Estilos globales
```

**Flujo típico de un componente:**
```
App.jsx (botón "Proyectos")
  → setCurrentPage('projects')
    → <Projects /> se renderiza
      → useEffect() llamada
        → projectService.getAllProjects()
          → Axios GET /api/projects
            → setState() con resultados
              → Re-render componente
                → Map y mostrar tarjetas
```

---

## ⚡ Comandos Rápidos

### Desarrollo Local

```bash
# Terminal 1: Backend
cd backend
mvn spring-boot:run
# Acceso en http://localhost:8080

# Terminal 2: Frontend
cd frontend
npm run dev
# Acceso en http://localhost:3000
```

### Docker

```bash
# Todo en un comando
docker-compose up --build

# Bajar servicios
docker-compose down
```

### Despliegue

```bash
# Crear app en Heroku
heroku create tu-portfolio

# Agregar DB PostgreSQL
heroku addons:create heroku-postgresql:hobby-dev

# Deploy
git push heroku main

# Ver en vivo
heroku open
```

### Git

```bash
# Ver cambios
git status
git diff

# Commit
git add .
git commit -m "Descripción del cambio"

# Ver historial
git log --oneline

# Push
git push origin main
```

---

## 🆘 Ayuda Rápida

### ❌ "El backend no inicia"

```bash
cd backend
mvn clean install    # Limpia y reinstala dependencias
mvn spring-boot:run  # Intenta de nuevo
```

Ver logs: Check `application.properties`

**Más detalles:** Ver DEPLOYMENT.md → Troubleshooting

### ❌ "El frontend tiene error"

```bash
cd frontend
npm install          # Reinstala dependencias
npm run dev          # Intenta de nuevo
```

Revisa la consola del navegador (F12)

### ❌ "No conecta Frontend ↔ Backend"

1. Verifica backend está en `http://localhost:8080`
2. Verifica `VITE_API_BASE_URL` en `.env.local`
3. Verifica CORS en `PortfolioApplication.java`
4. Revisa la consola del navegador (F12)

**Más detalles:** Ver CODE_IMPROVEMENTS.md → Seguridad → CORS

### ❌ "No puedo deployar a Heroku"

1. Verifica `Procfile` está en root
2. Verifica Java 17 en `backend/system.properties`
3. Verifica PostgreSQL creada: `heroku addons -a tu-app`
4. Revisa logs: `heroku logs --tail -a tu-app`

**Más detalles:** Ver DEPLOYMENT.md → Troubleshooting

---

## 📊 Checklist de Progreso

### Setup Inicial
- [ ] Leí QUICKSTART.md
- [ ] Backend corriendo (`mvn spring-boot:run`)
- [ ] Frontend corriendo (`npm run dev`)
- [ ] Puedo acceder a http://localhost:3000

### Personalización
- [ ] Agregué proyectos vía Swagger
- [ ] Agregué habilidades vía Swagger
- [ ] Personalicé título y colores
- [ ] El portafolio se ve bien

### Despliegue
- [ ] Creé cuenta en Heroku
- [ ] Creé app en Heroku
- [ ] Agregué PostgreSQL
- [ ] Deployé a Heroku
- [ ] Acceso en vivo: https://tu-app.herokuapp.com

### Mejoras
- [ ] Agregué validación de input
- [ ] Implementé manejo de errores
- [ ] Escribí tests unitarios
- [ ] Agregué logging
- [ ] Mejoré el UI/UX

### Producción
- [ ] CORS restringido
- [ ] Variables de entorno segurizadas
- [ ] Documentación actualizada
- [ ] Monitoreo configurado
- [ ] Backups habilitados

---

## 🎯 Objetivos por Rol

### 👨‍💼 Project Manager / Dueño

**Lectura:**
- README.md - Qué es el proyecto
- PROJECT_STRUCTURE.md - Cómo está estructurado

**Acciones:**
- Ver portafolio en vivo
- Agregar/editar proyectos
- Compartir URL publica

### 👨‍💻 Frontend Developer

**Lectura:**
- QUICKSTART.md - Setup rápido
- CODE_IMPROVEMENTS.md - Best practices React
- PROJECT_STRUCTURE.md - Estructura frontend

**Acciones:**
- Mejorar diseño (Tailwind)
- Agregar componentes
- Implementar validación cliente
- Tests con Jest

### 🔧 Backend Developer

**Lectura:**
- QUICKSTART.md - Setup rápido
- CODE_IMPROVEMENTS.md - Best practices Java
- PROJECT_STRUCTURE.md - Arquitectura backend

**Acciones:**
- Agregar validación entrada
- Implementar autenticación
- Agregar búsqueda/filtrado
- Tests unitarios + integración

### 🚀 DevOps / SRE

**Lectura:**
- DEPLOYMENT.md - Guía completa
- PROJECT_STRUCTURE.md - Infraestructura
- docker-compose.yml - Configuración

**Acciones:**
- Deployar a Heroku
- Configurar CI/CD
- Monitoreo y alertas
- Escalabilidad

---

## 📚 Recursos Externos

### Tutoriales

- [Spring Boot Official](https://spring.io/guides/gs/spring-boot/)
- [React Official](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Heroku Deployment](https://devcenter.heroku.com/)

### Documentación

- [Java 17 Docs](https://docs.oracle.com/en/java/javase/17/)
- [Spring Data JPA](https://spring.io/projects/spring-data-jpa)
- [PostgreSQL](https://www.postgresql.org/docs/)
- [Axios Docs](https://axios-http.com/docs/intro)

### Comunidades

- Stack Overflow
- GitHub Discussions
- Reddit: r/java, r/reactjs, r/heroku

---

## 🤝 Contribuir / Mejorar

¿Quieres mejorar el proyecto?

1. Crea una rama: `git checkout -b feature/mi-mejora`
2. Haz cambios
3. Commit: `git commit -m "Agrego mi mejora"`
4. Push: `git push origin feature/mi-mejora`
5. Pull Request en GitHub

**Mejoras sugeridas:**
- [ ] Página de contacto
- [ ] Sistema de comentarios
- [ ] Upload de imágenes
- [ ] Búsqueda y filtrado
- [ ] Temas (dark/light mode)
- [ ] Internacionalización (i18n)
- [ ] Análiticas
- [ ] Autenticación admin

---

## 📞 Soporte

**¿Tienes preguntas?**

1. Revisa la sección de **Troubleshooting** en:
   - QUICKSTART.md
   - DEPLOYMENT.md
   - CODE_IMPROVEMENTS.md

2. Busca en los logs:
   ```bash
   # Backend
   tail -f backend/target/logs/*.log
   
   # Heroku
   heroku logs --tail -a tu-app
   ```

3. Revisa los issues en GitHub

4. Lee la documentación oficial de las tecnologías

---

## ✨ Resumen Rápido

| Aspecto | Cuándo | Dónde |
|--------|--------|-------|
| Ver portafolio corriendo | Ahora | QUICKSTART.md |
| Entender el proyecto | Dia 1 | README.md |
| Personalizarlo | Dia 2 | App.jsx + Frontend |
| Deployar a producción | Dia 3 | DEPLOYMENT.md |
| Mejorar código | Semana 2 | CODE_IMPROVEMENTS.md |
| Escalar/agregar features | Mes 2 | Code improvements + diseño |

---

**¡Tu portafolio está listo! 🎉**

**Próximo paso:** Lee [QUICKSTART.md](./QUICKSTART.md) y ejecuta:

```bash
# Terminal 1
cd backend && mvn spring-boot:run

# Terminal 2
cd frontend && npm run dev
```

Luego visita http://localhost:3000

**¡Éxito!** 🚀
