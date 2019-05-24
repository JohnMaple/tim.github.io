(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{476:function(a,s,e){"use strict";e.r(s);var t=e(8),r=Object(t.a)({},function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"python-virtualenv-虚拟环境搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#python-virtualenv-虚拟环境搭建","aria-hidden":"true"}},[a._v("#")]),a._v(" Python virtualenv 虚拟环境搭建")]),a._v(" "),e("p",[a._v("virtualenv------用来建立一个虚拟的python环境，一个专属于项目的python环境。用virtualenv 来保持一个干净的环境非常有用。")]),a._v(" "),e("h2",{attrs:{id:"virtualenv"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#virtualenv","aria-hidden":"true"}},[a._v("#")]),a._v(" virtualenv")]),a._v(" "),e("h3",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),e("ul",[e("li",[a._v("通过pip安装virtualenv")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("pip "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" virtualenv\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ul",[e("li",[a._v("测试安装成功")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("virtualenv --version\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用")]),a._v(" "),e("ul",[e("li",[a._v("为一个工程项目搭建一个虚拟环境")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" my_project\nvirtualenv my_project_env\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("ul",[e("li",[a._v("另外，如果存在多个python解释器，可以选择指定一个Python解释器（比如"),e("code",[a._v("python2.7")]),a._v("），没有指定则由系统默认的解释器来搭建")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("virtualenv -p /usr/bin/python2.7 my_project_env\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("blockquote",[e("p",[a._v("将会在当前的目录中创建一个名my_project_env的文件夹，这是一个独立的python运行环境，包含了Python可执行文件， 以及 pip 库的一份拷贝，这样就能安装其他包了，不过已经安装到系统Python环境中的所有第三方包都不会复制过来，这样，我们就得到了一个不带任何第三方包的“干净”的Python运行环境来。")])]),a._v(" "),e("ul",[e("li",[a._v("启动虚拟环境")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("source")]),a._v(" my_project_env/bin/activate\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ul",[e("li",[a._v("停用虚拟环境")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("deactivate\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("blockquote",[e("p",[a._v("停用后将回到系统默认的Python解释器")])]),a._v(" "),e("h2",{attrs:{id:"virtualenvwrapper"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#virtualenvwrapper","aria-hidden":"true"}},[a._v("#")]),a._v(" virtualenvwrapper")]),a._v(" "),e("p",[a._v("提供了一系列命令使得和虚拟环境工作变得愉快许多。它把您所有的虚拟环境都放在一个地方。")]),a._v(" "),e("ul",[e("li",[a._v("将您的所有虚拟环境在一个地方。")]),a._v(" "),e("li",[a._v("包装用于管理虚拟环境（创建，删除，复制）。")]),a._v(" "),e("li",[a._v("使用一个命令来环境之间进行切换。")])]),a._v(" "),e("h3",{attrs:{id:"安装-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),e("h4",{attrs:{id:"安装命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装命令","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装命令")]),a._v(" "),e("blockquote",[e("p",[a._v("安装（确保 virtualenv 已经安装了）")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" pip "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" virtualenvwrapper\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("virtualenvwrapper默认将所有的虚拟环境放在～/.virtualenvs目录下管理，可以修改环境变量WORKON_HOME来指定虚拟环境的保存目录。")]),a._v(" "),e("h4",{attrs:{id:"启动命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动命令","aria-hidden":"true"}},[a._v("#")]),a._v(" 启动命令")]),a._v(" "),e("p",[a._v("使用如下命令来启动virtualenvwrapper")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("source")]),a._v(" /usr/local/bin/virtualenvwrapper.sh\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h4",{attrs:{id:"环境变量配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境变量配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 环境变量配置")]),a._v(" "),e("p",[a._v("还可以将该命令添加到"),e("code",[a._v("~/.bashrc")]),a._v("或"),e("code",[a._v("~/.profie")]),a._v("等shell启动文件中，以便登陆shell后可直接使用virtualenvwrapper提供的命令。")]),a._v(" "),e("p",[a._v("对于virtualenvwrapper的配置：")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("id")]),a._v(" -u"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'0'")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("then")]),a._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("export")]),a._v(" VIRTUALENV_USE_DISTRIBUTE"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("1        "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# <-- Always use pip/distribute")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("export")]),a._v(" WORKON_HOME"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HOME")]),a._v("/.virtualenvs       "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# <-- Where all virtualenvs will be stored")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("source")]),a._v(" /usr/local/bin/virtualenvwrapper.sh\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("export")]),a._v(" PIP_VIRTUALENV_BASE"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$WORKON_HOME")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("export")]),a._v(" PIP_RESPECT_VIRTUALENV"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("fi")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br")])]),e("p",[a._v("将上面的配置添加到 "),e("code",[a._v("~/.bashrc")]),a._v(" 的末尾，然后将下面的命令运行一次：")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("source")]),a._v(" ~/.bashrc\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("div",{staticClass:"tip custom-block"},[e("p",[a._v("对于Windows，需要安装 virtualenvwrapper-win\n"),e("code",[a._v("pip install virtualenvwrapper-win")]),a._v("\n在windows系统环境变量里面增加WORKON_HOME变量，并指定虚拟环境的路径。")])]),a._v(" "),e("h3",{attrs:{id:"使用-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用")]),a._v(" "),e("h4",{attrs:{id:"创建虚拟环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建虚拟环境","aria-hidden":"true"}},[a._v("#")]),a._v(" 创建虚拟环境")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("mkvirtualenv env27\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h4",{attrs:{id:"创建指定解释器的虚拟环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建指定解释器的虚拟环境","aria-hidden":"true"}},[a._v("#")]),a._v(" 创建指定解释器的虚拟环境")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("mkvirtualenv -p python3.7 env37\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h4",{attrs:{id:"启动虚拟环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动虚拟环境","aria-hidden":"true"}},[a._v("#")]),a._v(" 启动虚拟环境")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("workon env27\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h4",{attrs:{id:"退出虚拟环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#退出虚拟环境","aria-hidden":"true"}},[a._v("#")]),a._v(" 退出虚拟环境")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("deactivate\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h4",{attrs:{id:"删除虚拟环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除虚拟环境","aria-hidden":"true"}},[a._v("#")]),a._v(" 删除虚拟环境")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("rmvirtualenv env27\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h4",{attrs:{id:"其他命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他命令","aria-hidden":"true"}},[a._v("#")]),a._v(" 其他命令")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("lsvirtualenv    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#列举所有的环境。")]),a._v("\n\ncdvirtualenv    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#导航到当前激活的虚拟环境的目录中，比如说这样您就能够浏览它的 site-packages。")]),a._v("\n\ncdsitepackages   "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 和上面的类似，但是是直接进入到 site-packages 目录中。")]),a._v("\n\nlssitepackages     "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#显示 site-packages 目录中的内容。")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br")])]),e("h2",{attrs:{id:"其他"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他","aria-hidden":"true"}},[a._v("#")]),a._v(" 其他")]),a._v(" "),e("ul",[e("li",[a._v("用"),e("code",[a._v("pip freeze")]),a._v("查看当前安装版本")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("pip freeze\npip freeze "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" requirements.txt   "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 生成模块和版本文件，便于环境搭建")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("blockquote",[e("p",[a._v("这将会创建一个 "),e("code",[a._v("requirements.txt")]),a._v(" 文件，其中包含了当前环境中所有包及各自的版本的简单列表。您可以使用 "),e("code",[a._v("pip list")]),a._v("在不产生requirements文件的情况下， 查看已安装包的列表。这将会使另一个不同的开发者在以后安装相同版本的相同包变得容易。")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("pip "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -r requirements.txt   "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装各个模块")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])])])},[],!1,null,null,null);s.default=r.exports}}]);