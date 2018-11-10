export default Page({
  data: {
    '__code__': {
      readme: '<h1 class="md-h1">wxc-button</h1><blockquote>\n<p>MinUI \u5C0F\u7A0B\u5E8F\u7EC4\u4EF6 - \u6309\u94AE\u7EC4\u4EF6</p>\n</blockquote>\n<h2 class="md-h2">Install</h2><code class="lang-bash md-code">$ <span class="hljs-keyword">min</span> install @minui/wxc-<span class="hljs-keyword">button</span></code><h2 class="md-h2">API</h2><h3 class="md-h3">Button</h3><table class="md-table">\n    <tr class="md-tr">\n<th class="md-th">\u540D\u79F0</th>\n<th class="md-th">\u63CF\u8FF0</th>\n</tr>\n\n    <tr class="md-tr">\n<td class="md-td"><code class="md-code">size</code></td>\n<td class="md-td">[\u8BF4\u660E]\uFF1A\u6309\u94AE\u7684\u5927\u5C0F<br class="md-br">[\u7C7B\u578B]\uFF1A<code class="md-code">String</code><br class="md-br">[\u9ED8\u8BA4\u503C]\uFF1A<code class="md-code">normal</code><br class="md-br">[\u53EF\u9009\u503C]\uFF1A<code class="md-code">normal, small, large</code></td>\n</tr>\n<tr class="md-tr">\n<td class="md-td"><code class="md-code">type</code></td>\n<td class="md-td">[\u8BF4\u660E]\uFF1A\u6309\u94AE\u7684\u6837\u5F0F\u7C7B\u578B<br class="md-br">[\u7C7B\u578B]\uFF1A<code class="md-code">String</code><br class="md-br">[\u9ED8\u8BA4\u503C]\uFF1A<code class="md-code">&quot;&quot;</code><br class="md-br">[\u53EF\u9009\u503C]\uFF1A<code class="md-code">beauty, selection, success, primary, danger, warning, secondary, info, dark, disabled</code></td>\n</tr>\n<tr class="md-tr">\n<td class="md-td"><code class="md-code">plain</code></td>\n<td class="md-td">[\u8BF4\u660E]\uFF1A\u6309\u94AE\u662F\u5426\u9542\u7A7A\uFF0C\u80CC\u666F\u8272\u900F\u660E<br class="md-br">[\u7C7B\u578B]\uFF1A<code class="md-code">Boolean</code><br class="md-br">[\u9ED8\u8BA4\u503C]\uFF1A<code class="md-code">false</code><br class="md-br"></td>\n</tr>\n<tr class="md-tr">\n<td class="md-td"><code class="md-code">value</code></td>\n<td class="md-td">[\u8BF4\u660E]\uFF1A\u6309\u94AE\u7684\u6587\u672C\u503C\u652F\u6301 <code class="md-code">slot</code>, <code class="md-code">slot</code> \u7684\u4F18\u5148\u7EA7\u4F4E\u4E8E <code class="md-code">value</code><br class="md-br">[\u7C7B\u578B]\uFF1A<code class="md-code">String</code><br class="md-br">[\u9ED8\u8BA4\u503C]\uFF1A<code class="md-code">&quot;&quot;</code><br class="md-br"></td>\n</tr>\n<tr class="md-tr">\n<td class="md-td"><code class="md-code">loading</code></td>\n<td class="md-td">[\u8BF4\u660E]\uFF1A\u6309\u94AE\u6587\u672C\u524D\u662F\u5426\u5E26 <code class="md-code">loading</code> \u56FE\u6807<br class="md-br">[\u7C7B\u578B]\uFF1A<code class="md-code">Boolean</code><br class="md-br">[\u9ED8\u8BA4\u503C]\uFF1A<code class="md-code">false</code><br class="md-br"></td>\n</tr>\n<tr class="md-tr">\n<td class="md-td"><code class="md-code">btn-style</code></td>\n<td class="md-td">[\u8BF4\u660E]\uFF1A\u6309\u94AE\u7684\u81EA\u5B9A\u4E49\u6837\u5F0F<br class="md-br">[\u7C7B\u578B]\uFF1A<code class="md-code">String</code><br class="md-br">[\u9ED8\u8BA4\u503C]\uFF1A<code class="md-code">&quot;&quot;</code><br class="md-br"></td>\n</tr>\n<tr class="md-tr">\n<td class="md-td"><code class="md-code">hover-class</code></td>\n<td class="md-td">[\u8BF4\u660E]\uFF1A\u6307\u5B9A\u6309\u94AE\u6309\u4E0B\u53BB\u7684\u6837\u5F0F\u7C7B\uFF0C\u5F53 <code class="md-code">hover-class=&quot;none&quot;</code> \u65F6\uFF0C\u6CA1\u6709\u70B9\u51FB\u6001\u6548\u679C<br class="md-br">[\u7C7B\u578B]\uFF1A<code class="md-code">String</code><br class="md-br">[\u9ED8\u8BA4\u503C]\uFF1A<code class="md-code">btn__hover</code><br class="md-br">[\u53EF\u9009\u503C]\uFF1A<code class="md-code">btn__hover, none</code><br class="md-br"></td>\n</tr>\n<tr class="md-tr">\n<td class="md-td"><code class="md-code">open-type</code></td>\n<td class="md-td">[\u8BF4\u660E]\uFF1A\u540C\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F <code class="md-code">button</code> \u7EC4\u4EF6\u3002\u5FAE\u4FE1\u5F00\u653E\u80FD\u529B<br class="md-br">[\u7C7B\u578B]\uFF1A<code class="md-code">String</code><br class="md-br">[\u9ED8\u8BA4\u503C]\uFF1A<code class="md-code">&quot;&quot;</code><br class="md-br">[\u53EF\u9009\u503C]\uFF1A<code class="md-code">contact, share, getUserInfo, getPhoneNumber, launchApp</code><br class="md-br"></td>\n</tr>\n<tr class="md-tr">\n<td class="md-td"><code class="md-code">app-parameter</code></td>\n<td class="md-td">[\u8BF4\u660E]\uFF1A\u540C\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F <code class="md-code">button</code> \u7EC4\u4EF6\u3002\u6253\u5F00 <code class="md-code">APP</code> \u65F6\uFF0C\u5411 <code class="md-code">APP</code> \u4F20\u9012\u7684\u53C2\u6570<br class="md-br">[\u7C7B\u578B]\uFF1A<code class="md-code">String</code><br class="md-br">[\u9ED8\u8BA4\u503C]\uFF1A<code class="md-code">&quot;&quot;</code><br class="md-br"></td>\n</tr>\n<tr class="md-tr">\n<td class="md-td"><code class="md-code">hover-stop-propagation</code></td>\n<td class="md-td">[\u8BF4\u660E]\uFF1A\u540C\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F <code class="md-code">button</code> \u7EC4\u4EF6\u3002\u6307\u5B9A\u662F\u5426\u963B\u6B62\u672C\u8282\u70B9\u7684\u7956\u5148\u8282\u70B9\u51FA\u73B0\u70B9\u51FB\u6001<br class="md-br">[\u7C7B\u578B]\uFF1A<code class="md-code">Boolean</code><br class="md-br">[\u9ED8\u8BA4\u503C]\uFF1A<code class="md-code">false</code><br class="md-br"></td>\n</tr>\n<tr class="md-tr">\n<td class="md-td"><code class="md-code">hover-start-time</code></td>\n<td class="md-td">[\u8BF4\u660E]\uFF1A\u540C\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F <code class="md-code">button</code> \u7EC4\u4EF6\u3002\u6309\u4F4F\u540E\u591A\u4E45\u51FA\u73B0\u70B9\u51FB\u6001\uFF0C\u5355\u4F4D\u6BEB\u79D2<br class="md-br">[\u7C7B\u578B]\uFF1A<code class="md-code">Number</code><br class="md-br">[\u9ED8\u8BA4\u503C]\uFF1A<code class="md-code">20</code><br class="md-br"></td>\n</tr>\n<tr class="md-tr">\n<td class="md-td"><code class="md-code">hover-stay-time</code></td>\n<td class="md-td">[\u8BF4\u660E]\uFF1A\u540C\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F <code class="md-code">button</code> \u7EC4\u4EF6\u3002\u624B\u6307\u677E\u5F00\u540E\u70B9\u51FB\u6001\u4FDD\u7559\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2<br class="md-br">[\u7C7B\u578B]\uFF1A<code class="md-code">Number</code><br class="md-br">[\u9ED8\u8BA4\u503C]\uFF1A<code class="md-code">70</code><br class="md-br"></td>\n</tr>\n<tr class="md-tr">\n<td class="md-td"><code class="md-code">lang</code></td>\n<td class="md-td">[\u8BF4\u660E]\uFF1A\u540C\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F <code class="md-code">button</code> \u7EC4\u4EF6\u3002\u6307\u5B9A\u8FD4\u56DE\u7528\u6237\u4FE1\u606F\u7684\u8BED\u8A00\uFF0Czh_CN \u7B80\u4F53\u4E2D\u6587\uFF0Czh_TW \u7E41\u4F53\u4E2D\u6587\uFF0Cen \u82F1\u6587<br class="md-br">[\u7C7B\u578B]\uFF1A<code class="md-code">String</code><br class="md-br">[\u9ED8\u8BA4\u503C]\uFF1A<code class="md-code">en</code><br class="md-br"></td>\n</tr>\n<tr class="md-tr">\n<td class="md-td"><code class="md-code">session-from</code></td>\n<td class="md-td">[\u8BF4\u660E]\uFF1A\u540C\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F <code class="md-code">button</code> \u7EC4\u4EF6\u3002\u4F1A\u8BDD\u6765\u6E90<br class="md-br">[\u7C7B\u578B]\uFF1A<code class="md-code">String</code><br class="md-br"></td>\n</tr>\n<tr class="md-tr">\n<td class="md-td"><code class="md-code">send-message-title</code></td>\n<td class="md-td">[\u8BF4\u660E]\uFF1A\u540C\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F <code class="md-code">button</code> \u7EC4\u4EF6\u3002\u4F1A\u8BDD\u5185\u6D88\u606F\u5361\u7247\u6807\u9898<br class="md-br">[\u7C7B\u578B]\uFF1A<code class="md-code">String</code><br class="md-br">[\u9ED8\u8BA4\u503C]\uFF1A\u5F53\u524D\u6807\u9898<br class="md-br"></td>\n</tr>\n<tr class="md-tr">\n<td class="md-td"><code class="md-code">send-message-path</code></td>\n<td class="md-td">[\u8BF4\u660E]\uFF1A\u540C\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F <code class="md-code">button</code> \u7EC4\u4EF6\u3002\u4F1A\u8BDD\u5185\u6D88\u606F\u5361\u7247\u70B9\u51FB\u8DF3\u8F6C\u5C0F\u7A0B\u5E8F\u8DEF\u5F84<br class="md-br">[\u7C7B\u578B]\uFF1A<code class="md-code">String</code><br class="md-br">[\u9ED8\u8BA4\u503C]\uFF1A\u5F53\u524D\u5206\u4EAB\u8DEF\u5F84<br class="md-br"></td>\n</tr>\n<tr class="md-tr">\n<td class="md-td"><code class="md-code">send-message-img</code></td>\n<td class="md-td">[\u8BF4\u660E]\uFF1A\u540C\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F <code class="md-code">button</code> \u7EC4\u4EF6\u3002\u4F1A\u8BDD\u5185\u6D88\u606F\u5361\u7247\u56FE\u7247<br class="md-br">[\u7C7B\u578B]\uFF1A<code class="md-code">String</code><br class="md-br">[\u9ED8\u8BA4\u503C]\uFF1A\u622A\u56FE<br class="md-br"></td>\n</tr>\n<tr class="md-tr">\n<td class="md-td"><code class="md-code">show-message-card</code></td>\n<td class="md-td">[\u8BF4\u660E]\uFF1A\u540C\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F <code class="md-code">button</code> \u7EC4\u4EF6\u3002\u663E\u793A\u4F1A\u8BDD\u5185\u6D88\u606F\u5361\u7247<br class="md-br">[\u7C7B\u578B]\uFF1A<code class="md-code">Boolean</code><br class="md-br">[\u9ED8\u8BA4\u503C]\uFF1A<code class="md-code">false</code><br class="md-br"></td>\n</tr>\n<tr class="md-tr">\n<td class="md-td"><code class="md-code">bind:click</code></td>\n<td class="md-td">[\u8BF4\u660E]\uFF1A\u540C\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F <code class="md-code">button</code> \u7EC4\u4EF6\u3002\u6309\u94AE\u70B9\u51FB\u4E8B\u4EF6\uFF0Cbind:tap\u5DF2\u5E9F\u5F03\uFF0C\u8BF7\u5347\u7EA7\u7EC4\u4EF6\u3002<br class="md-br">[\u7C7B\u578B]\uFF1A<code class="md-code">Handler</code><br class="md-br"></td>\n</tr>\n<tr class="md-tr">\n<td class="md-td"><code class="md-code">bindgetuserinfo</code></td>\n<td class="md-td">[\u8BF4\u660E]\uFF1A\u540C\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F <code class="md-code">button</code> \u7EC4\u4EF6\u3002\u7528\u6237\u70B9\u51FB\u8BE5\u6309\u94AE\u65F6\uFF0C\u4F1A\u8FD4\u56DE\u83B7\u53D6\u5230\u7684\u7528\u6237\u4FE1\u606F\uFF0C\u4ECE\u8FD4\u56DE\u53C2\u6570\u7684detail\u4E2D\u83B7\u53D6\u5230\u7684\u503C\u540C <code class="md-code">wx.getUserInfo</code><br class="md-br">[\u7C7B\u578B]\uFF1A<code class="md-code">Handler</code><br class="md-br"></td>\n</tr>\n<tr class="md-tr">\n<td class="md-td"><code class="md-code">bindcontact</code></td>\n<td class="md-td">[\u8BF4\u660E]\uFF1A\u540C\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F <code class="md-code">button</code> \u7EC4\u4EF6\u3002\u5BA2\u670D\u6D88\u606F\u56DE\u8C03<br class="md-br">[\u7C7B\u578B]\uFF1A<code class="md-code">Handler</code><br class="md-br"></td>\n</tr>\n<tr class="md-tr">\n<td class="md-td"><code class="md-code">bindgetphonenumber</code></td>\n<td class="md-td">[\u8BF4\u660E]\uFF1A\u540C\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F <code class="md-code">button</code> \u7EC4\u4EF6\u3002\u83B7\u53D6\u7528\u6237\u624B\u673A\u53F7\u56DE\u8C03<br class="md-br">[\u7C7B\u578B]\uFF1A<code class="md-code">Handler</code><br class="md-br"></td>\n</tr>\n<tr class="md-tr">\n<td class="md-td"><code class="md-code">binderrror</code></td>\n<td class="md-td">[\u8BF4\u660E]\uFF1A\u540C\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F <code class="md-code">button</code> \u7EC4\u4EF6\u3002\u5F53\u4F7F\u7528\u5F00\u653E\u80FD\u529B\u65F6\uFF0C\u53D1\u751F\u9519\u8BEF\u7684\u56DE\u8C03\u8C03<br class="md-br">[\u7C7B\u578B]\uFF1A<code class="md-code">Handler</code><br class="md-br"></td>\n</tr>\n<tr class="md-tr">\n<td class="md-td"><code class="md-code">bind:submit</code></td>\n<td class="md-td">[\u8BF4\u660E]\uFF1A<code class="md-code">button</code> \u7EC4\u4EF6 <code class="md-code">form-type</code> \u8BBE\u7F6E\u4E3A <code class="md-code">submit</code>, \u5185\u7F6E <code class="md-code">form</code> \u8868\u5355\uFF0C\u70B9\u51FB\u6309\u94AE\u65F6\u89E6\u53D1 <code class="md-code">submit</code> \u4E8B\u4EF6\uFF0C\u53EF\u7528\u4E8E\u83B7\u53D6 <code class="md-code">formId</code> \u7B49\uFF0C<code class="md-code">event.detail = {value, formId}</code></td>\n</tr>\n\n  </table><h2 class="md-h2">Note</h2><blockquote>\n<ul>\n<li>\u5C0F\u7A0B\u5E8F\u7EC4\u4EF6\u7CFB\u7EDF\u4E2D\u7EC4\u4EF6\u662F\u9694\u79BB\u7684\uFF0C\u7EC4\u4EF6\u5916\u5C42\u5957 <code>form</code> \u6807\u7B7E\u65F6\u4E24\u8005\u662F\u4E0D\u901A\u7684\uFF0C\u73B0\u5728\u7EC4\u4EF6\u4E2D\u5185\u7F6E <code>form</code> \u6807\u7B7E\u7528\u4E8E\u83B7\u53D6 <code>formId</code>\u3002</li>\n<li>\u5C0F\u7A0B\u5E8F\u7EC4\u4EF6\u7CFB\u7EDF\u4E2D\u7EC4\u4EF6\u662F\u9694\u79BB\u7684\uFF0C\u6240\u4EE5\u63D0\u4EA4\u8868\u5355\u65F6\u65E0\u6CD5\u7528 <code>form</code> \u8868\u5355\u83B7\u53D6\u8F93\u5165\u6846\u4E2D\u7684\u503C\uFF0C\u53EA\u80FD\u5355\u72EC\u83B7\u53D6\u3002</li>\n</ul>\n</blockquote>\n<h2 class="md-h2">ChangeLog</h2><h4 class="md-h4">v1.0.1\uFF082018-6-5\uFF09</h4><ul>\n<li><code>wxc-button</code> \u70B9\u51FB\u4E8B\u4EF6\u540D\u7531 <code>bind:tap</code> \u66F4\u540D\u4E3A <code>bind:click</code>\u3002</li>\n</ul>\n<h4 class="md-h4">v1.0.0\uFF082018-02-26\uFF09</h4><ul>\n<li>\u521D\u59CB\u7248\u672C</li>\n</ul>\n',
      demoDefault: '<code class="lang-html md-code"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span><br/><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">view</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"container"</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">view</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"title"</span>&gt;</span>\u666E\u901A\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">view</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">view</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"button-wrap"</span> <span class="hljs-attr">wx:for</span>=<span class="hljs-string">"</span></span></span><span class="hljs-template-variable">{{types}}</span><span class="xml"><span class="hljs-tag"><span class="hljs-string">"</span> <span class="hljs-attr">wx:for-item</span>=<span class="hljs-string">"type"</span> <span class="hljs-attr">wx:key</span>=<span class="hljs-string">"key"</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">wxc-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"normal"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"</span></span></span><span class="hljs-template-variable">{{type}}</span><span class="xml"><span class="hljs-tag"><span class="hljs-string">"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"</span></span></span><span class="hljs-template-variable">{{type}}</span><span class="xml"><span class="hljs-tag"><span class="hljs-string">"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">wxc-button</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;/<span class="hljs-name">view</span>&gt;</span><br/><span class="md--tab"></span><span class="hljs-tag">&lt;/<span class="hljs-name">view</span>&gt;</span><br/><br/><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">view</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"container"</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">view</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"title"</span>&gt;</span>\u9542\u7A7A\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">view</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">view</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"button-wrap"</span> <span class="hljs-attr">wx:for</span>=<span class="hljs-string">"</span></span></span><span class="hljs-template-variable">{{types}}</span><span class="xml"><span class="hljs-tag"><span class="hljs-string">"</span> <span class="hljs-attr">wx:for-item</span>=<span class="hljs-string">"type"</span> <span class="hljs-attr">wx:key</span>=<span class="hljs-string">"key"</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">wxc-button</span> <span class="hljs-attr">plain</span>=<span class="hljs-string">"</span></span></span><span class="hljs-template-variable">{{true}}</span><span class="xml"><span class="hljs-tag"><span class="hljs-string">"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"normal"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"</span></span></span><span class="hljs-template-variable">{{type}}</span><span class="xml"><span class="hljs-tag"><span class="hljs-string">"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"</span></span></span><span class="hljs-template-variable">{{type}}</span><span class="xml"><span class="hljs-tag"><span class="hljs-string">"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">wxc-button</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;/<span class="hljs-name">view</span>&gt;</span><br/><span class="md--tab"></span><span class="hljs-tag">&lt;/<span class="hljs-name">view</span>&gt;</span><br/><br/><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">view</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"container"</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">view</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"title"</span>&gt;</span>\u5C0F\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">view</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">view</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"button-small-wrap"</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">wxc-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"beauty"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"small"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">wxc-button</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;/<span class="hljs-name">view</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">view</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"button-small-wrap"</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">wxc-button</span> <span class="hljs-attr">plain</span>=<span class="hljs-string">"</span></span></span><span class="hljs-template-variable">{{true}}</span><span class="xml"><span class="hljs-tag"><span class="hljs-string">"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"beauty"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"small"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">wxc-button</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;/<span class="hljs-name">view</span>&gt;</span><br/><span class="md--tab"></span><span class="hljs-tag">&lt;/<span class="hljs-name">view</span>&gt;</span><br/><br/><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">view</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"container"</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">view</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"title"</span>&gt;</span>\u5927\u6309\u94AE\u5E26 loading \u72B6\u6001<span class="hljs-tag">&lt;/<span class="hljs-name">view</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">view</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"button-large-wrap"</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">wxc-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"large"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"beauty"</span> <span class="hljs-attr">loading</span>=<span class="hljs-string">"</span></span></span><span class="hljs-template-variable">{{true}}</span><span class="xml"><span class="hljs-tag"><span class="hljs-string">"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"large button"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">wxc-button</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;/<span class="hljs-name">view</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">view</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"button-large-wrap"</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">wxc-button</span> <span class="hljs-attr">plain</span>=<span class="hljs-string">"</span></span></span><span class="hljs-template-variable">{{true}}</span><span class="xml"><span class="hljs-tag"><span class="hljs-string">"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"large"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"beauty"</span> <span class="hljs-attr">loading</span>=<span class="hljs-string">"</span></span></span><span class="hljs-template-variable">{{true}}</span><span class="xml"><span class="hljs-tag"><span class="hljs-string">"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"large button"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">wxc-button</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;/<span class="hljs-name">view</span>&gt;</span><br/><span class="md--tab"></span><span class="hljs-tag">&lt;/<span class="hljs-name">view</span>&gt;</span><br/><br/><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">view</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"container"</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">view</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"title"</span>&gt;</span>\u81EA\u5B9A\u4E49\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">view</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">view</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"button-small-wrap"</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">wxc-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"beauty"</span> <span class="hljs-attr">btnStyle</span>=<span class="hljs-string">"min-width: 66rpx;padding: 0;border-radius: 66rpx"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">wxc-icon</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"#fff"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"36"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"cart"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">wxc-icon</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">wxc-button</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;/<span class="hljs-name">view</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">view</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"button-small-wrap"</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">wxc-button</span> <span class="hljs-attr">btnStyle</span>=<span class="hljs-string">"</span></span></span><span class="hljs-template-variable">{{style}}</span><span class="xml"><span class="hljs-tag"><span class="hljs-string">"</span>&gt;</span>\u9884\u7EA6\u76F4\u64AD <span class="hljs-tag">&lt;<span class="hljs-name">wxc-icon</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"#fff"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"arrow-right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">wxc-icon</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">wxc-button</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;/<span class="hljs-name">view</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">view</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"button-small-wrap"</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">wxc-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"beauty"</span> <span class="hljs-attr">btnStyle</span>=<span class="hljs-string">"width: 312rpx;"</span>&gt;</span>\u7ACB\u5373\u6362\u8D2D<span class="hljs-tag">&lt;/<span class="hljs-name">wxc-button</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;/<span class="hljs-name">view</span>&gt;</span><br/><span class="md--tab"></span><span class="hljs-tag">&lt;/<span class="hljs-name">view</span>&gt;</span><br/><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">view</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"container"</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">view</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"title"</span>&gt;</span>\u8868\u5355<span class="hljs-tag">&lt;/<span class="hljs-name">view</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">view</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"button-small-wrap"</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">wxc-button</span> <span class="hljs-attr">bindsubmit</span>=<span class="hljs-string">"onSubmit"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"beauty"</span> <span class="hljs-attr">btnStyle</span>=<span class="hljs-string">"width: 312rpx;"</span>&gt;</span>\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">wxc-button</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;/<span class="hljs-name">view</span>&gt;</span><br/><span class="md--tab"></span><span class="hljs-tag">&lt;/<span class="hljs-name">view</span>&gt;</span><br/><span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span><br/><br/><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript"><br/><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {<br/><span class="md--tab"></span><span class="hljs-attr">config</span>: {<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attr">usingComponents</span>: {<br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-string">\'wxc-button\'</span>: <span class="hljs-string">\'@minui/wxc-button\'</span>,<br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-string">\'wxc-icon\'</span>: <span class="hljs-string">\'@minui/wxc-icon\'</span><br/><span class="md--tab"></span><span class="md--tab"></span>}<br/><span class="md--tab"></span>},<br/><span class="md--tab"></span><span class="hljs-attr">data</span>: {<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attr">types</span>: [<br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-string">\'beauty\'</span>, <span class="hljs-string">\'selection\'</span>, <span class="hljs-string">\'disabled\'</span>,<br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-string">\'danger\'</span>, <span class="hljs-string">\'success\'</span>, <span class="hljs-string">\'secondary\'</span>,<br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-string">\'primary\'</span>, <span class="hljs-string">\'info\'</span>, <span class="hljs-string">\'dark\'</span>, <span class="hljs-string">\'warning\'</span><br/><span class="md--tab"></span><span class="md--tab"></span>],<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attr">style</span>: <span class="hljs-string">\'width: 222rpx;background: #ff9300;border-radius: 66rpx;color: #fff;\'</span><br/><span class="md--tab"></span>},<br/><span class="md--tab"></span><span class="hljs-comment">/** note: \u5728 wxp \u6587\u4EF6\u6216\u8005\u9875\u9762\u6587\u4EF6\u4E2D\u8BF7\u53BB\u6389 methods \u5305\u88C5 */</span><br/><span class="md--tab"></span>methods: {<br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span>onSubmit(e) {<br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-built_in">console</span>.log(e.detail.formId)<br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span>}<br/><span class="md--tab"></span>}<br/>}<br/></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span><br/><br/><span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css"><br/><span class="md--tab"></span><span class="hljs-selector-class">.container</span> {<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attribute">padding-top</span>: <span class="hljs-number">20</span>rpx;<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attribute">background</span>: <span class="hljs-number">#fff</span>;<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attribute">text-align</span>: center;<br/><span class="md--tab"></span>}<br/><span class="md--tab"></span><span class="hljs-selector-class">.container</span><span class="hljs-selector-pseudo">:after</span> {<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attribute">display</span>: block;<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attribute">content</span>: <span class="hljs-string">" "</span>;<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attribute">clear</span>:both;<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attribute">visibility</span>:hidden;<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attribute">height</span>:<span class="hljs-number">0</span>;<br/><span class="md--tab"></span>}<br/><span class="md--tab"></span><span class="hljs-selector-class">.title</span> {<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attribute">line-height</span>: <span class="hljs-number">50</span>rpx;<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attribute">margin-left</span>:<span class="hljs-number">35</span>rpx;<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attribute">margin-bottom</span>:<span class="hljs-number">10</span>rpx;<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attribute">text-align</span>:left;<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attribute">font-weight</span>: bold;<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attribute">font-size</span>: <span class="hljs-number">30</span>rpx;<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attribute">color</span>: <span class="hljs-number">#333</span>;<br/><span class="md--tab"></span>}<br/><span class="md--tab"></span><span class="hljs-selector-class">.button-wrap</span> {<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attribute">margin</span>:<span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">10</span>rpx <span class="hljs-number">35</span>rpx;<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attribute">float</span>: left;<br/><span class="md--tab"></span>}<br/><span class="md--tab"></span><span class="hljs-selector-class">.button-large-wrap</span> {<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">10</span>rpx;<br/><span class="md--tab"></span>}<br/><span class="md--tab"></span><span class="hljs-selector-class">.button-small-wrap</span> {<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attribute">margin</span>:<span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">10</span>rpx <span class="hljs-number">30</span>rpx;<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attribute">float</span>: left;<br/><span class="md--tab"></span>}<br/></span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span><br/></span></code>'
    }
  }
});