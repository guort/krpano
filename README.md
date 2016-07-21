# krpano 问题
learn  and problems

## hotspot部分

+ 引入动态热点，需要在tour.xml中添加一段如下脚本，必须在scene之外
```
<action name="do_crop_animation">
	<!-- 为热点注册属性 -->
	registerattribute(xframes, calc((imagewidth / %1) BOR 0));
	registerattribute(yframes, calc((imageheight / %2) BOR 0));
	registerattribute(frames, calc(xframes * yframes));
	registerattribute(frame, 0);
 
	set(crop, '0|0|%1|%2');
 
	setinterval(calc('crop_anim_' + name), calc(1.0 / %3),
		if(loaded,
			inc(frame);
			if(frame GE frames, if(onlastframe !== null, onlastframe() ); set(frame,0); );
			mod(xpos, frame, xframes);
			div(ypos, frame, xframes);
			Math.floor(ypos);
			mul(xpos, %1);
			mul(ypos, %2);
			calc(crop, xpos + '|' + ypos + '|%1|%2');
		  ,
			clearinterval(calc('crop_anim_' + name));
		  );
	  );
</action>

```
调用时 
```
onloaded="do_crop_animation(64,64, 60)"

```

+ 跳转问题

	+ 跳转到链接 openurl('www.baidu.com')
	+ 跳转场景 linkedscene="scene_b"
	+ 调用自定义的函数  
	在xml中想要引用js的话，必须是加上js（“代码”）   
	例如：
	```
	function tvm(){
	var a = 10;
	console.log(a);
}
//在xml 热点的onclick中添加

 onclick="js('tvm()')"

 ```
	






