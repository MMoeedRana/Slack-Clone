# Slack Clone

An advanced, full-stack Slack clone built with Next.js, Convex, and modern React. This project replicates core Slack features including workspaces, channels, direct messaging, authentication, and real-time collaboration.

## Features

- **Multi-Workspace Support:** Create, join, and switch between multiple workspaces.
- **Channels & Conversations:** Organize discussions in public/private channels and direct messages.
- **Real-Time Messaging:** Instant message delivery and updates using Convex backend.
- **Authentication:** Sign in with GitHub, Google, or email/password (custom provider).
- **User Roles:** Admin/member roles for workspace management.
- **Reactions & Threads:** Emoji reactions and threaded replies for messages.
- **File Uploads:** Share images and files in conversations.
- **Modern UI:** Responsive, accessible, and themeable interface with Tailwind CSS and Radix UI.

## Tech Stack

- **Frontend:** Next.js 14, React 18, TypeScript, Tailwind CSS, Radix UI
- **Backend:** Convex (serverless database & functions)
- **Authentication:** @auth/core, @convex-dev/auth
- **State Management:** React Query, Zustand
- **Other:** Day.js, Emoji Picker, Quill (rich text), Lucide Icons

## Getting Started

### Prerequisites

- Node.js 18+
- Yarn or npm
- Convex account (for backend)

### Installation

1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd slack-clone-main
   ```
2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```
3. **Configure environment variables:**
   - Create a `.env.local` file in the root directory.
   - Add required variables (see Convex and Auth docs for details):
     - `CONVEX_SITE_URL`
     - Auth provider keys (GitHub, Google, etc.)
4. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

### Convex Setup

1. [Sign up for Convex](https://dashboard.convex.dev/) and create a new project.
2. Follow Convex docs to link your project and set up schema/functions.
3. Update Convex config and environment variables as needed.

## Usage

- Register or sign in with your preferred provider.
- Create or join a workspace using an invite code.
- Create channels, send messages, upload files, and react to messages.
- Switch between workspaces and manage members/roles.

## Project Structure

- `src/` — Main application code (pages, components, features)
- `convex/` — Convex backend functions, schema, and auth config
- `public/` — Static assets
- `components/` — Shared UI components

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to your fork and open a Pull Request

## License

This project is for educational/demo purposes. See [LICENSE](LICENSE) if provided.

---

**Inspired by Slack. Not affiliated with or endorsed by Slack Technologies, Inc.**
