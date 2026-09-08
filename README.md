# rosterup-sit725
SIT725 group project - RosterUp shift-cover coordination platform
## Running with Docker (SIT725 8.2HD)

This project is fully containerised. No manual setup, installed dependencies, or configuration values are required beyond Docker itself.

### Prerequisites
- Docker Desktop installed and running

### Build and run
From the project root:

```bash
docker compose up --build
```

This starts two containers: the Node/Express application and a MongoDB database. On first run it will download the required base images, which may take a few minutes.

### Access
- Application: http://localhost:3000
- Student endpoint: http://localhost:3000/api/student

Expected response from `/api/student`:
```json
{"name": "Tejaswini Narra", "studentId": "s226464291"}
```

### Configuration
No secrets or manual `.env` setup are required. MongoDB runs as its own container inside the same Docker Compose network, and the app connects to it using `mongodb://mongo:27017/rosterup` — a connection string that is not sensitive, since it only resolves inside that container network.