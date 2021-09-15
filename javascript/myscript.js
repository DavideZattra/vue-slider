var app = new Vue(
	{
		el : '#app',

		data : {
			images: [
				{src : 'https://www.terranuova.it/var/terranuova/storage/images/news/attualita/cani-ecco-come-i-cuccioli-imparano-dall-uomo/1338268-1-ita-IT/Cani-ecco-come-i-cuccioli-imparano-dall-uomo_articleimage.jpg', alt : ''},
				{src : 'https://lh3.googleusercontent.com/proxy/SgMrp8CZm9ExCy9hbi9aS_WXCPtE6ZYzLajLDS6xO1vKthvWLqIWSKrBpL5A8G5fWSKC_usvE4qinLtxAQ5Y3fhJzgu4w36n2831RODD5KpkirK1iO42m7-p_DJKayHNtopIx0ueR-WreYncCRZN7_tzFhJgDeDwsA7aWW8MLrm1YKduog', alt : ''}
			],	

			imgIndex : 0,
		},

		methods: {
			
			previousImg : function(){
				this.imgIndex--;
				
				if(this.imgIndex < 0){
					this.imgIndex = this.images.length - 1;
				}
				console.log(this.imgIndex);
			},

		
			nextImg : function(){
				this.imgIndex++;
				
				if(this.imgIndex >= this.images.length){
					this.imgIndex = 0;
				}
				console.log(this.imgIndex);
			}
				
		},

	}
);