const openai = require('../lib/openai');
module.exports = async function(statefulJsx) {
  const prompt = `Wrap the JSX into exportable functional React components. Use named exports and props:
${statefulJsx}`;
  const response = await openai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-4o'
  });
  return response.choices[0].message.content;
};