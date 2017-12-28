class Food {
	constructor (qipan) {
		this.qipan = qipan
	}
	init() {
		var _this = this
		var arr = []
		_this.qipan.forEach(item=>{
			item.forEach(items=>{
				if(items.flog !== 'snake') {
					arr.push(items)
				}
			})
		})
		arr[Math.floor(Math.random()*arr.length)].flog = 'food'
	}
}
