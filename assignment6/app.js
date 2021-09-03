function downloadfile(url, downloaded)
{
	console.log(`start the downloading ${url}`); 
	setTimeout(()=>
	{
      const path = url.split('/').pop();
      downloaded(path)
	} ,5000);
}  
function compressfile(path,compress)
{
	console.log(`Start the compressing ${path}`);
	setTimeout(()=>
	{
      const compresspath= path.split('.')[0] +'.zip';  
      compress(compresspath);
	},5000);
	
}
 
function uploadfile(compresspath,upload)
{
	console.log(`start the uploading ${compresspath}`);
	setTimeout(()=>
	{const uploaded= `http://localsystem/${compressPath}`; 
        upload(uploaded);
   },3000

	);
}

downloadfile('http://facebook.com/profile.jpg',
	function(path){
		console.log(`File download completely ${path}`); 
	  
compressfile(path,function(compresspath)
{
console.log(`File compressed completely ${compresspath}`); 
 
uploadfile(compresspath,function(uploaded)
{
console.log(`File uploaded completely ${uploaded}`); 
});
 }); 

});
