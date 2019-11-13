# 07GitHub

## 创建远程库

## 在本地库创建远程库别名

* 查看别名

  > git remote -v `

* 添加别名

  > `git remote add 别名 远程仓库地址`

## 推送

`git push 别名 分支`

## 克隆

* `git origin [远程地址]
* 产生效果
  1. 完整把远程库下载到本地
  2. 创建orgin远程地址bieming
  3. 初始化本地库

## 邀请团队成员加入

* 拉取

  > pull = fetch + merge
  * git fetch [远程库地址别名]  [远程分支名]
  * git merge [远程库地址别名]  [远程分支名]

* 解决冲突

  * 要点
    * 如果不是基于GitHub远程库最新版所作的修改，不能推送，必须先拉取
  * 拉取下来以后如果进入冲突状态，则按照“分支冲突解决”操作即可

## 跨团队合作

* 原理图

  > ![跨团队协作](C:\Users\wzxpl\Documents\笔记\Git&GitHub\images\跨团队协作.png)

## Git的工作流

## 3种常见方式

1. 集中式工作流
2. GitFlow工作流
   * 
3. Forking工作流