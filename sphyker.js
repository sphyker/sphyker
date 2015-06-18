
(function(W,D){
	var SP = function(query){
		return new lib(query);
	};

	SP.set = {
		"version" : "1.0.0",
		"debug" : false
	};

	var lib = function(query){
		var selector = D.querySelectorAll(query);

		this.length = selector.length;

		for(var i = 0; i < this.length; i++){
			this[i] = selector[i];
		}

		return this;
	};

	SP.util = {
		capitalizeFirstLetter : function(string){
			if(string==undefined) return;
			return string.charAt(0).toUpperCase() + string.slice(1);
		},
		arrayJoinCamelCase : function(string,delimiter){
			if(string == undefined || delimiter == undefined) return;

			string = string.split(delimiter);
			for(var i = 0; i < string.length; i++){
				if(i!==0){
					string[i] = SP.util.capitalizeFirstLetter(string[i]);
				}
			}
			return string.join().replace(",","");
		}
	};

	SP.fn = lib.prototype = {

		hide : function(){
			var len = this.length;
			while(len--){
				this[len].style.display = 'none';
			} 

			return this;
		},

		show : function(){
			var len = this.length;
			while(len--){
				this[len].style.display = 'block';
			}

			return this;
		},

		remove : function(flag){
			if(flag == undefined) return;
			
			var len = this.length,obj=[];
			while(len--){
				obj.push(this[len].parentElement.removeChild(this[len]));
			}

			return (flag) ? obj : this;
		},

		css : function(obj){
			if(obj == undefined) return;

			var len = this.length;
			while(len--){
				for(prop in obj){
					this[len].style[(prop.indexOf("-") !== -1) ? SP.util.arrayJoinCamelCase(prop,"-") : prop] = obj[prop];
				}
			}
			return this;
		},

		attr : function(attr,set){
			if(attr == undefined) return;

			var len = this.length, arr = [];
			while(len--){
				(set == "" || set == undefined) ? arr.push(this[len].getAttribute(attr)) : this[len].setAttribute(attr, set);
			}
			return (set) ? this : arr;
		}
	};

	if(!window.SP || !window._S){
		window.SP = window._S = SP;
	}
})(window, document, undefined);


