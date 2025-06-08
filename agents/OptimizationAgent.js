const openai = require('../lib/openai');
module.exports = async function(components) {
  const prompt = `Optimize the React code. Add map() for repeating blocks, prop destructuring, and modularize reusable parts:
${components}`;
  const response = await openai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-4o'
  });
  return response.choices[0].message.content;
};
