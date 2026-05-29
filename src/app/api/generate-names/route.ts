import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

export type GeneratedName = {
  name: string;
  hint: string;
};

type GenerateNamesBody = {
  race?: string;
  gender?: string;
  type?: string;
  archetype?: string;
  count?: number;
};

function parseNamesFromResponse(text: string): GeneratedName[] {
  const trimmed = text.trim();
  const jsonMatch = trimmed.match(/\[[\s\S]*\]/);
  const jsonStr = jsonMatch ? jsonMatch[0] : trimmed;
  const parsed = JSON.parse(jsonStr) as unknown;

  if (!Array.isArray(parsed)) {
    throw new Error("Response is not an array");
  }

  return parsed.map((item, index) => {
    if (
      typeof item !== "object" ||
      item === null ||
      typeof (item as GeneratedName).name !== "string" ||
      typeof (item as GeneratedName).hint !== "string"
    ) {
      throw new Error(`Invalid item at index ${index}`);
    }
    return {
      name: (item as GeneratedName).name.trim(),
      hint: (item as GeneratedName).hint.trim(),
    };
  });
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "GEMINI_API_KEY is not configured" },
      { status: 500 },
    );
  }

  let body: GenerateNamesBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { race, gender, type, archetype, count } = body;

  if (!race?.trim() || !gender?.trim() || !type?.trim() || !archetype?.trim()) {
    return NextResponse.json(
      { error: "race, gender, type, and archetype are required" },
      { status: 400 },
    );
  }

  const numCount = Number(count);
  if (!Number.isInteger(numCount) || numCount < 1 || numCount > 8) {
    return NextResponse.json(
      { error: "count must be an integer between 1 and 8" },
      { status: 400 },
    );
  }

  const prompt = `You are a Dungeons & Dragons name generator for the Tephirot desert-fantasy setting.

Generate exactly ${numCount} unique names using these parameters:
- Race: ${race.trim()}
- Gender: ${gender.trim()}
- Type: ${type.trim()}
- Archetype: ${archetype.trim()}

Each entry needs:
- "name": a distinctive, setting-appropriate name (avoid overused fantasy clichés)
- "hint": one short sentence of flavor (personality, role, or backstory)—not game stats

Respond with ONLY a valid JSON array, no markdown fences or other text:
[{"name": "...", "hint": "..."}]`;

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    if (!text?.trim()) {
      console.log("Gemini API returned empty response");
      console.log("API response:", result.response);
      return NextResponse.json(
        { error: "Empty response from AI service" },
        { status: 502 },
      );
    }

    const names = parseNamesFromResponse(text);
    return NextResponse.json(names);
  } catch (error) {
    console.log("generate-names request failed");
    console.log(
      "Error message:",
      error instanceof Error ? error.message : String(error),
    );
    console.log("Full error:", error);

    const apiResponse =
      error &&
      typeof error === "object" &&
      "response" in error &&
      (error as { response?: unknown }).response !== undefined
        ? (error as { response: unknown }).response
        : error;

    console.log("API response:", apiResponse);

    return NextResponse.json(
      { error: "Failed to generate names from AI service" },
      { status: 502 },
    );
  }
}
