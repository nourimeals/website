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

Running with Docker is an alternative process to run the application.

If you're interested in some of it's advantages and disadvantages, Philipp Hauer's blog has an understandable overview here 
https://phauer.com/2015/discussing-docker-pros-and-cons/

1. Install Docker
- Open https://docs.docker.com/get-docker/
- Select the OS where you will be installing Docker
- Read the requirements and instructions
2. Create the docker image and container
```bash
docker-compose -f docker-compose.yml up -d --build
```
Command Highlights:
- `-f`: points to file
-  `up`: Create and start containers
- `d`: Runs container in background and leaves it running
- `--build`: Creates the Docker image before starting the container
3. Open ``http://localhost:8080``
4. Occassionally, you should clean up any stopped containers, dangling images, and unused networks
```bash
docker system prune
```

## How to work with this repository

-  Working with Git: [Git Standard Operating Procedures](https://github.com/nourimeals/documents/blob/master/SOPs/Git_Standard_Operating_Procedures.md)

- Before adding contributions please refer to [Front End Best Practices](https://github.com/nourimeals/documents/blob/master/Development/Front%20End%20Development/front_end_best_practices.md)

- Documentation Table of Contents. We use the VS Code [Markdown All in One] (https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) extension.