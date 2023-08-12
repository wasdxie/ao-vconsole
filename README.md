# ao-vconsole
通过在url 的search 上添加 debug=1 自动打开vconsole

## 使用指南
step1. 在package.json 的依赖中引入 ao-vconsole
step2. 在项目的入口文件中使用如下
import aoVconsole from 'ao-vconsole'
step3.    aoVconsole()
step4. 打开主页面 输入 https://xxx.com?debug=1
step5. 在主页的底部就会出现 vconsole悬浮框

