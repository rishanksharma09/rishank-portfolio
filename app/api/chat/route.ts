// import { streamText, UIMessage, convertToModelMessages } from 'ai'
// import { google } from '@ai-sdk/google'

// // Allow streaming responses up to 30 seconds
// export const maxDuration = 30
// export const runtime = 'edge' // Gemini works best on Edge

// export async function POST(req: Request) {
//   const {
//     messages,
//     model,
//   }: {
//     messages: UIMessage[]
//     model: string
//   } = await req.json()

//   const result = streamText({
//     model: google(model), // ✅ Gemini model instance
//     messages: convertToModelMessages(messages),
//     system: 'You are a helpful assistant that can answer questions and help with tasks',
//   })

//   return result.toUIMessageStreamResponse({
//     sendSources: false,   // Gemini doesn't return web citations
//     sendReasoning: false, // Gemini reasoning is not streamable
//   })
// }
