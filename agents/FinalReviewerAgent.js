const openai = require('../lib/openai');

module.exports = async function finalReviewerAgent(htmlString) {
  const prompt = `You are a React code formatter agent.

Take the given HTML string and convert it into modular React components. Return the result as multiple file blocks using this **exact format**:

[components/TextBlock.jsx]
<jsx code for TextBlock>

[components/ContentList.jsx]
<jsx code for ContentList>

[components/Container.jsx]
<jsx code for Container>

[index.jsx]
<jsx code for index.jsx>

 DO NOT include:
- Any markdown like \`\`\`jsx
- Any explanation or description — return ONLY the code blocks.`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      { role: "system", content: prompt },
      { role: "user", content: htmlString }
    ]
  });

  return response.choices[0].message.content;
};
