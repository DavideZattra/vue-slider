var app = new Vue(
	{
		el : '#app',

		data : {
			images: [
				{
					url : 'img/puppie-1.jpg', 
					alt : 'Border Collie Puppy'
				},
				{
					url : 'img/puppie-2.jpg', 
					alt : 'Labrador Chocolate Puppy'},
				{
					url : 'img/puppie-3.jpg', 
					alt : 'Puppy'
				},
				{
					url : 'img/puppie-4.jpg', 
					alt : 'Another Labrador Chocolate Puppy'
				},
				{
					url : 'img/puppie-5.jpg', 
					alt : 'Husky Puppy'
				},
				{
					url : 'img/puppie-6.jpg', 
					alt : 'Another Husky Puppy'
				},
				
					{url : 'img/golden_lab_poo.jpeg', 
					alt : 'Stop looking at me!!!'
				},			
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
			},
			
			navImg : function(imgIndex){
				this.imgIndex = imgIndex;
				
			}
		},

	}
);