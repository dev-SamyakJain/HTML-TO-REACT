const openai = require('../lib/openai');
module.exports = async function(componentPlan) {
  const prompt = `Convert this HTML/JSX to use Tailwind CSS classes. Replace inline styles and bootstrap classes if present:
${componentPlan}`;
  const response = await openai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-4o'
  });
  return response.choices[0].message.content;
};