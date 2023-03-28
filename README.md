# AI Keyword Extractor

Welcome to the AI Keyword Extractor, a web application built using ReactJS, ChakraUI, and the OpenAI API for automatic keyword extraction from text documents.

To get started, please ensure that you have an OpenAI API key, which is required to access the OpenAI API. You can sign up for an API key on the OpenAI website.

Once you have obtained your API key, follow these steps to use the AI Keyword Extractor:

    Clone the repository to your local machine.

    Navigate to the project directory and install the dependencies by running the following command:

npm install

Create a .env file in the root directory of the project and add your OpenAI API key to the file, like this:

makefile

REACT_APP_OPENAI_API_KEY=<YOUR_API_KEY>

Start the development server by running the following command:

sql

npm start

Navigate to http://localhost:3000/ in your web browser to view the application.

To use the AI Keyword Extractor, simply paste the text you want to extract keywords from into the input field and click the "Extract Keywords" button. The application will use the OpenAI API to analyze the text and extract the most relevant keywords. The keywords will be displayed in a list below the input field.

If you encounter any issues or have feedback, please feel free to create an issue on the project's GitHub repository.
