class Qipan {
	constructor(w, h, id){
		this.w = w
		this.h = h
		this.box = document.getElementById(id)
	}
	init(){
		var _this = this
		var tpl = "<ul class='point clearfix'>"
		var tem = ''
		for (var i = 0;i < _this.w;i++) {
			tpl += '<li></li>'
		}
		tpl += '</ul>'
		for(var j = 0;j < _this.h;j++){
			tem += tpl
		}
		_this.box.innerHTML = tem
		_this.box.style.width = 20 * _this.w +'px'
	}
	getQi () {
		var _this = this
		var arr = []
		for (var i = 0;i < _this.h; i++) {
			arr.push(new Array())
			for (var j = 0;j < _this.w;j++){
				arr[i].push({flog : false,newFlog: '', site:[i, j]})
			}
		}
		return arr
	}
}
//export default Qipan