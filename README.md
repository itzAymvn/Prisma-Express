## What is this?

This project is a web application built with Express.js, TypeScript, and Prisma connected to a MySQL database. It provides API endpoints for basic user management operations, including fetching users, retrieving a single user, adding a new user, updating user details, and deleting a user.

## **Setting Up Your Project:**

1. **Install Dependencies:**

    Use your preferred package manager to install the project dependencies.

    ```shell
    # Using NPM:
    npm install

    # Using YARN
    yarn install

    # Using PNPM
    pnpm install
    ```

2. **Configure Environment Variables:**

    Create a `.env` file by copying the `.env.example` file and fill in the required values.

3. **Migrate Prisma Schema:**

    Run Prisma migration to set up the database schema.

    ```shell
    npx prisma migrate dev --name init

    ```

4. **Run the Development Server:**

    Start the development server to see your project in action.

    
    ```shell
    # Using NPM:
    npm run dev

    # Using YARN
    yarn dev

    # Using PNPM
    pnpm dev
    ```

5. **Run the Production Server:**

    Build the project and start the production server.

    ```shell
    # Using npm
    npm run build
    npm run start

    # Using yarn
    yarn build
    yarn start

    # Using pnpm
    pnpm build
    pnpm start
    ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
