import OpenAI from "openai";

const client = new OpenAI({
  apiKey: "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", // This is the default and can be omitted
  dangerouslyAllowBrowser:true
});

export default client;
