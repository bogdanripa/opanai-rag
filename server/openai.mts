import { OpenAI } from 'openai';

export default class OAI {
    private openaiClient: OpenAI;

    constructor() {
        this.openaiClient = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY || '',
        });
    }

    // Generate embeddings for a given text
    async generateEmbedding(text: string): Promise<number[]> {
        try {
            const response = await this.openaiClient.embeddings.create({
                model: 'text-embedding-ada-002',
                input: text,
            });
            return response.data[0].embedding;
        } catch (error) {
            console.error('Error generating embedding:', error);
            throw error;
        }
    }

    async createCompletion(prompt: string): Promise<ReadableStream> {
        try {
            const response = await this.openaiClient.chat.completions.create({
                model: 'gpt-4o',
                messages: [
                    { role: 'system', content: 'You are here to provide concrete answers about ' + process.env.SEARCH_URL + ' using search augmentation (RAG). You should not respond to any questions from other domains.' },
                    { role: 'user', content: prompt }
                ],
                max_tokens: 300,
                stream: true,
            });
            return response.toReadableStream();
        } catch (error) {
            console.error('Error generating response:', error);
            throw error;
        }
    }

}