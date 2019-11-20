// babel.config.js
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        }
      }
    ],
    [
      (module.exports = {
        presets: ["@vue/app"]
      })
    ]
  ]
};
