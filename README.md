# Simple node.js app for practice docker

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

Using docker to build a node.js app, then push it on Docker Hub.

This repository contains:
- The simple-node.js-app 

## Table of Contents

- [Installation](#installation)
- [Authors](#authors)
- [License](#license)

## Installation

Prerequisite:
- Docker on the local machine
- Docker Hub account
- Dockerfile (Dockerfile is needed to be suitable for the platform you are using)

Step 1: Build the application with the docker

Change directory to the root directory of the node.js application
```sh
  cd /path-to-node.js-app/
```

Build and tag the application
```sh
  docker build -t bongu1302/demo:v2 .
```

Check whether the application is built or not:
```sh
  docker images
```


Step 2: Run the application

```sh
  docker run -d -p 8080:8080 bongu1302/demo:v1
```

Notes that -d is run docker in background, flag -p stands for port

Check container is running or not, When the app is built, it is called an image, when we run the image, it is called the container
```sh
  docker ps
```

Step 3: Push the image to Docker Hub

```sh
  docker push bongu1302/demo:v1
```

## Authors

[@HuynhTanPhat1302](https://www.github.com/HuynhTanPhat1302)


## License

[MIT](https://choosealicense.com/licenses/mit/) © HuynhTanPhat
