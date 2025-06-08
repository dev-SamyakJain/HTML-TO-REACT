module.exports = async function fileWriterAgent(finalCodeString) {
  const fileMap = {};

  // Match all [filename.jsx] blocks and their content
  const fileBlocks = finalCodeString.match(/\[(.+\.jsx)\]\n([\s\S]*?)(?=\n\[.+\.jsx\]|\s*$)/g);

  if (!fileBlocks) {
    throw new Error('❌ No file blocks found in the final reviewed code.');
  }

  for (const block of fileBlocks) {
    const match = block.match(/\[(.+\.jsx)\]\n([\s\S]*)/);
    if (match) {
      const filename = match[1].trim();
      const code = match[2].trim();
      fileMap[filename] = code;
    }
  }

  return fileMap;
};
