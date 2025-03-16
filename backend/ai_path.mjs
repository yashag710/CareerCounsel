import OpenAI from "openai";
import mongoose from 'mongoose';
import userModel from "./models/userModel.js";
import careerModel from "./models/careerModel.js";
import jwt from 'jsonwebtoken';

const token = "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";
const endpoint = "https://models.inference.ai.azure.com";
const modelName = "gpt-4o";

export async function analyzeCareer(result) {
  try {
    const client = new OpenAI({ baseURL: endpoint, apiKey: token });
    const response = await client.chat.completions.create({
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { 
          role: "user", 
          content: `Analyze this ${result} and for this particular field in industry provide checkpoints for the post with each checkpoint including four prerequisites and four skills that can be earned from that checkpoint and any 2 resources for achieving that checkpoint.`
        }
      ],
      temperature: 1.0,
      top_p: 1.0,
      max_tokens: 1000,
      model: modelName
    });

    const analysisResult = response.choices[0].message.content;
    
    // Update or create career analysis in MongoDB
    await careerModel.create(
      { name: result },
      { analysis: analysisResult },
      { upsert: true, new: true }
    );
    return analysisResult;
  } catch (err) {
    console.error("Error occurred:", err);
    throw err;
  }
}

// Example usage
analyzeCareer().catch((err) => {
  console.error("The sample encountered an error:", err);
});