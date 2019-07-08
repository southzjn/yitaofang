# yitaofang
React + Redux + React-router + Antd-mobile +express + mongodb

一、安装和配置开发环境

（1）安装和配置Node.js

    1）Node.js英文官网下载地址：https://nodejs.org/en/download/
     
       下载完成后按照此教程进行安装：https://www.cnblogs.com/zhouyu2017/p/6485265.html
    
    2）同样按照此教程配置Node.js：https://www.cnblogs.com/zhouyu2017/p/6485265.html
 
（2）安装和配置MongoDB

    1）MongoDB英文官网下载地址：https://www.mongodb.com/download-center#community
       
       下载完成后按照此教程进行安装：https://www.cnblogs.com/wjaaron/p/7800490.html
    
    2）同样按照上面的教程进行配置：https://www.cnblogs.com/wjaaron/p/7800490.html
 
 （3）安装VS Code
 
     英文官网：https://code.visualstudio.com/

二、使用VS Code启动源代码

（1）源代码文件目录

YiTaoFang

|-------client        ----前端项目

|        |-------config        ----配置文件 

|        |-------public        ----html模板、logo等

|        |-------scripts        ----script命令

|        |-------src        ----源代码

|        |-------.babelrc        ----babel配置

|        |-------.gitignore        ----git提交ignore

|        |-------package-lock.json				

|        |-------package.json

|-------server        ----后端项目+数据库配置

|        |-------bin        ----服务端启动文件

|        |-------mongo        ----数据库连接、配置文件

|        |-------routes        ----路由，接收、响应请求

|        |-------app.js        ----服务端入口文件

|        |-------pack.json        ----配置文件

（2）启动源代码

根据以上描述的源代码文件目录，在VS Code的“控制台”中，开启两个“终端”窗口。在一个终端窗口中使用“cd 盘符:\目录\子目录\子目录\server”指令，
使控制台进入server文件夹，在另一个终端窗口中使用“cd 盘符:\目录\子目录\子目录\client”指令，使控制台进入client文件夹。如果进错文件夹可以使用
“cd ..”指令返回上一层文件夹。然后在两个终端窗口使用“npm i”指令下载依赖文件。依赖文件下载完成后，先在处于server文件夹下的终端窗口中输入指令
“npm start”启动服务器端，注意此时要确保MongoDB的服务正在运行。服务器端启动完毕后，在处于client文件夹下的终端窗口输入童颜的指令“npm start”
来启动客户端，建议设置Google Chrome浏览器为默认浏览器。启动后在Chrome中按“Ctrl+Shift+I”启动调试，按右侧调试栏的手机图形按钮切换到手机模式，
即可在PC端成功启动此移动端网页。
