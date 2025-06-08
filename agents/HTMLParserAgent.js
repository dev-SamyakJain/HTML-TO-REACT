const openai = require('../lib/openai');
module.exports = async function(html) {
  const prompt = `Parse this HTML and return its semantic structure as JSON:
${html}`;
  const response = await openai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-4o'
  });
  return response.choices[0].message.content;
};