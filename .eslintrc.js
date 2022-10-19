module.exports = {
  root: true,
  extends: ["plugin:vue/vue3-essential", "airbnb-base"],
  parserOptions: {
    ecmaVersion: 2020, // 支持的ES语法版本
    sourceType: "module",
    ecmaFeatures: {
      jsx: true, // 启用 JSX
    },
  },
  plugins: ["vue"],
  // 运行环境
  env: { node: true, es6: true, browser: true },
  /**
   * "off" 或 0 - 关闭规则
   * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
   * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
   */
  rules: {
    eqeqeq: "off", // 关闭===代替==的告警
    "linebreak-style": "off", // 关闭规则：使用一致的换行风格
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off", // 禁用 console
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off", // 禁用 debugger
    "vue/component-tags-order": ["error", { order: ["template", "script", "style"] }],
    "import/extensions": ["error", "always"],
    "max-len": ["error", { code: 150 }],
    "import/no-unresolved": [
      "error",
      {
        ignore: ["^@/", "^#/"], // @ 是设置的路径别名
      },
    ],
    "no-param-reassign": [
      "off",
      // {
      //   props: true, // 对函数参数赋值发出警告
      //   // 以下除外
      //   ignorePropertyModificationsFor: [
      //     "el",
      //     "e", // for e.returnvalue
      //     "ctx", // for Koa routing
      //     "req", // for Express requests
      //     "request", // for Express requests
      //     "res", // for Express responses
      //     "response", // for Express responses
      //     "state", // for vuex state
      //     "config",
      //   ],
      // },
    ],
    "comma-dangle": ["error", "always-multiline"], // 当最后一个元素或属性与闭括号 ] 或 } 在不同的行时，要求使用拖尾逗号；当在同一行时，禁止使用拖尾逗号
    "prefer-template": "off", // 可以使用字符串拼接
    quotes: ["error", "double"], // 引号类型 "double" "single" "backtick"
    "no-use-before-define": ["error", { functions: false }], // 函数未申明时可以调用
    "no-unused-expressions": "off", // 可以出现未使用的表达式，如：a && a();
    "no-underscore-dangle": "off",
    "object-curly-newline": [
      // 关于对象换行的规则，实验性使用
      "error",
      {
        ObjectExpression: { multiline: true, minProperties: 5, consistent: true },
        ObjectPattern: { multiline: true, minProperties: 5, consistent: true },
        ImportDeclaration: "never",
        ExportDeclaration: "never",
      },
    ],
  },
  overrides: [
    {
      files: ["*.vue"],
      rules: {}, // 这里写覆盖vue文件的规则
    },
  ],
};
