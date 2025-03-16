// import OpenAI from "openai";
// import mongoose from 'mongoose';
// import userModel from "./models/userModel.js";
// import careerModel from "./models/careerModel.js";
// import jwt from 'jsonwebtoken';
// import dotenv from 'dotenv';

// // Load environment variables
// dotenv.config();

// // Access environment variables
// const token = process.env.ai_token;
// const endpoint = process.env.endpoint;
// const modelName = process.env.model;

// // Validate required environment variables
// if (!token || !endpoint || !modelName) {
//   throw new Error('Missing required environment variables');
// }

// export async function analyzeCareer(result) {
//   try {
//     if (!result) {
//       throw new Error('Career result parameter is required');
//     }

//     const client = new OpenAI({ baseURL: endpoint, apiKey: token });
//     const response = await client.chat.completions.create({
//       messages: [
//         { role: "system", content: "You are a helpful assistant." },
//         { 
//           role: "user", 
//           content: `Analyze this ${result} and for this particular field in industry provide checkpoints for the post with each checkpoint including four prerequisites and four skills that can be earned from that checkpoint and any 2 resources for achieving that checkpoint.`
//         }
//       ],
//       temperature: 1.0,
//       top_p: 1.0,
//       max_tokens: 1000,
//       model: modelName
//     });

//     const analysisResult = response.choices[0].message.content;
    
//     // Update or create career analysis in MongoDB
//     const career = await careerModel.findOneAndUpdate(
//       { name: result },
//       { analysis: analysisResult },
//       { upsert: true, new: true }
//     );
    
//     return analysisResult;
//   } catch (err) {
//     console.error("Error occurred:", err);
//     throw err;
//   }
// }

// // Remove the example usage as it's not properly configured