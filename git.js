//注意:1.生成秘钥,绑定在github上
//	   2.输入访问的邮箱和密码
//	   3.建立；连接的路径是ssh > 以git@打头

//git 与 远程 github 建立连接
//1.创建本地秘钥
//ssh-keygen -t rsa -C 直接输入邮箱不用加引号

//2.进入/c/Users/电脑名/.ssh/id_rsa.pub文件
//复制生成的秘钥 > 放入到github上 settings设置中
//下的SSH  添加一个秘钥

//3.输入当前访问的用户人员邮箱和用户名
//两条单独的命令
//3.1 git config --global user.name "Your Name"
//3.2 git config --global user.email "email@example.com"

//4.建立本地与服务器连接
//在要工作的位置 打开git bash here
//输入命令 git init  创建初始化git 建立一个git环境

//4.1与远程服务端建立联系
//通过命令，建立远程连接
//git remote add origin git@github.com:h5-c3/demoA.git

//5操作新增文件
//1. 新增文件 index.html
//2. git status 查看是否有文件进行修改  git diff可以查看修改内容
//3. git add . 讲刚才所有的修改文件上传到本地的git环境中
//4. git commit -m '说明字符串' 将刚才上传的数据与本地缓存的文件进行合并
//5. git push -u origin master 将主支上传到github上
//5.1第一次使用的是 git push -u origin master
//5.2 以后每次使用的都是  git push

//操作文件
//查看文件状态  git status
//增加文件操作  git add 文件名 或git add .
//合并本地缓存文件 git commit -m '操作说明文字'
//上传文件  git push

//1.集中式和分布式版本控制工具
//1.1集中式就是在联网的情况下进行开发，如svn
//1.2分布式(1.可以再无网络的时候进行开发)(2.每个人的电脑上都是有一个服务器)
//1.3 git 脱离网络开发

//git操作流程
//1. git status  查看当前本地是否有修改或操作的文件
//2. git add 文件名|. 上传到本地缓存区
//3. git commit -m '字符串说明操作' 将本地缓存区的文件进行合并
//4. git pull //下拉代码 从服务器端更新代码到本地
//5. git status //查看本地与服务器的代码合并后是否有冲突
//6.1 如果有冲突，修改代码 继续执行1~5的操作步骤
//6.2 git push //如果没有冲突,将本地代码上传到服务器( github|gitlab )

//分支操作
//master > 主支
//push 到分支上
//git push --set-upstream origin yg
//上传代码到服务器端> 自动建立分支系统yg

// git branch 查看当前分支代码
// git branch name 创建一个分支
// git checkout 分支名称 选择分支操作
// git merge 分支名称 将某一分支进行合并









