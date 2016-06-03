# kof 系列 jQuery 插件之 `拖拽` 插件

jquery.kof.drag.js

---

说明：文件中有两个 `javascript` 文件

> `jquery.kof.drag.js` 是封装的 `jQuery` 插件  

> `javascript.drag.js` 是写的原生的 `javascript` 拖拽 

---

## `jquery.kof.drag.js` jQuery 插件说明

首先引入 `jQuery` 和 `jquery.kof.drag.js` 

```
	<script src="javascript/jquery-1.9.0.min.js"></script>
	<script src="javascript/jquery.kof.drag.js"></script>
```

然后给需要拖拽的元素添加 `id` 或 `class`

初始化：

```
	<script>

		$(".drag").drag({ x: 300, y: 300 });

	</script>
```

参数说明：

> **x** 为可拖拽的最大偏移 `横` 坐标，以初始位置为标准

> **y** 为可拖拽的最大偏移 `纵` 坐标，以初始位置为标准

```
	$(selector).drag({ 
		x: 300,
		y: 300
	});
```

PS: 最好不要给拖拽的元素使用 `top` `left` 属性

---

后面的那个原生拖拽可以作为参考
