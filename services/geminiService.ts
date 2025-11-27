import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const streamCareerAdvice = async (
  userMessage: string,
  onChunk: (text: string) => void
): Promise<void> => {
  try {
    const modelId = 'gemini-2.5-flash';
    const systemInstruction = `
      Eres el mentor académico virtual de 'Escuela Fullstack'. 
      Tu objetivo es recomendar rutas de aprendizaje y cursos basados en los intereses del usuario.
      Nuestra oferta incluye: Desarrollo Web (React, Node, Fullstack), Data Science, Inteligencia Artificial, Diseño UX/UI, Inglés para Devs, y Habilidades Blandas.
      Sé motivador, conciso y utiliza emojis tech.
      Si te preguntan por precios, sugiere revisar la sección de suscripciones (Plan Expert y Expert+).
      Responde siempre en español.
    `;

    const chat = ai.chats.create({
      model: modelId,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const result = await chat.sendMessageStream({ message: userMessage });

    for await (const chunk of result) {
        if (chunk.text) {
            onChunk(chunk.text);
        }
    }
  } catch (error) {
    console.error("Error calling Gemini:", error);
    onChunk("⚠️ Lo siento, tuve un problema de conexión. Intenta de nuevo más tarde.");
  }
};