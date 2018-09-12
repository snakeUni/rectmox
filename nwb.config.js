module.exports = {
  type: 'web-module',
  npm: {
      esModules: true,
      umd: false
  },
  babel: {
      "presets": [
        "env",
        "react"
      ]
    }
}
