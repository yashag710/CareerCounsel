import OpenAI from "openai";
import mongoose from 'mongoose';
import userModel from "./models/userModel.js";
import careerModel from "./models/careerModel.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Access environment variables
const token = process.env.ai_token;
const endpoint = process.env.endpoint;
const modelName = process.env.model;

// Validate required environment variables
if (!token || !endpoint || !modelName) {
  throw new Error('Missing required environment variables');
}

export async function analyzeCareer(result) {
  try {
    if (!result) {
      throw new Error('Career result parameter is required');
    }

    // First check if we already have this analysis cached
    const existingAnalysis = await careerModel.findOne({ name: result });
    if (existingAnalysis && existingAnalysis.analysis) {
      return existingAnalysis.analysis;
    }

    const client = new OpenAI({ baseURL: endpoint, apiKey: token });
    const response = await client.chat.completions.create({
      messages: [
        { role: "system", content: "You are a career path advisor specialized in creating detailed professional development roadmaps." },
        { 
          role: "user", 
          content: `Create a detailed career development path for ${result}. Include:
          1. Key milestones/checkpoints
          2. Prerequisites for each checkpoint
          3. Skills that can be gained at each stage
          4. Recommended learning resources
          5. Potential job titles and roles at each level`
        }
      ],
      temperature: 0.7,
      top_p: 1.0,
      max_tokens: 1500,
      model: modelName
    });

    const analysisResult = response.choices[0].message.content;
    
    // Cache the analysis in MongoDB
    await careerModel.findOneAndUpdate(
      { name: result },
      { analysis: analysisResult },
      { upsert: true, new: true }
    );
    
    return analysisResult;
  } catch (err) {
    console.error("Analysis generation error:", err);
    throw err;
  }
}

// Remove the example usage as it's not properly configured