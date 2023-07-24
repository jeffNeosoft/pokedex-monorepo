# Pokedex Project - Monorepo with Lerna

This repository contains a Pokedex project created using React.js and organized as a monorepo with the help of Lerna. The monorepo structure includes three codebases:

1. `components` package: This package contains reusable React components that can be shared across different projects.

2. `utils` package: The `utils` package includes utility functions and helpers that are used by the main project and other packages.

3. `pokedex` project: The `pokedex` project is the main application built using Next.js. It utilizes the components and utilities from the respective packages.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Packages](#packages)
  - [components](#components)
  - [utils](#utils)
- [Projects](#projects)
  - [pokedex](#pokedex)
- [Appliction Scripts](#application-scripts)
- [Contributing](#contributing)

## Getting Started

Follow these instructions to set up and run the Pokedex project on your local machine.

### Prerequisites

Make sure you have the following tools installed:

- Node.js (18.0.0)
- yarn

### Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/jeffNeosoft/pokedex-monorepo.git
```

2. Navigate to the project's root directory:

```bash
cd pokedex-monorepo
```

3. To use the specified node version download NVM and switch with the help of the following command:

```bash
# Downloads the node version
nvm install

#to use the specified node version
nvm use
```

4. Install the dependencies for all packages and the main project:

```bash
# Using npm
npm run setup

# Using yarn
yarn setup
```

### Running the Application

1. Run the development server:

```bash
yarn dev
```

2. Run the application in production server:

```bash
yarn production
```

3. Run the appliction in docker:

```bash
# Image Creation
docker build . -t < IMAGE_TAG_NAME >

# To run the image in a container
docker run -d --name < CONTAINER_NAME > -p 3000:3000 < IMAGE_TAG_NAME >
```

The Pokedex application should now be accessible at `http://localhost:3000` using any one of the above methods.

### Running the Storybook

To view the components used in the application via storybook:

```bash
yarn storybook
```
the Storybook server should be up and running at `http://localhost:3001`.

## Packages

This monorepo is structured with the following packages:

### `components`

The `components` package contains reusable React components that can be shared across different projects. You can find these components in the `packages/components` directory.

### `utils`

The `utils` package includes utility functions and helpers that can be utilized by the main project and other packages. You can find these utility files in the `packages/utils` directory.

## Projects

### `pokedex`

The `pokedex` project is the main application of this Pokedex project, built using Next.js. It utilizes the components and utilities from the respective packages to create an interactive Pokedex web application.

The Next.js project can be found in the `projects/pokedex` directory.

## Application Scripts

Below is a chart for the scripts defined in the `package.json`:

| Script                | Description                                                                                          |
| --------------------- | ---------------------------------------------------------------------------------------------------- |
| `bootstrap`           | Installs dependencies for all packages in the monorepo and links any cross-dependencies with Lerna.  |
| `compile-utils`       | Compiles the code for the `@pokedex/utils` package using the `compile` script.                       |
| `compile-components`  | Compiles the code for the `@pokedex/components` package using the `compile` script.                  |
| `compile`             | Runs the `compile-utils` and `compile-components` scripts in sequence.                               |
| `setup`               | Installs dependencies, compiles the code, and links cross-dependencies using Lerna.                  |
| `lint`                | Runs linting for all packages and projects in the monorepo using the `lint` script.                  |
| `storybook`           | Starts the Storybook development server for the `@pokedex/components` package.                       |
| `test`                | Runs tests for all packages in the monorepo in parallel using the `test` script.                     |
| `dev`                 | Starts the development server for the `pokedex` project.                                             |
| `build`               | Builds the `pokedex` project using the `build` script.                                               |
| `production`          | Starts the `pokedex` project in production mode.                                                     |
| `prepare`             | Installs Husky, a tool for managing Git hooks, to enable pre-commit hooks.                           |
| `lerna-dockerize`     | A custom script, possibly for dockerizing the Lerna-based project.                                   |

Note: Some scripts depend on others, such as `compile` being a combination of `compile-utils` and `compile-components`, and `setup` running `compile` before bootstrapping with Lerna.

## Contributing

Contributions to this project are welcome and encouraged. To contribute, follow these steps:

1. Fork the repository to your GitHub account.
2. Create a new branch from the `main` branch for your changes.
3. Make your modifications and improvements.
4. Test your changes thoroughly.
5. Commit your changes with descriptive commit messages.
6. Push your changes to your forked repository.
7. Submit a pull request to the original repository, explaining your changes.

Please ensure your code follows the existing coding style and conventions.
