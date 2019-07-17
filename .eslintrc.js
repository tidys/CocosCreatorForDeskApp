// http://eslint.org/docs/user-guide/configuring
module.exports = {
    // 将 ESLint 限制到一个特定的项目，在配置文件里设置 "root": true。ESLint 一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。
    root: true,
    // 检测ES6代码
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    //
    env: {
        browser: true,
    },
    // 消除no-undef影响
    globals: {
        _: true
    },
    'rules': {
        // 使用单引号
        'quotes': [1, 'single'],
        'prefer-promise-reject-errors': 0,
        'space-unary-ops': 0,
        'no-unused-expressions': 0,
        'no-useless-return': 0,
        'standard/no-callback-literal': 0,
        'import/first': 0,
        'import/export': 0,
        'no-mixed-operators': 0,
        'no-use-before-define': 0,
        // 允许使用分号
        'semi': [0, 'never'],
        // 允许使用==
        'eqeqeq': 0,
        // 缩进使用不做限制
        'indent': 0,
        // 允许使用tab
        'no-tabs': 0,
        // 函数圆括号之前的空格
        // 'space-before-function-paren': [2, "always"],
        // 不要求块内空格填充格式
        'padded-blocks': 0,
        // 不限制变量一起声明
        'one-var': 0,
        // debugger使用
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        // 开发模式允许使用console
        'no-console': 0,
        // 条件语句中复制操作符需要用圆括号括起来
        'no-cond-assign': [2, 'except-parens'],
        // 允许使用条件表达式使用常量
        'no-constant-condition': 0,
        // 单行可忽略大括号，多行不可忽略
        'curly': [2, 'multi-line'],
        // 不允许使用var变量
        'no-var': 2,
        // 不允许出现多个空格
        'no-multi-spaces': ["error", {ignoreEOLComments: true}],
        'camelcase': 0,
        // 对象字面量的键值空格风格
        'key-spacing': 2,
        // if语句包含一个return语句， else就多余
        'no-else-return': 2,
        // 建议将经常出现的数字提取为变量
        'no-magic-numbers': [0, {ignoreArrayIndexes: true}],
        // 不允许重复声明变量
        'no-redeclare': [2, {builtinGlobals: true}],
        // 立即执行函数风格
        'wrap-iife': [2, 'inside'],
        // 不允许圆括号中出现空格
        'space-in-parens': [2, 'never'],
        // 确保运算符周围有空格
        'space-infix-ops': 2,
        // 强制点号与属性同一行
        'dot-location': [2, 'property'],
        // 强制单行代码使用空格
        'block-spacing': [2, 'always'],
        // 约束for-in使用hasOwnProperty判断
        'guard-for-in': 0,
        // 采用one true brace style大括号风格
        'brace-style': [2, '1tbs', {'allowSingleLine': true}],
        // 统一逗号周围空格风格
        'comma-spacing': [2, {'before': false, 'after': true}],
        // 禁止出现多个空行
        'no-multiple-empty-lines': [2, {'max': 1, 'maxEOF': 2}],
        // 允许箭头函数不使用圆括号
        'arrow-parens': 0,
        // 规范generator函数的使用
        'generator-star-spacing': [2, {'before': false, 'after': true}],
        // 要求在块级
        // 'lines-around-comment': [2, {
        //     'beforeBlockComment': true,
        //     'afterBlockComment': false,
        //     'beforeLineComment': true,
        //     'afterLineComment': false
        // }]
    }
}
