export default Page({
  data: {
    '__code__': {
      readme: '<h1 class="md-h1">wxc-price</h1><blockquote>\n<p>MinUI \u5C0F\u7A0B\u5E8F\u7EC4\u4EF6 - \u4EF7\u683C</p>\n</blockquote>\n<h2 class="md-h2">Install</h2><code class="lang-bash md-code"><span class="hljs-variable">$ </span>min install <span class="hljs-variable">@minui</span>/wxc-price</code><h2 class="md-h2">API</h2><h3 class="md-h3">Price\u3010props\u3011</h3><table class="md-table">\n    <tr class="md-tr">\n<th class="md-th">\u5C5E\u6027</th>\n<th class="md-th">\u63CF\u8FF0</th>\n</tr>\n\n    <tr class="md-tr">\n<td class="md-td">value</td>\n<td class="md-td">[\u53EF\u9009] \u4EF7\u683C\u6570\u503C\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E\u6807\u7B7E\u5185\u5D4C\u5957\u503C</td>\n</tr>\n<tr class="md-tr">\n<td class="md-td">symbol</td>\n<td class="md-td">[\u53EF\u9009] \u8D27\u5E01\u7B26\u53F7\u3002\u9ED8\u8BA4\u4E3A <code class="md-code">\uFFE5</code></td>\n</tr>\n<tr class="md-tr">\n<td class="md-td">status</td>\n<td class="md-td">[\u53EF\u9009] \u663E\u793A\u72B6\u6001\uFF0C\u82E5\u8BBE\u7F6E\u4E3A del \u663E\u793A\u4E3A\u5220\u9664\u6001</td>\n</tr>\n<tr class="md-tr">\n<td class="md-td">icon</td>\n<td class="md-td">[\u53EF\u9009] \u4EBA\u6C11\u5E01\u7B26\u53F7\u663E\u793A\u89C4\u5219 <br class="md-br"><br class="md-br"> - \u5982\u4E0D\u8BBE\u7F6E\uFF0C\u4EBA\u6C11\u5E01\u7B26\u53F7\u7684\u5B57\u53F7\u540C\u4EF7\u683C\u6570\u5B57\u4E00\u81F4 <br class="md-br"> - \u8BBE\u4E3A sup\uFF0C\u4EBA\u6C11\u5E01\u7B26\u53F7\u5B57\u53F7\u7F29\u5C0F\uFF0C\u4F4D\u4E8E\u4EF7\u683C\u5DE6\u4E0A\u65B9 <br class="md-br"> - \u8BBE\u4E3A sub\uFF0C\u4EBA\u6C11\u5E01\u7B26\u53F7\u5B57\u53F7\u7F29\u5C0F\uFF0C\u4F4D\u4E8E\u4EF7\u683C\u5DE6\u4E0B\u65B9</td>\n</tr>\n<tr class="md-tr">\n<td class="md-td">decimal</td>\n<td class="md-td">[\u53EF\u9009] \u5C0F\u6570\u90E8\u5206\u663E\u793A\u89C4\u5219 <br class="md-br"><br class="md-br"> - \u5982\u4E0D\u8BBE\u7F6E\uFF0C\u663E\u793A 2 \u4F4D\u5C0F\u6570\uFF0C\u5B57\u53F7\u540C\u6574\u6570\u90E8\u5206\u4E00\u81F4 <br class="md-br"> - \u8BBE\u7F6E\u4E3A 1\uFF0C\u663E\u793A 1 \u4F4D\u5C0F\u6570\uFF0C\u5C0F\u6570\u90E8\u5206\u5411\u4E0B\u53D6\u6574 <br class="md-br"> - \u8BBE\u4E3A none\uFF0C\u4E0D\u663E\u793A\u5C0F\u6570\u90E8\u5206\uFF0C\u53EA\u663E\u793A\u6574\u6570\u4EF7\u683C <br class="md-br"> - \u8BBE\u4E3A small\uFF0C\u5C0F\u6570\u90E8\u5206\u5B57\u53F7\u7F29\u5C0F</td>\n</tr>\n<tr class="md-tr">\n<td class="md-td">del-color</td>\n<td class="md-td">[\u53EF\u9009] del \u72B6\u6001\u4E0B\u6587\u5B57\u989C\u8272\uFF0C\u53EA\u5728del\u72B6\u6001\u4E0B\u6709\u6548\uFF0C\u6B63\u5E38\u72B6\u6001\u4E0B\u6587\u5B57\u989C\u8272\u53EF\u7EE7\u627F\u7236\u5143\u7D20 <br class="md-br"><br class="md-br"> - \u9ED8\u8BA4 #999</td>\n</tr>\n\n  </table><h2 class="md-h2">Link</h2><table class="md-table">\n    <tr class="md-tr">\n<th class="md-th"></th>\n<th class="md-th">\u5730\u5740</th>\n</tr>\n\n    <tr class="md-tr">\n<td class="md-td"></td>\n<td class="md-td">price \u7EC4\u4EF6\u6587\u6863 <br class="md-br"> <a href="https://meili.github.io/min/docs/minui/index.html#price" class="md-a">https://meili.github.io/min/docs/minui/index.html#price</a><br class="md-br"></td>\n</tr>\n<tr class="md-tr">\n<td class="md-td"></td>\n<td class="md-td">price \u7EC4\u4EF6\u6E90\u7801 <br class="md-br"> <a href="https://github.com/meili/minui/tree/master/packages/wxc-price" class="md-a">https://github.com/meili/minui/tree/master/packages/wxc-price</a><br class="md-br"></td>\n</tr>\n<tr class="md-tr">\n<td class="md-td"></td>\n<td class="md-td">MinUI \u7EC4\u4EF6\u5E93 <br class="md-br"> <a href="https://github.com/meili/minui" class="md-a">https://github.com/meili/minui</a> <br class="md-br"></td>\n</tr>\n\n  </table><h2 class="md-h2">Preview</h2><p><img src="https://s10.mogucdn.com/mlcdn/c45406/171107_2ihj6754hg63gahdhljb2c1hcdeg9_480x480.jpg_225x999.jpg" alt="price"></p>\n<h2 class="md-h2">ChangeLog</h2><h4 class="md-h4">v1.0.6\uFF082018.01.09)</h4><ul>\n<li>\u589E\u52A0\u8D27\u5E01\u7B26\u53F7\u5C5E\u6027</li>\n<li>del \u72B6\u6001\u4E0B\u53EF\u81EA\u5B9A\u4E49\u6587\u5B57\u989C\u8272</li>\n</ul>\n<h4 class="md-h4">v1.0.3\uFF082018.01.04\uFF09</h4><ul>\n<li>\u4FEE\u590D\u4FDD\u7559\u4E24\u4F4D\u5C0F\u6570\uFF0C\u4E00\u4F4D\u5C0F\u6570\u7B49\u95EE\u9898</li>\n</ul>\n<h4 class="md-h4">v1.0.2\uFF082017.11.02\uFF09</h4><ul>\n<li>update .npmignore</li>\n</ul>\n<h4 class="md-h4">v1.0.1\uFF082017.10.24\uFF09</h4><ul>\n<li>\u521D\u59CB\u7248\u672C</li>\n</ul>\n',
      demoDefault: '<code class="lang-html md-code"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span><br/><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">wxc-price</span>&gt;</span>70.00<span class="hljs-tag">&lt;/<span class="hljs-name">wxc-price</span>&gt;</span><br/><span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span><br/><br/><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript"><br/><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> </span></span><span class="hljs-template-variable">{<br/><span class="md--tab"></span>config: {<br/><span class="md--tab"></span><span class="md--tab"></span>usingComponents: {<br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span>\'wxc-price\': \'@minui/wxc-price\'<br/><span class="md--tab"></span><span class="md--tab"></span>}</span><span class="xml"><span class="undefined"><br/><span class="md--tab"></span>},<br/><span class="md--tab"></span>data: </span></span><span class="hljs-template-variable">{}</span><span class="xml"><span class="undefined">,<br/><span class="md--tab"></span>methods: </span></span><span class="hljs-template-variable">{}</span><span class="xml"><span class="undefined"><br/>}<br/></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span><br/><br/><span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span><br/></span></code>',
      demoSymbol: '<code class="lang-html md-code"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">wxc-price</span> <span class="hljs-attr">symbol</span>=<span class="hljs-string">"$"</span>&gt;</span>70.00<span class="hljs-tag">&lt;/<span class="hljs-name">wxc-price</span>&gt;</span><br/><span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span><br/><br/><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript"><br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> </span></span><span class="hljs-template-variable">{<br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span>config: {<br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span>usingComponents: {<br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span>\'wxc-price\': \'@minui/wxc-price\'<br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span>}</span><span class="xml"><span class="undefined"><br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span>},<br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span>data: </span></span><span class="hljs-template-variable">{}</span><span class="xml"><span class="undefined">,<br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span>methods: </span></span><span class="hljs-template-variable">{}</span><span class="xml"><span class="undefined"><br/><span class="md--tab"></span><span class="md--tab"></span>}<br/></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span><br/><br/><span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span><br/></span></code>',
      demoValue: '<code class="lang-html md-code"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span><br/><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">wxc-price</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"70.00"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">wxc-price</span>&gt;</span><br/><span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span><br/><br/><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript"><br/><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> </span></span><span class="hljs-template-variable">{<br/><span class="md--tab"></span>config: {<br/><span class="md--tab"></span><span class="md--tab"></span>usingComponents: {<br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span>\'wxc-price\': \'@minui/wxc-price\'<br/><span class="md--tab"></span><span class="md--tab"></span>}</span><span class="xml"><span class="undefined"><br/><span class="md--tab"></span>},<br/><span class="md--tab"></span>data: </span></span><span class="hljs-template-variable">{}</span><span class="xml"><span class="undefined">,<br/><span class="md--tab"></span>methods: </span></span><span class="hljs-template-variable">{}</span><span class="xml"><span class="undefined"><br/>}<br/></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span><br/><br/><span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="undefined"><br/></span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span><br/></span></code>',
      demoDel: '<code class="lang-html md-code"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span><br/><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">wxc-price</span> <span class="hljs-attr">status</span>=<span class="hljs-string">"del"</span> <span class="hljs-attr">del-color</span>=<span class="hljs-string">"#666"</span>&gt;</span>140.00<span class="hljs-tag">&lt;/<span class="hljs-name">wxc-price</span>&gt;</span><br/><span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span><br/><br/><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript"><br/><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> </span></span><span class="hljs-template-variable">{<br/><span class="md--tab"></span>config: {<br/><span class="md--tab"></span><span class="md--tab"></span>usingComponents: {<br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span>\'wxc-price\': \'@minui/wxc-price\'<br/><span class="md--tab"></span><span class="md--tab"></span>}</span><span class="xml"><span class="undefined"><br/><span class="md--tab"></span>},<br/><span class="md--tab"></span>data: </span></span><span class="hljs-template-variable">{}</span><span class="xml"><span class="undefined">,<br/><span class="md--tab"></span>methods: </span></span><span class="hljs-template-variable">{}</span><span class="xml"><span class="undefined"><br/>}<br/></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span><br/><br/><span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="undefined"><br/></span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span><br/></span></code>',
      demoSub: '<code class="lang-html md-code"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span><br/><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">wxc-price</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"price-demo"</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"sub"</span>&gt;</span>100.02<span class="hljs-tag">&lt;/<span class="hljs-name">wxc-price</span>&gt;</span><br/><span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span><br/><br/><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript"><br/><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {<br/><span class="md--tab"></span><span class="hljs-attr">config</span>: {<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attr">usingComponents</span>: {<br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-string">\'wxc-price\'</span>: <span class="hljs-string">\'@minui/wxc-price\'</span><br/><span class="md--tab"></span><span class="md--tab"></span>}<br/><span class="md--tab"></span>},<br/><span class="md--tab"></span><span class="hljs-attr">data</span>: {},<br/><span class="md--tab"></span><span class="hljs-attr">methods</span>: {}<br/>}<br/></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span><br/><br/><span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css"><br/><span class="md--tab"></span><span class="hljs-selector-class">.price-demo</span> {<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attribute">font-size</span>: <span class="hljs-number">36</span>rpx;<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attribute">font-weight</span>: bold;<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attribute">color</span>: <span class="hljs-number">#ff4422</span>;<br/><span class="md--tab"></span>}<br/></span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span><br/></code>',
      demoSup: '<code class="lang-html md-code"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span><br/><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">wxc-price</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"price-demo"</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"sup"</span>&gt;</span>70.00<span class="hljs-tag">&lt;/<span class="hljs-name">wxc-price</span>&gt;</span><br/><span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span><br/><br/><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript"><br/><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {<br/><span class="md--tab"></span><span class="hljs-attr">config</span>: {<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attr">usingComponents</span>: {<br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-string">\'wxc-price\'</span>: <span class="hljs-string">\'@minui/wxc-price\'</span><br/><span class="md--tab"></span><span class="md--tab"></span>}<br/><span class="md--tab"></span>},<br/><span class="md--tab"></span><span class="hljs-attr">data</span>: {},<br/><span class="md--tab"></span><span class="hljs-attr">methods</span>: {}<br/>}<br/></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span><br/><br/><span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css"><br/><span class="md--tab"></span><span class="hljs-selector-class">.price-demo</span> {<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attribute">font-size</span>: <span class="hljs-number">36</span>rpx;<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attribute">font-weight</span>: bold;<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attribute">color</span>: <span class="hljs-number">#ff4422</span>;<br/><span class="md--tab"></span>}<br/></span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span><br/></code>',
      demoInt: '<code class="lang-html md-code"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span><br/><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">wxc-price</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"70.68"</span> <span class="hljs-attr">decimal</span>=<span class="hljs-string">"none"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">wxc-price</span>&gt;</span><br/><span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span><br/><br/><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript"><br/><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> </span></span><span class="hljs-template-variable">{<br/><span class="md--tab"></span>config: {<br/><span class="md--tab"></span><span class="md--tab"></span>usingComponents: {<br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span>\'wxc-price\': \'@minui/wxc-price\'<br/><span class="md--tab"></span><span class="md--tab"></span>}</span><span class="xml"><span class="undefined"><br/><span class="md--tab"></span>},<br/><span class="md--tab"></span>data: </span></span><span class="hljs-template-variable">{}</span><span class="xml"><span class="undefined">,<br/><span class="md--tab"></span>methods: </span></span><span class="hljs-template-variable">{}</span><span class="xml"><span class="undefined"><br/>}<br/></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span><br/><br/><span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="undefined"><br/></span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span><br/></span></code>',
      demoFixed: '<code class="lang-html md-code"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span><br/><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">wxc-price</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"70.68"</span> <span class="hljs-attr">decimal</span>=<span class="hljs-string">"1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">wxc-price</span>&gt;</span><br/><span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span><br/><br/><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript"><br/><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> </span></span><span class="hljs-template-variable">{<br/><span class="md--tab"></span>config: {<br/><span class="md--tab"></span><span class="md--tab"></span>usingComponents: {<br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span>\'wxc-price\': \'@minui/wxc-price\'<br/><span class="md--tab"></span><span class="md--tab"></span>}</span><span class="xml"><span class="undefined"><br/><span class="md--tab"></span>},<br/><span class="md--tab"></span>data: </span></span><span class="hljs-template-variable">{}</span><span class="xml"><span class="undefined">,<br/><span class="md--tab"></span>methods: </span></span><span class="hljs-template-variable">{}</span><span class="xml"><span class="undefined"><br/>}<br/></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span><br/><br/><span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="undefined"><br/></span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span><br/></span></code>',
      demoSmall: '<code class="lang-html md-code"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span><br/><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">wxc-price</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"price-demo"</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span> <span class="hljs-attr">value</span>=<span class="hljs-string">"39.00"</span> <span class="hljs-attr">decimal</span>=<span class="hljs-string">"small"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">wxc-price</span>&gt;</span><br/><span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span><br/><br/><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript"><br/><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {<br/><span class="md--tab"></span><span class="hljs-attr">config</span>: {<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attr">usingComponents</span>: {<br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-string">\'wxc-price\'</span>: <span class="hljs-string">\'@minui/wxc-price\'</span><br/><span class="md--tab"></span><span class="md--tab"></span>}<br/><span class="md--tab"></span>},<br/><span class="md--tab"></span><span class="hljs-attr">data</span>: {},<br/><span class="md--tab"></span><span class="hljs-attr">methods</span>: {}<br/>}<br/></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span><br/><br/><span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css"><br/><span class="md--tab"></span><span class="hljs-selector-class">.price-demo</span> {<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attribute">font-size</span>: <span class="hljs-number">36</span>rpx;<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attribute">font-weight</span>: bold;<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attribute">color</span>: <span class="hljs-number">#ff4422</span>;<br/><span class="md--tab"></span>}<br/></span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span><br/></code>'
    }
  },
  onShareAppMessage: function () {
    return {
      title: '价格 - MinUI小程序组件库',
      path: '/pages/price/index'
    };
  }
});