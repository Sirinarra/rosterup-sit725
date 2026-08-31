# RosterUp

RosterUp is the SIT725 group project for coordinating shift cover between
workplace managers and employees. It replaces informal group-chat swapping
with a clear workflow for workplace membership, open shifts, claims, manager
approval, and shift history.

## Project status

RosterUp is currently in Sprint 1 development and is not production-ready.

- `main` is the protected, reviewed project baseline.
- `sprint1-integration` is the shared Sprint 1 integration branch.
- Feature branches are reviewed through pull requests before integration.
- The application scaffold is incomplete and may not run until the remaining
  Sprint 1 routes and screens are implemented.

See [CONTRIBUTING.md](CONTRIBUTING.md) before starting development and
[docs/MERGE_GUIDE.md](docs/MERGE_GUIDE.md) before opening or merging a pull
request.

## Core workflow

```text
Register or sign in
        |
        v
Create or join a workplace
        |
        v
Manager approves employee access
        |
        v
Employee posts a shift for cover
        |
        v
Coworker submits a claim
        |
        v
Manager approves or rejects the claim
        |
        v
Shift status and history are updated
```

## Users

### Manager

- Register and sign in as a manager.
- Create a workplace and receive an invite code.
- Approve or reject employee join requests.
- Review pending shift claims.
- Approve or reject shift-cover requests.
- View employees, shifts, and shift history.

### Employee

- Register and sign in as an employee.
- Join a workplace using its invite code.
- View upcoming and open shifts.
- Post a shift for cover.
- Claim an open shift.
- View claim outcomes and shift history.
- Withdraw an unclaimed posted shift.

## Approved scope

The Software Requirements Specification (SRS) is the source of truth for
project scope. Sprint work must map to an approved functional requirement or
use case.

The first version covers:

- Authentication and role-based access.
- Workplace creation and employee onboarding.
- Employee approval by a manager.
- Shift posting and open-shift browsing.
- Shift claims and manager approval.
- Shift status and history.
- Basic profile and workplace management.

The first version does not attempt to provide payroll, timesheets, leave
management, award interpretation, or unrelated chat functionality.

## Architecture

```text
Responsive web interface
          |
          v
Node.js and Express application
          |
          v
MongoDB database through Mongoose
```

The server is organised into routes, controllers, services, and Mongoose
models. Authentication, users, workplaces, shifts, and approvals should remain
separate modules so team members can work without unnecessary overlap.

## Technology

- Node.js 18 or newer
- Express
- MongoDB
- Mongoose
- HTML, CSS, and client-side JavaScript

## Local development

Clone the repository and switch to the active Sprint 1 integration branch:

```bash
git clone https://github.com/sahancz/rosterup-sit725.git
cd rosterup-sit725
git switch sprint1-integration
npm install
```

Create your feature branch from the latest integration branch:

```bash
git pull --ff-only
git switch -c feature/<trello-card>-<short-description>
```

Run the available tests before opening a pull request:

```bash
npm test
```

Database environment variables and the final start command will be documented
when the database configuration card is completed. Never commit `.env` files,
passwords, connection strings, or other secrets.

## Development workflow

1. Claim a Trello card before beginning work.
2. Confirm that the card maps to the approved SRS.
3. Create a branch from `sprint1-integration`.
4. Make focused commits under your own GitHub account.
5. Test your change locally.
6. Open a pull request into `sprint1-integration`.
7. Address review comments and conflicts.
8. Merge only after approval.
9. Merge the integration branch into `main` only when the complete Sprint 1
   application has been reviewed and verified.

Direct pushes, force pushes, and deletion of `main` are blocked.

## Project documentation

- [Contribution guide](CONTRIBUTING.md)
- [Branch and merge guide](docs/MERGE_GUIDE.md)
- [Pull-request template](.github/pull_request_template.md)
- [GitHub contributors](https://github.com/sahancz/rosterup-sit725/graphs/contributors)

## Licence

This student project is currently distributed under the ISC licence declared
in `package.json`.
