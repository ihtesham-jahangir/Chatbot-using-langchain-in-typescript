import { OpenAI } from "langchain/llms/openai";
import 'dotenv/config';
import inquirer from 'inquirer';
let answers = await inquirer.prompt([
    { type: 'text',
        name: 'name',
        message: 'Type your Prompt?',
    },
]);
//  console.log(process.env.OPENAI_API_KEY);
const llm = new OpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
    temperature: 0.9,
});
async function main() {
    const result = await llm.predict(answers.name);
    // Handle the result...
    console.log(result);
}
main();
