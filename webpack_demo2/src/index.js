'use strict';

const axios = require('axios');

axios({
  method: 'get',
  url: '/test_proxy'  
}).then(res => {
	console.log(res.data);
	//document.getElementById('includeHtml').innerHTML = res.data;	
}).catch(err => {
	console.log(err);
});
