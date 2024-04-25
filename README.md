# 🍔 FoodieBoy

Welcome to FoodieBoy, my personal website that I plan to develop extensively, if I actually get around to it... This project is built using React, TypeScript, and Vite for the frontend, and Express with Supabase for the backend.

## Prerequisites 📋

Before you begin, ensure you have the following installed:

- Node.js (version 18) 🟢
- NPM 📦

## Getting Started 🚀

Follow these steps to get your local development environment up and running:

1. Clone the repository:
   ```bash
   git clone git@github.com:dangphung4/foodieboy.git
   ```

2. Install dependencies:
   ```bash
   cd foodieboy
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the project root.
   - Add the following variables to the `.env` file:
     ```
     VITE_AUTH0_DOMAIN=your_auth0_domain
     VITE_AUTH0_CLIENT_ID=your_auth0_client_id
     ```
   - Replace `your_auth0_domain` and `your_auth0_client_id` with your actual Auth0 project domain URL and Client key.

4. Open up a terminal and navigate to the Server Directory, and run the express app:
    ```bash
    cd Server
    node app.js
    ```
    This should launch a server at 'http://localhost:3000'.

5. Start the development server at the root directory in another terminal:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5174` to see the app in action.

## Project Structure 🗺️

Here's an overview of the project structure:

```
📁 FoodieBoy
├─📁 .vscode           # VSCode settings
├─📁 dist              # Compiled code
├─📁 node_modules      # NPM packages
├─📁 public            # Public assets
├─📁 server            # Express server
│  ├─📁 config         # Configuration files
│  ├─📁 controllers    # Route handlers
│  ├─📁 models         # Database models
│  └─📁 routes         # API routes
├─📁 src               # Frontend source code
│  ├─📁 components     # React components
│  ├─📁 data           # Data models
│  └─📁 views          # Pages
├─📄 .env              # Environment variables
├─📄 README.md         # You are here! 📍
└─📄 package.json      # Project manifest
```

## Available Scripts 📜

In the project directory, you can run the following scripts:

- `npm run dev`: Starts the development server for both the frontend and backend.
- `npm run build`: Builds the frontend and backend for production.
- `npm run serve`: Serves the production build locally.
- `npm test`: Runs the automated tests for the project.
- `npm lint`: Lints the codebase to maintain code quality.
- `npm format`: Formats the code according to predefined standards.

## Backend API Endpoints 🚀

Swagger UI is added so you are able to view endpoints in the Server project. 
You can do so by navigating to 'http://localhost:3000/api-docs'.


## Built With 🛠️

- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript.
- [Vite](https://vitejs.dev/) - Fast build tool for modern web projects.
- [Express](https://expressjs.com/) - Web framework for Node.js.
- [Supabase](https://supabase.io/) - Open-source Firebase alternative.

## Contributing 🤝

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License 📄

This project is licensed under the [MIT License](LICENSE).
