这是一个MongoDB的学习实例，小电商项目实战。

## 涉及技术

1. NodeJS
2. MongoDB
3. Express，一个简介、灵活的基于Node.js的WEB应用开发框架，支持`ejs`、`jade`等模板，并且提供了一系列强大的功能，比如：模板解析，静态文件服务，中间件、路由控制等。
4. Mongoose，一个针对MongoDB操作的对象模型库，封装了MongoDB对文档的CRUD方法。

## 功能简介

项目主要分为以下几大模块：注册模块，登录模块，商品模块、购物车模块、结算模块。

1. 用户注册模块：填写用户名、密码、确认密码后，实现成功注册，然后进行登录。
2. 用户登录模块：填写已注册的用户名称，填写正确的密码，进入商品展示页面。
3. 商品模块：用户选择相关产品加入购物车。
4. 购物车模块：对相关商品进行增加、减少、删除操作。
5. 结算模块：对购物车内已选择商品进行结算。

模块结构如下图所示：

![模块结构图](http://hubwiz.com/course/549a704f88dba0136c371703/img/module.jpg)

## 流程设计

此流程图显示用户可以进行登录和注册操作，如果用户已经注册，则可以直接登录，若未注册则必须先注册成功后才能进行登录，登录成功后可以进入商品页浏览商品，也可以选择相关商品并可加入购物车，在购物车页面内可以对购物车商品进行相关操作，最后结选择相关商品进行结算。

其流程如下图所示：

![流程图](http://hubwiz.com/course/549a704f88dba0136c371703/img/process.jpg)

## MongoDB简介

[MongoDB](http://mongodb.org)是一个开源的NoSQL数据库，相比MySQL那样的关系型数据库，它更显得轻巧、灵活， 非常适合在数据规模很大、事务性不强的场合下使用。同时它也是一个对象数据库，没有表、行等概念，也没有固定的模式和结构，所有的数据以文档的形式存储，数据格式就是JSON。

MongoDB —— 是一个对象数据库，没有表、行等概念，也没有固定的模式和结构，所有的数据以Document(以下简称文档)的形式存储(Document，就是一个关联数组式的对象，它的内部由属性组成，一个属性对应的值可能是一个数、字符串、日期、数组，甚至是一个嵌套的文档。)

## 详细设计

### 注册模块功能设计介绍

**功能**：本模块主要用于新用户注册，用户通过表单提供用户名和密码信息，系统根据用户提供的注册信息对用户进行具体操作。

输入操作：用户名、密码、确认密码。

**对应处理**

1. 输入注册信息：在页面提供的表单处输入用户的用户名和密码信息，点击“注册”按钮提交表单数据信息。已注册用户，可点击“登录”按钮，进入登录页面。
2. 用户注册身份验证：连接数据库，以输入的“用户名”数据为查询条件来查看输入用户名是否已存在，如果用户名未注册，则提示注册成功并转到登录页进行登录，如果用户已注册，则给出用户已存在提示并重新注册。


注册界面设计草图

![注册界面](http://hubwiz.com/course/549a704f88dba0136c371703/img/Register.jpg)


### 登录模块设计与实现

**功能**：本模块主要用于对用户身份进行鉴别。用户通过表单提供用户名和密码信息，系统根据用户提供的登录信息对用户进行查询鉴别。 如果身份合法，则用户可进入商品页面。

输入操作：用户名、密码。

**对应处理**

1. 输入用户的登录信息：在页面提供的表单处输入用户的用户名和密码信息，点击“登录”按钮提交表单数据信息。 也可点击“注册”按钮，注册新用户。
2. 用户身份进行验证：连接数据库，打开user集合，检验用户登录信息。以输入的“用户名”数据为查询条件来查看用户是否存在，如果存在，继续检验其输入密码是否正确，密码和用户名都正确，则进入商品展示页面；如果用户名不存在或密码不正确，则给出相应的提示。

用户登录界面草图如下：

![登录界面草图](http://hubwiz.com/course/549a704f88dba0136c371703/img/Login.jpg)

### 商品页面介绍

商品页呢，我们主要要来展示商品，用户登录成功之后将会跳入商品页，可对所有商品进行查看， 每个商品信息的内容包括：商品名称、商品图片、商品价格，用户可浏览也可将其加入购物车。

页面草图如下所示：

![商品页面](http://hubwiz.com/course/549a704f88dba0136c371703/img/Commodity.jpg)

### 商品页面介绍

关于购物车页面，主要展示用户已购买的商品，包括商品的信息、价格、数量，当然用户可以对其中商品进行增加、减少、删除操作，最后，用户可选择对其中商品进行结算，选择结算后，会提示相应的付款金额。

页面草图如下所示：

![商品页面](http://hubwiz.com/course/549a704f88dba0136c371703/img/Cart.jpg)
