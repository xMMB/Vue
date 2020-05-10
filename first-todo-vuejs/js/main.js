/*
// #Ex1 Data
new Vue({
	el: '#vue_app',
	data: {
		message: 'Hello Vue.js!',
		status: 0,
		isActive: true,
		isBtn: true,
		width: 100
	}
});
*/

/*
// Ex2 Methods
new Vue({
	el: '#vue',
	data: {
		list: ['One', 'Two', 'Three'],
		users: [
			{
				id: 1,
				name: 'Poke'
			},
			{
				id: 2,
				name: 'Mare'
			}
		]
	},
	methods: {
		func1()
		{
			console.log(1);
		},
		func2()
		{
			console.log(2);
		}
	}
});
*/

/*
// Ex3 Created
new Vue({
	el: '#vue',
	data: {
		counter: 1
	},
	created: function()
	{
		this.counter = 3;
		this.high();
	},
	methods: {
		high()
		{
			this.counter++;
		}
	}
});

*/

var vueApp = new Vue({
	el: '#vue',
	data: {
		hashtags: [],
		cities: [],
		textSearch: '',
		url: {
			hashtags: 'https://dka-develop.ru/api?type=hashtag',
			cities: 'https://dka-develop.ru/api?type=city'
		}
	},
	watch: {
		textSearch: function()
		{
			if ( this.textSearch.length > 3 )
				this.textSearch = 'Меняем содержимое поля из кода';
		}
	},
	created: function()
	{
		console.log(this.url.hashtags);
	},
	methods: {
		myAxios(url, dataKey)
		{
			axios.get(url)
				.then((response) => {
					console.log(response);
					this[dataKey] = response.data;
				});
		}
	}
});























