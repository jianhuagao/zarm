(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{307:function(n,e,t){"use strict";t.r(e);var r=t(4),o=t.n(r),a=t(5),c=t.n(a),i=t(2),s=t.n(i),l=t(6),u=t.n(l),d=function(n){function e(){var n,r,a,i;c()(this,e);for(var l=arguments.length,u=Array(l),d=0;d<l;d++)u[d]=arguments[d];return r=a=s()(this,(n=e.__proto__||o()(e)).call.apply(n,[this].concat(u))),a.document=function(){return{document:t(517),className:"nav-bar-page"}},i=r,s()(a,i)}return u()(e,n),e}(t(482).a);e.default=d},482:function(n,e,t){"use strict";var r=t(4),o=t.n(r),a=t(5),c=t.n(a),i=t(7),s=t.n(i),l=t(2),u=t.n(l),d=t(6),m=t.n(d),p=t(0),h=t.n(p),f=t(485),v=t.n(f),N=t(486),g=t.n(N),y=(t(487),t(483),function(n){function e(){return c()(this,e),u()(this,(e.__proto__||o()(e)).apply(this,arguments))}return m()(e,n),s()(e,[{key:"render",value:function(){var n=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),e=n.document,t=n.className;if("string"==typeof e){var r=new v.a.Renderer;r.table=function(n,e){return'<div class="grid-container"><table class="grid"><thead>'+n+"</thead><tbody>"+e+"</tbody></table></div>"},r.code=function(n,e){return'<pre><code class="hljs '+e+'">'+(!(!e||!g.a.getLanguage(e))?g.a.highlight(e,n).value:n)+"</code></pre>"};var o=v()(e,{renderer:r});return h.a.createElement("div",{className:t,dangerouslySetInnerHTML:{__html:o}})}return h.a.createElement("span",null)}}]),e}(p.Component));e.a=y},483:function(n,e,t){},517:function(n,e){n.exports='# 导航栏 NavBar\n\n\n\n## 左侧渲染\n```jsx\nimport { NavBar, Icon } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <NavBar\n        left={<Icon\n          type="arrow-left"\n          theme="success"\n          onClick={() => window.history.back()}\n        />}\n        title="这是标题"\n      />\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 右侧渲染\n```jsx\nimport { NavBar, Icon } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <NavBar\n        title="这是标题这是标题这是标题"\n        right={\n          <Icon\n            type="question-round"\n            theme="success"\n            onClick={() => window.alert(\'click icon\')}\n          />\n        }\n      />\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 复数渲染\n```jsx\nimport { NavBar, Icon } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <NavBar\n        left={\n          <Icon \n            type="arrow-left"\n            theme="success"\n            onClick={() => window.history.back()}\n          />\n        }\n        title="这是标题"\n        right={<div>\n          <Icon type="add" theme="success" onClick={() => alert(\'click icon1\')} />\n          <Icon\n            style={{ marginLeft: 16 }}\n            type="question-round"\n            theme="success"\n            onClick={() => alert(\'click icon2\')}\n          />\n        </div>}\n      />\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| title | ReactNode | - | 标题渲染 |\n| left | ReactNode | - | 导航栏左侧渲染 |\n| right | ReactNode | - | 导航栏右侧渲染 |\n\n'}}]);