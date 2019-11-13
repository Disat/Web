# 03Git命令行操作

## 本地库操作

* 本地库初始化

  * 命令：`git init`
  * 效果： 
  * 注意：.git目录中存放的是本地库相关的子目录和文件，不要删除，也不要胡乱修改。
  * 设置签名
    * 形式
      * 用户名：tom
      * email地址：任意邮件地址
    * 作用：用于区分不同开发人员的身份
    * 辨析：这里设置的签名和登录远程库（代码托管中心如GitHub,码云）的账号、密码没有任何关系
    * 设置签名的命令：
      * 项目级别/仓库级别：仅在本地库范围内有效
        * `git config user.name xxxx`
        * `git config user.email xxxxxxx@xxx.com`    
        * 信息保存位置：./.git/config 文件   
      * 系统用户级别：登录当前操作系统的用户范围
        * `git config --global`
      * 优先级
        * 就近原则：项目级别优先级优于系统用户级别，二者都有时采用项目级别的签名
        * 如果只有雄用户级别签名，就以系统用户级别的签名为准
        * 二者都没有不允许

* 基本操作

  * **状态查看操作**

    `git status`

    查看工作区、暂存区状态

  * **添加操作**

    `git add [file name]`

    将工作区的“新建/修改”添加到暂存区

  * **提交操作**

    `git commit -m "commit message"[file name]`

    将暂存区的内容提交到本地库

  * **查看历史记录的几种方式**

    * `git log`

    * `git log -- pretty=oneline`

    * `git reflog`

      git reflog 产生的结果中 `HEAD@{number}`number表示移动到这个历史版本需要的步数

      > 注意：当记录较多，多屏显示时，多屏显示的控制方式：
      >
      > 空格向下翻页
      >
      > b向上翻页
      >
      > q退出

  * **版本的前进后退**

    * 本质

      > ![image-20191110182512638](C:\Users\wzxpl\Documents\笔记\Git&GitHub\images\版本前进后退模型.png)

    * 三种方式

      * 基于索引值[] （推荐）

        `git reset --hard 局部索引值`

      * 使用^符号

        `git reset --hard HEAD^`

        > 注意：一个^只能后对一步，n个表示后退n步

      * 使用~符号

        `git reset --hard HEAD~n`

        > 注意：表示后退n步

  * **reset命令的三个参数对比**

    * --soft 参数

      * 仅仅是在本地库移动HEAD指针

        > index file 指暂存区
        >
        > working tree 指工作区

    * --mixed参数

      * 在本地库移动HEAD指针
      * 重置暂存区

    * --hard参数

      * 在本地库移动HEAD指针
      * 重置暂存区
      * 重置工作区

  * **删除文件找回**

    * 前提：删除前，文件存在时的状态提交到了本地库
    * 操作：`git reset --hard [指针位置]`
      * 删除操作已将提交到本地库：指针位置指向历史记录
      * 删除操作未提交到本地库：指针位置用HEAD[0] 或HEAD（二者等价)

  * **比较文件差异**

    * `git diff 文件名`
      * 将工作区中的文件和暂存区进行比较
    * `git diff 本地库中历史版本历史记录比较`
      * 将工作区中的文件和本地库历史记录比较
    * 不带文件名比较多个文件

* 分支管理

  * 版本控制过程中，使用多条线进行版本控制

  * 分支的使用场景

    > ![分支使用的场景](C:\Users\wzxpl\Documents\笔记\Git&GitHub\images\分支使用的场景.png)

  * 分支的具体操作

    * 创建分支

      * ` git branch [分支名]`

    * 查看分支

      * `git branch -v`

    * 切换分支

      * `git checkout [分支名]`

    * 合并分支

      1. 切换到接受修改的分支上
         1. `git checkout [被合并的分支名]`
      2. 执行merge命令 
         1. `git merge [有新内容的分支名]`

    * 解决冲突

      * 合并分支过程中产生冲突

        * 产生原因：对同一文件的同一部分做了不同修改

        * 冲突的表现：

          > ![分支冲突的表现](C:\Users\wzxpl\Documents\笔记\Git&GitHub\images\分支冲突的表现.png)

      * 冲突的解决

        1. 编辑文件，删除特殊符号

        2. 把文件修改到满意程度，保存退出

        3. `git add [文件名]`

        4. `git commit -m "日志信息"`

           > 注意：此时commit 一定不能带具体文件名

        

  * 

  * 

## 远程库操作

