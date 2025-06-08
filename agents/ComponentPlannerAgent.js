
const openai = require('../lib/openai');
module.exports = async function(parsedHtmlJson) {
  const prompt = `From this structure, suggest a React component plan (names + file structure):
${parsedHtmlJson}`;
  const response = await openai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-4o'
  });
  return response.choices[0].message.content;
};