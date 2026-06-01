# 📊 Estructura del Proyecto - Vista General

## Árbol de Archivos

```
portfolio-kleber/
├── .github/
│   └── workflows/
│       └── ci-cd.yml                    # GitHub Actions CI/CD
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/kleberdev/portfolio/
│   │   │   │   ├── PortfolioApplication.java    # Spring Boot main + CORS config
│   │   │   │   ├── entity/
│   │   │   │   │   ├── Project.java             # JPA Entity
│   │   │   │   │   └── Skill.java               # JPA Entity
│   │   │   │   ├── repository/
│   │   │   │   │   ├── ProjectRepository.java   # Spring Data JPA
│   │   │   │   │   └── SkillRepository.java     # Spring Data JPA
│   │   │   │   ├── service/
│   │   │   │   │   ├── ProjectService.java      # Business Logic
│   │   │   │   │   └── SkillService.java        # Business Logic
│   │   │   │   ├── controller/
│   │   │   │   │   ├── ProjectController.java   # REST API
│   │   │   │   │   └── SkillController.java     # REST API
│   │   │   │   ├── dto/
│   │   │   │   │   ├── ProjectDTO.java
│   │   │   │   │   └── SkillDTO.java
│   │   │   │   └── exception/                   # (Para expandir)
│   │   │   └── resources/
│   │   │       └── application.properties       # Spring Boot config
│   │   └── test/
│   │       └── java/com/kleberdev/portfolio/    # Tests unitarios
│   ├── Dockerfile                               # Docker image
│   ├── pom.xml                                  # Maven dependencies
│   └── system.properties                        # Heroku Java version
├── frontend/
│   ├── public/                                  # Static assets
│   ├── src/
│   │   ├── components/                          # React components
│   │   ├── pages/
│   │   │   ├── Projects.jsx                     # Projects page
│   │   │   └── Skills.jsx                       # Skills page
│   │   ├── services/
│   │   │   └── api.js                           # Axios API client
│   │   ├── App.jsx                              # Main React component
│   │   ├── main.jsx                             # Entry point
│   │   └── index.css                            # Global styles
│   ├── .env.example                             # Environment template
│   ├── .eslintrc.json                           # ESLint config
│   ├── .prettierrc                              # Prettier config
│   ├── Dockerfile                               # Docker image
│   ├── index.html                               # HTML template
│   ├── package.json                             # NPM dependencies
│   ├── postcss.config.js                        # PostCSS config
│   ├── tailwind.config.js                       # Tailwind config
│   └── vite.config.js                           # Vite config
├── .gitignore                                   # Git ignore rules
├── DEPLOYMENT.md                                # Deployment guide (Heroku)
├── README.md                                    # Main documentation
├── QUICKSTART.md                                # Quick start guide
├── CODE_IMPROVEMENTS.md                         # Code best practices
├── PROJECT_STRUCTURE.md                         # This file
├── docker-compose.yml                           # Docker Compose
├── Procfile                                     # Heroku Procfile
└── setup.sh                                     # Setup script
```

---

## 🔄 Data Flow

### Backend - Request/Response

```
┌─────────────────────────────────────────────────┐
│           Frontend (React + Axios)              │
└────────────────────┬────────────────────────────┘
                     │ GET /api/projects
                     ▼
┌─────────────────────────────────────────────────┐
│   ProjectController (@RestController)           │
│   - @GetMapping("/api/projects")                │
│   - Returns List<ProjectDTO>                    │
└────────────────────┬────────────────────────────┘
                     │ Calls
                     ▼
┌─────────────────────────────────────────────────┐
│   ProjectService (@Service)                     │
│   - getAllProjects()                            │
│   - Maps Project → ProjectDTO                   │
└────────────────────┬────────────────────────────┘
                     │ Calls
                     ▼
┌─────────────────────────────────────────────────┐
│   ProjectRepository (Spring Data JPA)           │
│   - findAll()                                   │
│   - Auto-generates SQL                          │
└────────────────────┬────────────────────────────┘
                     │ JPA Query
                     ▼
┌─────────────────────────────────────────────────┐
│   Database (PostgreSQL / H2)                    │
│   - SELECT * FROM projects                      │
└─────────────────────────────────────────────────┘
                     │
                     │ Result Set
                     ▼
┌─────────────────────────────────────────────────┐
│   List<Project> (JPA Entities)                  │
└─────────────────────────────────────────────────┘
                     │
                     │ Convert to DTO
                     ▼
┌─────────────────────────────────────────────────┐
│   List<ProjectDTO> (JSON Response)              │
│   [{id, title, description, ...}]               │
└─────────────────────────────────────────────────┘
                     │
                     │ HTTP 200 OK
                     ▼
┌─────────────────────────────────────────────────┐
│           Frontend (React)                      │
│   - Receives JSON                               │
│   - Updates state                               │
│   - Re-renders component                        │
└─────────────────────────────────────────────────┘
```

---

## 📦 Technology Stack

### Backend

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Framework | Spring Boot 3.2 | Web framework |
| Data Access | Spring Data JPA | Database ORM |
| Database | PostgreSQL 15 | Production DB |
| | H2 Database | Development DB |
| Build | Maven 3.8 | Dependency management |
| Documentation | Springdoc OpenAPI | Swagger/API docs |
| Serialization | Jackson | JSON mapping |
| Utilities | Lombok | Boilerplate reduction |
| Runtime | Java 17 | Language/Runtime |

### Frontend

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Framework | React 18.2 | UI library |
| Bundler | Vite 5.0 | Fast build tool |
| Styling | Tailwind CSS 3.3 | Utility CSS |
| HTTP Client | Axios | API calls |
| Dev Server | Vite Dev Server | Hot reload |
| Node | 18+ | JavaScript runtime |

### DevOps

| Tool | Purpose |
|------|---------|
| Docker | Containerization |
| Docker Compose | Local orchestration |
| Heroku | Cloud deployment |
| GitHub Actions | CI/CD |
| Git | Version control |

---

## 🚀 Deployment Architecture

### Development (Local)

```
┌──────────────┐
│   My Machine │
│              │
│  npm run dev │──→ http://localhost:3000 (Frontend Vite)
│              │
│ mvn spring-boot:run──→ http://localhost:8080 (Backend)
│              │
│  PostgreSQL  │──→ localhost:5432
│  (Docker)    │
└──────────────┘
```

### Development (Docker Compose)

```
┌──────────────────────────────────┐
│   Docker Compose Network         │
│                                  │
│  ┌─────────────────────────────┐ │
│  │ portfolio-frontend:3000     │ │
│  │ (React + Vite)              │ │
│  └──────────┬──────────────────┘ │
│             │                    │
│  ┌──────────▼──────────────────┐ │
│  │ portfolio-backend:8080      │ │
│  │ (Spring Boot)               │ │
│  └──────────┬──────────────────┘ │
│             │                    │
│  ┌──────────▼──────────────────┐ │
│  │ postgres:5432              │ │
│  │ (PostgreSQL DB)            │ │
│  └─────────────────────────────┘ │
│                                  │
└──────────────────────────────────┘
```

### Production (Heroku)

```
┌─────────────────────────────────────┐
│        Heroku Cloud                 │
│                                     │
│  ┌───────────────────────────────┐  │
│  │  My-Portfolio-App Dyno        │  │
│  │  (Spring Boot Backend)        │  │
│  │  - Port: $PORT (auto)         │  │
│  │  - Database: PostgreSQL       │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │  Heroku PostgreSQL Add-on     │  │
│  │  (Database)                   │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │  Frontend Static Assets       │  │
│  │  (Served by Backend)          │  │
│  └───────────────────────────────┘  │
│                                     │
└─────────────────────────────────────┘
         ↑
         │ HTTPS
         │
    Your Domain
  (kleberdev.com)
```

---

## 📈 Escalabilidad

### Actualidad (MVP)

- ✅ 2 entidades (Project, Skill)
- ✅ CRUD básico
- ✅ Single server
- ✅ H2/PostgreSQL

### Próximos Pasos (Fase 2)

- [ ] Agregar más entidades (Experience, Education, etc.)
- [ ] Implementar búsqueda/filtrado
- [ ] Autenticación JWT
- [ ] Upload de archivos
- [ ] Comentarios/Ratings
- [ ] Admin panel

### Escala Empresarial (Fase 3)

- [ ] Microservicios
- [ ] Cache distribuido (Redis)
- [ ] Message queue (RabbitMQ/Kafka)
- [ ] CDN para assets
- [ ] Load balancer
- [ ] Database replication
- [ ] Monitoring/Observability
- [ ] Blue-green deployment

---

## 🔐 Security Layers

```
┌────────────────────────────────────┐
│     HTTPS/TLS (Heroku)             │
└────────────────────────────────────┘
              ↓
┌────────────────────────────────────┐
│    CORS Policy (Backend)           │
└────────────────────────────────────┘
              ↓
┌────────────────────────────────────┐
│  Authentication (JWT - Futuro)     │
└────────────────────────────────────┘
              ↓
┌────────────────────────────────────┐
│  Input Validation (@Valid)         │
└────────────────────────────────────┘
              ↓
┌────────────────────────────────────┐
│  SQL Injection Prevention (JPA)    │
└────────────────────────────────────┘
              ↓
┌────────────────────────────────────┐
│  Authorization (Spring Security)   │
└────────────────────────────────────┘
```

---

## 📊 File Statistics

```
Backend Files:
  - Java:       7 files     (~1,500 lines)
  - XML (pom):  1 file      (~150 lines)
  - Properties: 1 file      (~50 lines)
  Total:        9 files

Frontend Files:
  - JSX:        5 files     (~500 lines)
  - CSS:        1 file      (~20 lines)
  - Config:     6 files     (~200 lines)
  Total:        12 files

Configuration Files:
  - Docker:     2 files
  - GitHub:     1 file
  - Git:        1 file
  - Docs:       3 files
  Total:        7 files

TOTAL PROJECT:  ~28 files, ~2,500+ lines of code
```

---

## ✨ Project Highlights

1. **Clean Architecture** - Separación clara de responsabilidades
2. **REST API** - Endpoints siguiendo estándares REST
3. **Documentation** - Swagger, README, DEPLOYMENT, QUICKSTART
4. **Docker Ready** - Containerización incluida
5. **CI/CD Ready** - GitHub Actions configured
6. **Best Practices** - Lombok, DTOs, Service layer
7. **Modern Stack** - Spring Boot 3.x, React 18, Vite
8. **Production Ready** - Heroku deployment configured

---

## 🎯 Next Steps

1. **Local Setup**
   ```bash
   # Backend
   cd backend && mvn spring-boot:run
   
   # Frontend
   cd frontend && npm run dev
   ```

2. **Add Sample Data**
   - Use Swagger UI to create projects/skills
   - Or use curl commands (see QUICKSTART.md)

3. **Deploy to Heroku**
   - See DEPLOYMENT.md for detailed steps
   - Takes about 5 minutes

4. **Improve Code**
   - Follow CODE_IMPROVEMENTS.md
   - Add validation, error handling, tests

5. **Scale Up**
   - Add authentication
   - Implement caching
   - Add more features

---

**Your portfolio is ready! 🎉**

For more information, see:
- 📖 README.md - General overview
- ⚡ QUICKSTART.md - Get started in 5 min
- 🚢 DEPLOYMENT.md - Deploy to production
- 💡 CODE_IMPROVEMENTS.md - Enhancement guide
