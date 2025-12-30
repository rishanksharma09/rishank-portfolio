import { google } from "@ai-sdk/google";
import { convertToModelMessages, streamText, UIMessage } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: google("gemini-3-flash-preview"),
    system: "You are a helpful assistant.",
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
