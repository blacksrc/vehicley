# Decription

A simple vehicle traking app based on React library.

# Installation Guide

Clone the project:
```sh
$ git clone git@github.com:blacksrc/blookey.git
```

## Backend

1. The backend rest api is fake so you have to use [typicode/json-server](https://github.com/typicode/json-server)

2. Cd to backend directory and Run json server: 
```sh
$ json-server --watch index.js --delay=1000
```
3. It will start the json server on **localhost** port **3000**.<br>
[http://localhost:3000](http://localhost:3000)

## Frontend
1. cd into **frontend** directory.

2. Install dependencies.
```sh
$ yarn install
```
3. Rename `.env.example` file to `.env`. Then open the renamed file and add your environment variables:

```env
PORT=<Application running port: 3001>
REACT_APP_API_HOST=<API host: localhost>
REACT_APP_API_PORT=<API port: 3000>
REACT_APP_API_VERSION=<API version: v1> #Leave it empty if you are using typicode/json-server 
```

4. Run project in a development mode.
```sh
$ yarn start
```

## Stories
To see components documentation via [Storybook](https://storybook.js.org/) run the command below:
```sh
$ yarn storybook
```

# Todo
- [X] Filter Component.
- [X] List component.
- [X] State Container.
- [X] API class.
- [X] Localization.
- [ ] Error handling.
- [X] Inline code documentation.
- [X] Create frontend documantation using Storybook.
- [ ] Unit test.
- [ ] Integration test.
- [ ] e2e test.
- [ ] Dockerizing.
