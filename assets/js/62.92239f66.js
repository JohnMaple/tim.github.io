(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{453:function(s,t,a){"use strict";a.r(t);var n=a(8),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"redis-事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-事务","aria-hidden":"true"}},[s._v("#")]),s._v(" Redis 事务")]),s._v(" "),a("h2",{attrs:{id:"基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本使用","aria-hidden":"true"}},[s._v("#")]),s._v(" 基本使用")]),s._v(" "),a("p",[s._v("每个事务的操作都有begin、commit、rollback，begin指示事务的开始，commit指示事务的提交，rollback指示事务的回滚。形如：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("begin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("command2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("commit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Exception")]),s._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rollback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("redis也差不多，分别用multi指示事务的开始，exec指示事务的执行，discard指示事务的丢弃，用于在exec执行之前，丢弃事务缓存队列中的所有指令。reddis的事务不能算原子性，而仅仅满足了事务的隔离性-当前执行的事务有着不被其它事务打断的权利。形如")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("multi\nOK\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("set maxint 100\nQUEUED\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("incrby maxint 10\nQUEUED\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("exec\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("redis还提供了watch机制，一种乐观锁。watch会在事务开始之前盯住1个或者多个关键变量，当事务执行，也就是服务器收到了exec指令要顺序执行缓存的事务队列时，redis会检查关键变量自watch之后，是否被修改了。如果变量被修改，exec指令就会返回null回复客户端事务执行失败。")]),s._v(" "),a("h2",{attrs:{id:"redis的事务为什么不能支持回滚"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis的事务为什么不能支持回滚","aria-hidden":"true"}},[s._v("#")]),s._v(" redis的事务为什么不能支持回滚?")]),s._v(" "),a("ul",[a("li",[s._v("Redis先执行命令，命令执行成功后才会记录日志，所以出现错误时无法回滚。")]),s._v(" "),a("li",[s._v("Redis 命令只会因为错误的语法而失败（并且这些问题不能在入队时发现），或是命令用在了错误类型的键上面。这也就是说，从实用性的角度来说，失败的命令是由编程错误造成的，而这些错误应该在开发的过程中被发现，而不应该出现在生产环境中。因为不需要对回滚进行支持，所以 Redis 的内部可以保持简单且快速。")])])])},[],!1,null,null,null);t.default=e.exports}}]);