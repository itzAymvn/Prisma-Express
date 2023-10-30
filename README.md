## What is this?

This project is a web application built with Express.js, TypeScript, and Prisma connected to a MySQL database. It provides API endpoints for basic user management operations, including fetching users, retrieving a single user, adding a new user, updating user details, and deleting a user.

## **Setting Up Your Project:**

1. **Install Dependencies:**

    Use your preferred package manager to install the project dependencies.

    - Using npm:

        ```shell
        npm install
        ```

    - Using Yarn:

        ```shell
        yarn install
        ```

    - Using pnpm:
        ```shell
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

    - Using npm:

        ```shell
        npm run dev
        ```

    - Using Yarn:

        ```shell
        yarn dev
        ```

    - Using pnpm:
        ```shell
        pnpm dev
        ```

5. **Run the Production Server:**

    Build the project and start the production server.

    - Using npm:

        ```shell
        npm run build
        npm run start
        ```

    - Using Yarn:

        ```shell
        yarn build
        yarn start
        ```

    - Using pnpm:
        ```shell
        pnpm build
        pnpm start
        ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
