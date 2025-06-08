const openai = require('../lib/openai');
module.exports = async function(jsx) {
  const prompt = `Analyze the JSX below for stateful elements. Add useState/useEffect where needed:
${jsx}`;
  const response = await openai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-4o'
  });
  return response.choices[0].message.content;
};