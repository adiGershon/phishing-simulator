<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<h1 align="center"> Phishing Simulator</h1>

<p align="center">
  A NestJS microservice that simulates phishing attacks for awareness and training purposes.
</p>

<p align="center">
  <a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
  <a href="https://circleci.com/gh/nestjs/nest"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
  <a href="https://discord.gg/G7Qnnhy"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
</p>

---

## Features

- Sends simulated phishing emails using **Nodemailer** with Ethereal test accounts.
- Generates unique tracking links to detect clicks.
- Tracks status in **MongoDB**: `sent` or `clicked`.

---

## Tech Stack

- **NestJS**
- **Nodemailer** (Ethereal email testing)
- **MongoDB** (via Mongoose)

---

## MongoDB Schema

Collection: `attempts`

Each document contains:

```json
{
  "email": "target@example.com",
  "status": "sent | clicked",
  "content": "Phishing mail sent to aa@gm.com",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

---

## Getting Started

```bash
git clone https://github.com/your-username/phishing-simulator.git
cd phishing-simulator
npm install
npm run start
```

- Server will run at: `http://localhost:3001`

---

## API Endpoints

### `POST /phishing/send`

Send a phishing email to a given email address.

**Request Body:**
```json
{
  "email": "target@example.com"
}
```

**Response:**
```json
{
  "success": "true",
  "attemptId": "68906938bef5d58393e08a6d"
}
```

🔗 *The `previewUrl` is written to the console to simulate a click on the phishing email.*

---

### `GET /phishing/click/:id`

When a recipient clicks the link, this endpoint is triggered.

- Updates the relevant attempt in MongoDB with status `clicked`.

---

## Testing

You can use tools like **Postman** or `curl` to:

1. **Send an email**: `POST /phishing/send`

> Note: Emails are visible only via the Ethereal preview link — no actual emails are sent.

---

## Development

```bash
# watch mode
npm run start:dev
```

## Run tests

```bash
npm run test
npm run test:e2e
npm run test:cov
```

---

## Deployment

To deploy your NestJS app to the cloud, follow the official [NestJS Deployment Guide](https://docs.nestjs.com/deployment).

---

## Resources

- [NestJS Docs](https://docs.nestjs.com)
- [Courses](https://courses.nestjs.com)
- [Discord Support](https://discord.gg/G7Qnnhy)
- [NestJS Devtools](https://devtools.nestjs.com)

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Author

- Based on the [NestJS](https://github.com/nestjs/nest) starter
