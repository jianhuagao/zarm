(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{448:function(n,e,t){"use strict";t.r(e);var i=t(4),s=t.n(i),o=t(5),l=t.n(o),c=t(2),a=t.n(c),r=t(6),g=t.n(r),h=function(n){function e(){var n,i,o,c;l()(this,e);for(var r=arguments.length,g=Array(r),h=0;h<r;h++)g[h]=arguments[h];return i=o=a()(this,(n=e.__proto__||s()(e)).call.apply(n,[this].concat(g))),o.document=function(){return{document:t(498),className:"actionsheet-page"}},c=i,a()(o,c)}return g()(e,n),e}(t(488).a);e.default=h},498:function(n,e){n.exports="# 动作面板 ActionSheet\n\n\n\n## 基本用法\n```jsx\nimport { ActionSheet, Cell, Button } from 'zarm';\n\nconst BUTTONS = [\n  {\n    text: '操作一',\n    onClick: () => console.log('点击操作一'),\n  },\n  {\n    theme: 'primary',\n    text: '操作二',\n    onClick: () => console.log('点击操作二'),\n  },\n  {\n    theme: 'danger',\n    text: '操作三',\n    onClick: () => console.log('点击操作三'),\n  },\n];\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      visible1: false,\n      visible2: false,\n      visible3: false,\n    };\n  }\n\n  toggle(key) {\n    this.setState({\n      [`${key}`]: !this.state[key],\n    });\n  }\n\n  render() {\n    return (\n      <div>\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.toggle('visible1')}>开启</Button>\n          }\n        >\n          普通\n        </Cell>\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.toggle('visible2')}>开启</Button>\n          }\n        >\n          带取消操作\n        </Cell>\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.toggle('visible3')}>开启</Button>\n          }\n        >\n          圆角、留边\n        </Cell>\n\n        <ActionSheet\n          visible={this.state.visible1}\n          actions={BUTTONS}\n          onMaskClick={() => this.toggle('visible1')}\n        />\n        <ActionSheet\n          visible={this.state.visible2}\n          actions={BUTTONS}\n          onMaskClick={() => this.toggle('visible2')}\n          onCancel={() => this.toggle('visible2')}\n        />\n        <ActionSheet\n          spacing\n          visible={this.state.visible3}\n          actions={BUTTONS}\n          onMaskClick={() => this.toggle('visible3')}\n          onCancel={() => this.toggle('visible3')}\n        />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| visible | boolean | false | 是否显示 |\n| spacing | boolean | false | 是否和外部有间距 |\n| actions | Action[] | [] | 动作列表 |\n| onMaskClick | () => void | - | 点击遮罩层时触发的回调函数 |\n| onCancel | () => void | - | 显示取消菜单，点击时触发的回调函数 |\n| cancelText | string | '取消' | 取消菜单的文案 |\n\n### Action 类型定义\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| text | string | - | 按钮文字 |\n| theme | string | 'default' | 按钮主题，可选值 `default`、`primary`、`success`、`warning`、`danger`\n| onClick | () => void | - | 按钮点击后触发的回调函数 |"}}]);