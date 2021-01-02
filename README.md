# Nourimeals.com / Nourimeals.org <!-- omit in toc --> 

This repo holds the project for our website.

## Table of Contents <!-- omit in toc --> 
- [Technologoes](#technologoes)
- [Quick Start](#quick-start)
- [Running with Docker](#running-with-docker)
- [How to work with this repository](#how-to-work-with-this-repository)

## Technologoes

- JavaScript
- React

## Quick Start

1. Clone the repository

```bash
git clone https://github.com/nourimeals/website.git
```

2. CD into the repository

```bash
cd website
```

3. Install libraries

```bash
npm install
```

3. Run the project

```bash
npm run hot
```

This should open up the website in your browser in ``http://localhost:8080``

The hot script will hot reload whenever you make changes in your files so that you can see your changes right away.

## Running with Docker

1. Install Docker
- Open https://docs.docker.com/get-docker/
- Select the OS where you will be installing Docker
- Read the requirements and instructions

2. Copy all items in `./docker` to project root directory
3. Create the docker image and container
```bash
docker-compose -f docker-compose.yml up -d --build
```
Command Highlights:
- `-f`: points to file
-  `up`: Create and start containers
- `d`: Runs container in background and leaves it running
- `--build`: Creates the Docker image before starting the container
4. Open ``http://localhost:8080``

## How to work with this repository

-  Working with Git: [Git Standard Operating Procedures](https://github.com/nourimeals/documents/blob/master/SOPs/Git_Standard_Operating_Procedures.md)

- [Front End Best Practices](./_docs/front_end_best_practices.md)

- Documentation Table of Contents. We use the VS Code [Markdown All in One] (https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) extension.