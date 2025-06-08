const openai = require('../lib/openai');
module.exports = async function(html) {
  const prompt = `Convert to valid React JSX. Ensure class -> className, for -> htmlFor, self-close tags:
${html}`;
  const response = await openai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-4o'
  });
  return response.choices[0].message.content;
};
