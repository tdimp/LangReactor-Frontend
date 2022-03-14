Welcome to LangReactor!

LangReactor is a browser-based application that seeks to assist language learners by integrating a translator and a flashcard deck into one single user-friendly app. 

Currently, LangReactor supports translation into English, Spanish, French, and German with support for more languages in the works. The translator is built using DeepL's API and works similarly to DeepL itself or other translation applications such as Google Translate.

The flashcard deck supports both target language text and source language text, so users can "flip" the cards over to see the translation into the other language. The cards show the target language text by default. Additionally, the cards support images, so users can add their own image URLs to new cards and learn by associating the target language vocabulary with images of their choosing -- streamlining the language learning process!

Please see instructions for how to use LangReactor below:

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# Getting Started with JSON Server

The backend for this project is written for JSON Server. To use LangReactor, you must have JSON Server installed and running. Please visit [this website](https://medium.com/codingthesmartway-com-blog/create-a-rest-api-with-json-server-36da8680136d) for more information on JSON Server and how to install it.

Once you have JSON Server installed, you will need to clone [this repository](https://github.com/tdimp/phase-2-project-back) to your machine and initialize it using the following command: ```json-server --watch db.json --port 3004```.