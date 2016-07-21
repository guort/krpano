// 自定义函数
function tvm(){
	var a = 10;
	var tips = document.getElementById('tips');
	var warn = tips.firstElementChild;
	tips.style.display = 'block';
	warn.onclick = function(){
		tips.style.display = 'none';
	}
}