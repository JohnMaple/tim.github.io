(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{467:function(s,a,t){"use strict";t.r(a);var e=t(8),n=Object(e.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"dockerfile-介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile-介绍","aria-hidden":"true"}},[s._v("#")]),s._v(" Dockerfile 介绍")]),s._v(" "),t("p",[s._v("Dockerfile是由一系列命令和参数构成的脚本，这些命令应用于基础镜像并最终创建一个新的镜像。它们简化了从头到尾的流程并极大的简化了部署工作。Dockerfile从FROM命令开始，紧接着跟随者各种方法，命令和参数。其产出为一个新的可以用于创建容器的镜像。")]),s._v(" "),t("h2",{attrs:{id:"dockerfile-语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile-语法","aria-hidden":"true"}},[s._v("#")]),s._v(" Dockerfile 语法")]),s._v(" "),t("p",[s._v("Dockerfile语法由两部分构成，注释和命令+参数")]),s._v(" "),t("div",{staticClass:"language-docker line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-docker"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Line blocks used for commenting")]),s._v("\ncommand argument argument ..\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("一个简单的例子：")]),s._v(" "),t("div",{staticClass:"language-docker line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-docker"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Print ")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello docker!"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" echo "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello docker!"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"dockerfile-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile-命令","aria-hidden":"true"}},[s._v("#")]),s._v(" Dockerfile 命令")]),s._v(" "),t("p",[s._v("Dockerfile有十几条命令可用于构建镜像，下文将简略介绍这些命令。")]),s._v(" "),t("h3",{attrs:{id:"组成部分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组成部分","aria-hidden":"true"}},[s._v("#")]),s._v(" 组成部分")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"center"}},[s._v("部分")]),s._v(" "),t("th",{staticStyle:{"text-align":"center"}},[s._v("命令")])])]),s._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"center"}},[s._v("基础镜像信息")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("FROM")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[s._v("维护者信息")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("MAINTAINER")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[s._v("镜像操作指令")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("RUN、COPY、ADD、EXPOSE、WORKDIR、ONBUILD、USER、VOLUME等")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[s._v("容器启动时执行指令")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("CMD、ENTRYPOINT")])])])]),s._v(" "),t("h3",{attrs:{id:"from"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#from","aria-hidden":"true"}},[s._v("#")]),s._v(" FROM")]),s._v(" "),t("p",[s._v("FROM命令可能是最重要的Dockerfile命令。改命令定义了使用哪个基础镜像启动构建流程。基础镜像可以为任意镜 像。如果基础镜像没有被发现，Docker将试图从Docker image index来查找该镜像。FROM命令必须是Dockerfile的首个命令。")]),s._v(" "),t("div",{staticClass:"language-docker line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-docker"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Usage: FROM [image name]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" ubuntu \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"maintainer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maintainer","aria-hidden":"true"}},[s._v("#")]),s._v(" MAINTAINER")]),s._v(" "),t("p",[s._v("我建议这个命令放在Dockerfile的起始部分，虽然理论上它可以放置于Dockerfile的任意位置。这个命令用于声明作者，并应该放在FROM的后面。")]),s._v(" "),t("div",{staticClass:"language-docker line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-docker"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Usage: MAINTAINER [name]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("MAINTAINER")]),s._v(" authors_name \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run","aria-hidden":"true"}},[s._v("#")]),s._v(" RUN")]),s._v(" "),t("p",[s._v("RUN命令是Dockerfile执行命令的核心部分，它接受命令作为参数并用于创建镜像；不像CMD命令，RUN命令用于创建镜像（在之前commit的层之上形成新的层），可使用\\来换行。")]),s._v(" "),t("div",{staticClass:"language-docker line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-docker"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Usage: RUN [command]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" aptitude install "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("y riak\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" echo "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello docker!'")]),s._v(" \\\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v(" /usr/local/file.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v('也可以使用exec格式RUN ["executable", "param1", "param2"]的命令，如：')]),s._v(" "),t("div",{staticClass:"language-docker line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-docker"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"apt-get"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"install"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-y"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("要注意的是，"),t("code",[s._v("executable")]),s._v("是命令，后面的"),t("code",[s._v("param")]),s._v("是参数")]),s._v(" "),t("h3",{attrs:{id:"copy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#copy","aria-hidden":"true"}},[s._v("#")]),s._v(" COPY")]),s._v(" "),t("p",[s._v("将主机的文件复制到镜像内，如果目的位置不存在，Docker会自动创建所有需要的目录结构，但是它只是单纯的复制，并不会去做文件提取和解压工作。如：")]),s._v(" "),t("div",{staticClass:"language-docker line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-docker"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" application.yml /etc/springboot/hello"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("service/src/resources\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("ul",[t("li",[s._v("需要复制的目录一定要放在Dockerfile文件的同级目录下")]),s._v(" "),t("li",[s._v("因为构建环境将会上传到Docker守护进程，而复制是在Docker守护进程中进行的。任何位于构建环境之外的东西都是不可用的。COPY指令的目的的位置则必须是容器内部的一个绝对路径。")])])]),s._v(" "),t("h3",{attrs:{id:"add"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add","aria-hidden":"true"}},[s._v("#")]),s._v(" ADD")]),s._v(" "),t("p",[s._v("ADD命令有两个参数，源和目标。它的基本作用是从源系统的文件系统上复制文件到目标容器的文件系统。如果源是一个URL，那该URL的内容将被下载并复制到容器中")]),s._v(" "),t("div",{staticClass:"language-docker line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-docker"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Usage: ADD [source directory or URL] [destination directory]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" /my_app_folder /my_app_folder\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" application.yml /etc/springboot/hello"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("service/src/resources\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("但是ADD会对压缩文件（tar, gzip, bzip2, etc）做提取和解压操作。")]),s._v(" "),t("h3",{attrs:{id:"expose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expose","aria-hidden":"true"}},[s._v("#")]),s._v(" EXPOSE")]),s._v(" "),t("p",[s._v("EXPOSE用来指定端口，使容器内的应用可以通过端口和外界交互。启动镜像时，使用-P参数来讲镜像端口与宿主机的随机端口做映射。使用方式（可指定多个）。")]),s._v(" "),t("div",{staticClass:"language-docker line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-docker"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Usage: EXPOSE [port]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXPOSE")]),s._v(" 8080\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXPOSE")]),s._v(" 8081\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"cmd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cmd","aria-hidden":"true"}},[s._v("#")]),s._v(" CMD")]),s._v(" "),t("p",[s._v("和RUN命令相似，CMD可以用于执行特定的命令。和RUN不同的是，这些命令不是在镜像构建的过程中执行的，而是在用镜像构建容器后被调用。")]),s._v(" "),t("div",{staticClass:"language-docker line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-docker"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Usage 1: CMD application ")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"argument"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"argument"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ..\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello docker!"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" /bin/bash\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/bin/bash"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 同样可以使用exec语法")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("当有多个CMD的时候，只有最后一个生效")]),s._v(" "),t("h3",{attrs:{id:"workdir"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#workdir","aria-hidden":"true"}},[s._v("#")]),s._v(" WORKDIR")]),s._v(" "),t("p",[s._v("WORKDIR命令用于设置CMD指明的命令的运行目录，之后的命令都是基于此工作目录，如果不存在，则会创建目录。")]),s._v(" "),t("div",{staticClass:"language-docker line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-docker"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Usage: WORKDIR /path")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /usr/local\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" webservice\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" echo "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello docker'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v(" text.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("最终会在/usr/local/webservice/目录下生成text.txt文件")]),s._v(" "),t("h3",{attrs:{id:"volume"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#volume","aria-hidden":"true"}},[s._v("#")]),s._v(" VOLUME")]),s._v(" "),t("p",[s._v("VOLUME命令用于让你的容器访问宿主机上的目录。比如你可以将mongodb镜像中存储数据的data文件指定为主机的某个文件。(容器内部建议不要存储任何数据)。")]),s._v(" "),t("div",{staticClass:"language-docker line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-docker"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Usage: VOLUME [")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/dir_1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/dir_2"')]),s._v(" .."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VOLUME")]),s._v(" /data/db /data/configdb\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("注意:"),t("code",[s._v("VOLUME 主机目录 容器目录")])]),s._v(" "),t("h3",{attrs:{id:"user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#user","aria-hidden":"true"}},[s._v("#")]),s._v(" USER")]),s._v(" "),t("p",[s._v("指定该镜像以什么样的用户去执行")]),s._v(" "),t("div",{staticClass:"language-docker line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-docker"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Usage: USER [UID]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" mongo\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"env"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#env","aria-hidden":"true"}},[s._v("#")]),s._v(" ENV")]),s._v(" "),t("p",[s._v("ENV命令用于设置环境变量。这些变量以”key=value”的形式存在，并可以在容器内被脚本或者程序调用。这个机制给在容器中运行应用带来了极大的便利。")]),s._v(" "),t("div",{staticClass:"language-docker line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-docker"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Usage: ENV key value")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" SERVER_WORKS 4\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"entrypoint"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#entrypoint","aria-hidden":"true"}},[s._v("#")]),s._v(" ENTRYPOINT")]),s._v(" "),t("p",[s._v("配置容器启动后执行的命令，并且不可被 docker run 提供的参数覆盖。")]),s._v(" "),t("blockquote",[t("ul",[t("li",[s._v("每个 Dockerfile 中只能有一个 ENTRYPOINT，当指定多个时，只有最后一个起效。")]),s._v(" "),t("li",[s._v("ENTRYPOINT 帮助你配置一个容器使之可执行化，如果你结合CMD命令和ENTRYPOINT命令，你可以从CMD命令中移除“application”而仅仅保留参数，参数将传递给ENTRYPOINT命令。")])])]),s._v(" "),t("div",{staticClass:"language-docker line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-docker"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Usage: ENTRYPOINT application ")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"argument"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"argument"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ..\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Remember: arguments are optional. They can be provided by CMD")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# or during the creation of a container.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENTRYPOINT")]),s._v(" echo\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Usage example with CMD:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Arguments set with CMD can be overridden during *run*")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello docker!"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENTRYPOINT")]),s._v(" echo\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("作用和用法和CMD一模一样")]),s._v(" "),t("h4",{attrs:{id:"cmd和entrypoint的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cmd和entrypoint的区别","aria-hidden":"true"}},[s._v("#")]),s._v(" CMD和ENTRYPOINT的区别")]),s._v(" "),t("p",[s._v("CMD的命令会被 docker run 的命令覆盖而ENTRYPOINT不会")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/wo18237095579/article/details/80540571#entrypoint-%E5%85%A5%E5%8F%A3%E7%82%B9",target:"_blank",rel:"noopener noreferrer"}},[s._v("ENTRYPOINT详解"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"dockerfile-示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile-示例","aria-hidden":"true"}},[s._v("#")]),s._v(" Dockerfile 示例")]),s._v(" "),t("h3",{attrs:{id:"简单示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简单示例","aria-hidden":"true"}},[s._v("#")]),s._v(" 简单示例")]),s._v(" "),t("h4",{attrs:{id:"构建dockerfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建dockerfile","aria-hidden":"true"}},[s._v("#")]),s._v(" 构建dockerfile")]),s._v(" "),t("div",{staticClass:"language-docker line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-docker"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" alpine"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("latest\t\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 基础镜像，从哪个镜像创建")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("MAINTAINER")]),s._v("\tEthan\t\t\t\t  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 维护者")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" echo "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello world'")]),s._v("\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行命令")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h4",{attrs:{id:"构建镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建镜像","aria-hidden":"true"}},[s._v("#")]),s._v(" 构建镜像")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("docker build -t hello_docker "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[t("code",[s._v(".")]),s._v(" 表示当前路径下所有文件到添加到镜像里面")]),s._v(" "),t("li",[t("code",[s._v("-t")]),s._v(" 表示添加标签，标签名为 "),t("code",[s._v("hello_docker")])])]),s._v(" "),t("h3",{attrs:{id:"创建nginx的镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建nginx的镜像","aria-hidden":"true"}},[s._v("#")]),s._v(" 创建Nginx的镜像")]),s._v(" "),t("h4",{attrs:{id:"nginx简述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx简述","aria-hidden":"true"}},[s._v("#")]),s._v(" Nginx简述")]),s._v(" "),t("p",[s._v("Nginx是一个高性能的 HTTP 和 反向代理 服务器。它因为它的轻量级，易用，易于扩展而流行于业界。基于优良的架构设计，它能够比之前的类似软件处理更多的请求。它也可以用来提供静态文件服务，比如图片，脚本和CSS。")]),s._v(" "),t("h4",{attrs:{id:"构建nginx的dockerfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建nginx的dockerfile","aria-hidden":"true"}},[s._v("#")]),s._v(" 构建nginx的Dockerfile")]),s._v(" "),t("p",[s._v("从基础镜像开始，运用FROM命令和MAINTAINER命令")]),s._v(" "),t("div",{staticClass:"language-docker line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-docker"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("############################################################")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Dockerfile to build Nginx Installed Containers")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Based on Ubuntu")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("############################################################")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Set the base image to Ubuntu")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" ubuntu\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# File Author / Maintainer")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("MAINTAINER")]),s._v(" Maintaner Name\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Install Nginx")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Add application repository URL to the default sources")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" echo "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb http://archive.ubuntu.com/ubuntu/ raring main universe"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v(" /etc/apt/sources.list\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Update the repository")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("get update\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Install necessary tools")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("get install "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("y nano wget dialog net"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("tools\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Download and Install Nginx")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("get install "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("y nginx\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Remove the default Nginx configuration file")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" rm "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("v /etc/nginx/nginx.conf\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Copy a configuration file from the current directory")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" nginx.conf /etc/nginx/\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Append ")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"daemon off;"')]),s._v(" to the beginning of the configuration\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" echo "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"daemon off;"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v(" /etc/nginx/nginx.conf\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Expose ports")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXPOSE")]),s._v(" 80\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Set the default command to execute")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# when creating a new container")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" service nginx start\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br")])]),t("h4",{attrs:{id:"构建镜像-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建镜像-2","aria-hidden":"true"}},[s._v("#")]),s._v(" 构建镜像")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker build -t nginx "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[t("code",[s._v(".")]),s._v(" 表示当前路径下所有文件到添加到镜像里面，")]),s._v(" "),t("li",[t("code",[s._v("-t")]),s._v(" 表示添加标签，标签名为 "),t("code",[s._v("nginx")])])])])},[],!1,null,null,null);a.default=n.exports}}]);