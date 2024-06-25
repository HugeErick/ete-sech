document.querySelector('#app').innerHTML = `
  <div>
		<h1 class="bg-orange-400"> hi </h1>   
  </div>
`

document.getElementById('postBtn').addEventListener('click', () => {
	fetch('https://server-uno.vercel.app/api/data', {
		method: 'Post',
		headers: {
			'Content-Type' : 'applications/json'
		},
		body: JSON.stringify({ message: 'Hello from the frontend!' })
	})
	.then(response => response.json())
	.then(data => {
			console.log('Success: ', data);
			alert('Data received successfully');
		})
		.catch((error) => {
			console.error('Error', error);
		});
});

