import { http, models } from "@hypermode/modus-sdk-as";
import{
	OpenAIChatModel,
	ResponseFormat,
	SystemMessage,
	UserMessage,
	} from "@hypermode/modus-sdk-as/models/openai/chat";
import { 
	GeminiGenerateModel,
	ResponseContent,
	SystemTextContent,
	UserTextContent
	} from "@hypermode/modus-sdk-as/models/gemini/generate";
import { 
	AnthropicMessagesModel,
	AssistantMessage
	} from "@hypermode/modus-sdk-as/models/anthropic/messages";


/**
 * Generate text from a LLM model
 */
export function generateText(instruction: string, prompt: string): string {
  const model = models.getModel<OpenAIChatModel>("text-generator")

  const input = model.createInput([new SystemMessage(instruction), new UserMessage(prompt)])

  input.temperature = 0.7
  const output = model.invoke(input)

  return output.choices[0].message.content.trim()
}


export function generateText_G(prompt: string): string {
  const model = models.getModel<GeminiGenerateModel>("text-generator2")

  const input = model.createInput([new UserTextContent(prompt)])

  const output = model.invoke(input)

  if (output && output.candidates.length > 0) {
    const content = output.candidates[0].content;
    if (content) {
      return content.parts[0].text;
    }
  }
  
  throw new Error('No candidates generated');
}

export function generateText_A(prompt: string): string {
  const model = models.getModel<AnthropicMessagesModel>("text-generator3")

  const input = model.createInput([new AssistantMessage(prompt)])

  input.temperature = 0.7
  const output = model.invoke(input)

  if (output && output.content.length > 0) {
    const output_message = output.content[0].text;
    if (output_message) {
      return output_message;
    }
  }
  
  throw new Error('No content generated');
}

export function generateText_Q(instruction: string, prompt: string): string {
  const model = models.getModel<OpenAIChatModel>("text-generator4")

  const input = model.createInput([new SystemMessage(instruction), new UserMessage(prompt)])

  input.temperature = 0.7
  const output = model.invoke(input)

  return output.choices[0].message.content.trim()
}

export function generateText_Gq(instruction: string, prompt: string): string {
  const model = models.getModel<OpenAIChatModel>("text-generator5")

  const input = model.createInput([new SystemMessage(instruction), new UserMessage(prompt)])

  input.temperature = 0.7
  const output = model.invoke(input)

  return output.choices[0].message.content.trim()
}

export function generateText_J(instruction: string, prompt: string): string {
  const model = models.getModel<OpenAIChatModel>("text-generator6")

  const input = model.createInput([new SystemMessage(instruction), new UserMessage(prompt)])

  input.temperature = 0.7
  const output = model.invoke(input)

  return output.choices[0].message.content.trim()
}

export function generateText_O(instruction: string, prompt: string): string {
  const model = models.getModel<OpenAIChatModel>("text-generator7")

  const input = model.createInput([new SystemMessage(instruction), new UserMessage(prompt)])

  input.temperature = 0.7
  const output = model.invoke(input)

  return output.choices[0].message.content.trim()
}

export function generateText_P(instruction: string, prompt: string): string {
  const model = models.getModel<OpenAIChatModel>("text-generator8")

  const input = model.createInput([new SystemMessage(instruction), new UserMessage(prompt)])

  input.temperature = 0.7
  const output = model.invoke(input)

  return output.choices[0].message.content.trim()
}

export function generateText_C(instruction: string, prompt: string): string {
  const model = models.getModel<OpenAIChatModel>("text-generator9")

  const input = model.createInput([new SystemMessage(instruction), new UserMessage(prompt)])

  input.temperature = 0.7
  const output = model.invoke(input)

  return output.choices[0].message.content.trim()
}

export function generateText_MiNe(instruction: string, prompt: string): string {
  const model = models.getModel<OpenAIChatModel>("text-generator10")

  const input = model.createInput([new SystemMessage(instruction), new UserMessage(prompt)])

  input.temperature = 0.7
  const output = model.invoke(input)

  return output.choices[0].message.content.trim()
}

export function generateText_GeO(instruction: string, prompt: string): string {
  const model = models.getModel<OpenAIChatModel>("text-generator11")

  const input = model.createInput([new SystemMessage(instruction), new UserMessage(prompt)])

  input.temperature = 0.7
  const output = model.invoke(input)

  return output.choices[0].message.content.trim()
}
@json
class Quote {
  @alias("q")
  quote!: string;

  @alias("a")
  author!: string;
}

// this function makes a request to an API that returns data in JSON format, and
// returns an object representing the data
export function getRandomQuote(): Quote {
  const request = new http.Request("https://zenquotes.io/api/random");

  const response = http.fetch(request);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch quote. Received: ${response.status} ${response.statusText}`,
    );
  }

  // the API returns an array of quotes, but we only want the first one
  return response.json<Quote[]>()[0];
}


