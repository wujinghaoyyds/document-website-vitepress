一、命令行基本操作


1、查看文件或目录

cd 路径 进入某一目录(change directory)
pwd 查看当前目录所在的绝对路径(print working directory)
Is 查看当前目录下的内容(list)
ls 路径 查看指定目录内容(默认不显示以”."开头的文件)
cat 路径 查看文件内容(一次性显示文件的全部内容)
head 路径 显示前十行，(加上 -n 数字 ）可调节展示的行数
tail 路径 显示后十行，加上( -n 数字 )可调节展示的行数 (tail:尾部)
less 路径 只显示部分内容，用方向键可调整，按q退出
2、创建文件（都是在当前目录下创建的）

touch 1. txt 创建一个文件名为“1”的txt文件(touch:触摸）
echo 内容 > 文件名 创建内容到文件中(echo:回声）
echo -e "1\n2" > 文件名 创建一个第一行内容为“1”、第二行内容为“2”的文件（\n表示回车换行）
mkdir a 创建一个目录 名为“a"的目录(make directory)
mkdir -p a/b/c 创建多层目录
touch 1. txt 2. txt 同时创建多个文件
mkdir a b 同时创建多个目录
mkdir -p a/b/c a/d/c 同时创建多个多层目录
cp 1.txt 2. txt 复制文件(把“1"中的内容复制到“2”) (copy)
cp -r a b 复制目录
3、删除

rm 文件名 删除文件(remove)
rm -r 目录名 删除目录
4、修改

echo 内容 > 文件名 输出内容到文件中，每次输入都是覆盖原来的文件
echo ' ' > 文件名 清空全部内容
echo 内容 >> 文件名 输出内容到文件中，每次输入都是追加新内容
code 文件名 打开文件直接修改
start 文件名 打开文件直接修改
mv 文件名 目录名 把文件移到目录中(move)
mv 文件名1 文件名2 重命名
touch 文件名 修改文件的最后更新时间
5、命令的组合

echo $ ? 有些命令如果成功了什么都不会提示；如果失败了会提示error，那么可以用这个命令来查看：成功返回0；失败会返回非0的数。（失败的类型有很多种，但成功只有一种）
&& 当一条命令成功之后，执行另一条，
； 不管命令是否成功都可以执行另一条
6、把命令变成文件（脚本文件）
步骤：

创建一个文件，后缀无所谓，可以没有
把要执行的命令写到文件里
运行正确的路径即可执行：
./ 脚本文件名 目录名（只学了对文件和目录的操作，所以这里的目录名是一个参数，即想要创建目录的名字）
sh 脚本文件名 目录名 即用bash运行
./ 脚本文件名 目录名 将shebang加入到文件的第一行中，用执行当前文件（保险起见加）【不懂】
删掉sh也能执行(可选)
但是你必须用正常的路径
把脚本文件目录放到PATH中,可以只用文件名就能执行
7、绝对路径与相对路径

相对路径是相对于当前目录的，不能以 / 开头
例如：
.
./xxx
./xxx/
xxx
xxx/1.txt

绝对路径是从根目录开始的，一定以 / 开头（~ 也是绝对路径，因为 ~ 是 /c/Users/wu这类路径——用户目录的缩写）
例如：
/c/Users/Fang/Desktop
/c/Users/Fang/Music
~/Desktop
~/Music
8、其他

clear 清屏
. 点表示当前目录
q 退出
↑ 复制上一行
Alt . 复制上一个参数
常见错误:
你少写了空格
你多写了空格
你用了中文符号
你进错目录了
救命快捷键：ctrl+ C 用于中断一个命令



二、git本地仓库
1、git实现多版本的切换

git init 初始化，创建.git目录（.git目录就是本地仓库）
git add 路径 标记哪些变动是将要提交到本地仓库的,路径可以是绝对路径或相对路径
创建目录.gitignore ，把不需要提交的文件名直接加入
git commit -m 字符串 （把当前目录复制一份到.git目录）提交并说明提交理由，字符串即为提交理由，字符串里如果有空格，就要用引号包起来
git commit -v 提交(回顾刚刚修改的东西，提交理由写的更详细，推荐)
git log 查看当前版本的提交历史，可以查看版本号
git reset --hard 版本号 返回到某一版本，在不同版本之间切换（必须所有add文件都提交，不然会被删除）
git reflog 查看所有提交历史，包括切换的历史
2、多个版本同时开发

git branch x 可以创造平行时间线x，即创建分支（基于本地仓库中最新一次commit所提交的内容）
git checkout x 切换到x分支
git status 查看当前的状态
git branch 查看分支情况，且当前在那一分支上
合并分支：切换到想要被合并到的分支(main是主分支)上，在把x 合并到主分支上
git checkou main

git merge x

git status-sb 查看那个文件冲突，有冲突时，会有conflict提示
解决办法：

打开文件，搜索"===="四个等于号（可以用快捷键Ctrl+p搜索）

在上下两个部分中选择要保留的部分，删除不用的代码"====、<<<<、>>>>"等标记，

再次git status -sb 直到没有冲突

运行git add和git commit

git branch -d x 删除分支
3、补充

.git 目录就是本地仓库，它不会重复复制相同的文件(优化)，它可以支持多个分支
git add处理的是文件变化，而不是文件，比如你删除一界文件后，依然要用git add来添加到待提交区
大部分时候，只需要知道git add .和git commit -v 即可，其他命令很少用到
三、git远程仓库-GitHub
代码需要储存在云端，进行备份

1、连接GitHub

使用ssh key连接电脑和GitHub:电脑上放私钥，GitHub 账号里留下公钥,上传代码是用私钥加密，GitHub 用公钥解密,如果解开了，说明是配对的.
生成sshkey: 运行ssh-keygen -t rsa -b 4096 -C你的邮箱,,然后一-直回车，直到没有提示
运行cat ~/ .ssh/id_ _rsa.pub 得到公钥内容，粘贴到GitHub,打开GitHub,在设置页面填入公钥
如何测试配对成功了，运行ssh -T git@github.com 如果问你yes/no,请回答yes并回车
2、上传代码

在GitHub中新建一个仓库Repository,复制其ssh地址, 复制页面里面的代码(关掉翻译)
git remote add origin git@XXXXXXX 在本地添加远程仓库地址(origin是远程仓库的默认名字)
git push -u origin main 把本地main分支到远程origin的main分支
如果提示你应该git pull ...，你就git pull下。git pull是先把远程分支合并到本地对应的分支，如果远程分支没有更新过，才可以省略git pull。-u origin master的意思是设置上游分支,之后就不用再设置上游分支了，直接git pull; git push。

如何上传其他分支： 1.git push origin x:x
2.git checkout x

git push -u origin x

3、下载代码



1.如何下载代码

git clone git@?/xxx.git
会在当前目录下创建一个xxx目录，xxx/ .git是本地仓库，一般需要接一句cd xxx

git clone git@?/xxx.git yyy
会在本地新建yyy目录，记得cd yyy

git clone git@?/xxx.git .
最后一个字符是点，注意有空格;不会新建目录，使用当前目录容纳代码和.git。当前目录一开始最好是个空目录，不然后果自负

cd 目标路径，进行上一篇的操作，即git add / git commit / [git pull]/ git push四连操作

2.如何下载某个分支

先下载整个仓库，然后git checkout分支名
