# Reflection — SIT725 8.2HD

**Tejaswini Narra (Siri) — s226464291**

For this task I containerised RosterUp using a two-service Docker Compose
setup rather than a single container: one service for the Node/Express app,
and a separate official mongo:7 image for the database. I chose this over
installing MongoDB inside the same container as the app because it keeps
each service isolated and lets Docker manage the database's data
persistence through a named volume, rather than losing data every time the
container restarts. The app connects to MongoDB using the internal Docker
network hostname (`mongo`) rather than `localhost`, since containers on the
same Compose network can reach each other by service name. This also meant
I could avoid handling any real secret at all: the connection string
`mongodb://mongo:27017/rosterup` only resolves inside my own container
network, so there was nothing sensitive to hide or ask a teammate for.

I ran into a few real issues along the way. The first was that Docker
wasn't installed on my machine at all, which I only discovered when
`docker compose up` returned "command not found" right when I needed to run
it. I had to check my Mac's chip architecture (`uname -m`) to make sure I
downloaded the correct Apple Silicon build rather than the Intel one. After
installing it, the `docker` command still wasn't recognised in my existing
terminal window, since my shell's PATH had already loaded before Docker
finished setting itself up; opening a fresh terminal fixed it immediately.

The second issue was that the working registration endpoint, with real
bcrypt password hashing and a MongoDB write, existed on a teammate's
unmerged feature branch rather than on the branch I was building from.
Rather than waiting for it to be merged into the shared repository, I
fetched that branch directly from the original repo and merged it into my
own fork, since I already had read access to it as a collaborator. This let
me demonstrate a genuinely working, database-backed feature without needing
anyone else to push or approve anything on my behalf.

The most challenging part was diagnosing the PATH issue, since "command not
found" gave no indication that the actual cause was just an outdated
terminal session rather than a broken installation. The most rewarding part
was watching the database logs during the first successful run: seeing
MongoDB create the `users` and `workplaces` collections with the exact
indexes from our schema, and then getting back a real saved user with a
generated ID from a POST request, confirmed that the whole stack, Express,
Mongoose, and MongoDB, was genuinely working together inside the
containers, not just that the server had started.