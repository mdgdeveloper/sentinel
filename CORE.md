# CORE Project

## 1. Identidad del Proyecto

* **Nombre del proyecto:** Sentinel
* **Descripción breve:** Boilerplate de auth para Nextjs
* **Objetivo principal (1 frase):** Implementar una gestión completa de usuarios para Nextjs con rutas protegidas, registro y login, usando email y providers como Google y GitHub.

---

## 2. Stack Tecnológico (contrato fijo)

* **Frontend:** Next.js (App Router) + Tailwind CSS
* **Backend:** Next.js (API Routes)
* **Base de datos:** PostgreSQL (SupaBase)
* **ORM:** Prisma
* **Infraestructura/DevOps:** Vercel (hosting), SupaBase (DB hosting)
* **Reglas de librerías:**

  * No inventar ni cambiar librerías sin consulta.
  * Mantener consistencia en stack y versiones.

---

## 3. Reglas de Colaboración con IA

1. Los avances deben ser **en pasos muy pequeños, claros y numerados**.
2. Cada paso debe ser **ejecutable y comprobable** (ej: “crear modelo User en Prisma”).
3. La IA **no debe avanzar** al siguiente paso sin confirmación explícita.
4. Todo código generado debe ser **completo y funcional**, sin fragmentos sueltos.
5. Mantener el roadmap y actualizarlo en cada checkpoint.

---

## 4. Roadmap Versionado

### ✅ v0.1 – Configuración inicial

* Crear proyecto Next.js vacío
* Inicializar Git y configurar repositorio

### 🚧 v0.2 – Configuración de base de datos

* Instalar Prisma
* Configurar conexión a PostgreSQL

### ⬜ v0.3 – Modelos iniciales

* Definir modelo `User`
* Ejecutar migración

### ⬜ v0.4 – Instalacion de Better Auth siguiendo documentacion

* Instalar Better Auth
* Configurar Better Auth en el proyecto

### 🚧 v0.4.5 – Registro de usuario

* Endpoint de registro en backend
* Formulario de registro en frontend

### ⬜ v0.5 – Login y sesión

* Autenticación con Better Auth
* Persistencia de sesión



---

## 5. Estado Actual

* **Versión actual:** v0.4
* **Último paso completado:** Instalación y configuración de Better Auth
* **Siguiente paso pendiente:** Instalar Better Auth siguiendo la documentacion

---

## 6. Código Validado (Checkpoints)

Aquí se guarda el **último estado del código validado** después de cada versión terminada.

```bash
# v0.1 – Proyecto Next.js inicializado
npx create-next-app@latest sentinel
cd sentinel
git init
git remote add origin https://github.com/mdgdeveloper/sentinel.git
```

```bash
# v0.2 – Configuración de Prisma completada
npm install prisma @prisma/client
npx prisma init
npx prisma generate
```

```prisma
# v0.3 – Modelos de autenticación definidos
# Archivo: prisma/schema.prisma
# Modelos: User, Account, Session, VerificationToken
# Pendiente: Ejecutar migración cuando se resuelva conectividad
model User {
  id            String    @id @default(cuid())
  name          String?
  email         String?   @unique
  emailVerified DateTime?
  image         String?
  accounts      Account[]
  sessions      Session[]
}

model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String?
  access_token      String?
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String?
  session_state     String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
  @@map("accounts")
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  createdAt    DateTime @default(now())

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@map("sessions")
}

model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime
  createdAt  DateTime @default(now())

  @@unique([identifier, token])
  @@map("verification_tokens")
}

npx prisma migrate dev
```

## 7. Notas y Decisiones

* Decisión: Usar Tailwind en vez de CSS Modules.
* Decisión: Base de datos en contenedor Docker para desarrollo.
* Pendiente: Definir despliegue (Vercel, AWS, etc.).

---

## 8. Prompt Base para trabajar con IA

Eres un desarrollador experto en Next.js, Prisma y autenticación de usuarios. Trabajaremos juntos para construir un proyecto llamado "Sentinel", que es un boilerplate de autenticación para Next.js.

Este es el marco de mi proyecto:

- Stack: Next.js (App Router), Tailwind CSS, Prisma + PostgreSQL, Next.js en backend.
- Objetivo: Implementar una gestión completa de usuarios para Next.js con rutas protegidas, registro y login, usando email y providers como Google y GitHub.
- Reglas: pasos pequeños, no inventar librerías, no avanzar sin validación.

## Roadmap actual:

### ✅ v0.1 – Configuración inicial
* Crear proyecto Next.js vacío
* Inicializar Git y configurar repositorio

### 🚧 v0.2 – Configuración de base de datos

* Instalar Prisma
* Configurar conexión a PostgreSQL

### ⬜ v0.3 – Modelos iniciales

* Definir modelo `User`
* Ejecutar migración

### ⬜ v0.4 – Registro de usuario

* Endpoint de registro en backend
* Formulario de registro en frontend

### ⬜ v0.5 – Login y sesión

* Autenticación con Better Auth
* Persistencia de sesión

## Estado Actual

* Estado actual: estamos en el paso **Configurar Prisma**.

Ayúdame con la configuración de Prisma.
