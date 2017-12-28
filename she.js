class Snake {
	constructor(qipan,h){
		this.qipan = qipan
		this.h = h
		this.h2 = JSON.parse(JSON.stringify(h))
		this.direct = 'left'
		this.que = []
	}
	init () {
		var _this = this
		_this.qipan.forEach(item=>{
			item.forEach(items=>{
				items.flog = ''
			})
		})
		
		console.log(_this.h == _this.h2)
		
		
		if (_this.que.length !== 0) {
			_this.h = JSON.parse(JSON.stringify(_this.h2))
			_this.que = []
			clearInterval(time)
			time = null
		} 
			_this.qipan[_this.h[0]][_this.h[1]].flog = 'snake'
			_this.qipan[_this.h[0]][_this.h[1] + 1].flog = 'snake'
			_this.que.push(_this.qipan[_this.h[0]][_this.h[1]])
			_this.que.push(_this.qipan[_this.h[0]][_this.h[1] + 1])
		
	}
	getUp(){
		var _this = this
		_this.direct = 'up'
	}
	getLeft() {
		var _this = this
		_this.direct = 'left'
	}
	getRight(){
		var _this = this
		_this.direct = 'right'
	}
	getDown(){
		var _this = this
		_this.direct = 'down'
	}
	getGo (){
		var _this = this
		switch (_this.direct) {
			case 'left':
				wooL(_this.qipan[_this.h[0]][_this.h[1] - 1])
				break
			case 'right':
				wooR(_this.qipan[_this.h[0]][_this.h[1] + 1])
				break
			case 'up':
				if (_this.qipan[_this.h[0] - 1]) {
					wooU(_this.qipan[_this.h[0] - 1][_this.h[1]])
				} else {
					_this.init()
				}
				
				break
			case 'down':
				if (_this.qipan[_this.h[0] + 1]) {
					wooD(_this.qipan[_this.h[0] + 1][_this.h[1]])
				} else {
					_this.init()
				}
				
				break
		}
		function wooL (oo) {
			if (oo) {
				if (oo.flog === '') {
					oo.flog = 'snake'
					_this.h[1] -= 1
					_this.que.unshift(oo)
					_this.que[_this.que.length - 1].flog = ''
					_this.que.pop()
				} else if (oo.flog === 'snake') {
					_this.init()
					food.init()
				} else if (oo.flog === 'food') {
					eat(oo)
				}
			} else {
				
				_this.init()
				food.init()
				
			}
			
		}
		function wooR (oo) {
			if (oo) {
				if (oo.flog === '') {
					oo.flog = 'snake'
					_this.h[1] += 1
					_this.que.unshift(oo)
					_this.que[_this.que.length - 1].flog = ''
					_this.que.pop()
					console.log(_this.qipan)
				} else if (oo.flog === 'snake') {
					_this.init()
					food.init()
				} else if (oo.flog === 'food') {
					eat(oo)
				}
			} else {
				_this.init()
				food.init()
			}
			
		}
		function wooU (oo) {
			if (oo) {
				if (oo.flog === '') {
					oo.flog = 'snake'
					_this.h[0] -= 1
					_this.que.unshift(oo)
					_this.que[_this.que.length - 1].flog = ''
					_this.que.pop()
					console.log(_this.qipan)
				} else if (oo.flog === 'snake') {
					_this.init()
					food.init()
				} else if (oo.flog === 'food') {
					eat(oo)
				}
			} else {
				_this.init()
				food.init()
			}
			
		}
		function wooD (oo) {
			if (oo) {
				if (oo.flog === '') {
					oo.flog = 'snake'
					_this.h[0] += 1
					_this.que.unshift(oo)
					_this.que[_this.que.length - 1].flog = ''
					_this.que.pop()
					console.log(_this.qipan)
				} else if (oo.flog === 'snake') {
					_this.init()
					food.init()
				} else if (oo.flog === 'food') {
					eat(oo)
				}
			} else {
				_this.init()
				food.init()
			}
			
		}
		function eat (oo) {
			oo.flog = 'snake'
			_this.que.unshift(oo)
			_this.h = JSON.parse(JSON.stringify(oo.site))
			food.init()
		}
	}
}
