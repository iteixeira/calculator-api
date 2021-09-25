module.exports = {
  hooks: {
    'pre-commit': 'npm run lint format-staged-files',
  },
};
