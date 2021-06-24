## 小程序练习

### 目录结构

```
mini-program
├─ components           # 组件
├─ imgs                 # 图片
├─ utils                # 工具
├─ pages                # 页面-源码
│  ├─ fillBlanks        # 选词填空
│  ├─ longPressRecord   # 长按录音
│  └─ index             # 基础功能目录
├─ app.json             # 公共配置
├─ app.wxss             # 公共样式表
└─ app.js               # 小程序逻辑

```



### 功能

```text
- 网络请求
  - loading
  - 错误码值处理
  - 请求方式
  - 成功失败回调
  - 参数加密md5


- 图片压缩
  - 300KB - 500KB
  - CANVAS

- 转发分享
  - 分享携带转发信息

- 日期选择
  - 首次封装（长期）

- 省市选择
  - 小程序自带 PICKER 组件 【普通/多列/时间/日期/省市】

- 数据存储
  - 点击下一步，返回保留之前输入信息

- 测试
  - 选择日期 【终极版】
  - 人脸识别 ，需取消设置 baseURL
  - 显示遮罩层
  - 显示操作菜单
```


