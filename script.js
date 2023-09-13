const myID = 'd0c79d40d9a043e5b3f018b595732e04';
const secret = '412b9c1cad8842c5a95f60de2f5cb5ee';
let types=['artist','track','playlist'];
async function getToken() {
  try{
  const authResponse = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: `grant_type=client_credentials&client_id=${myID}&client_secret=${secret}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  console.log("Auth Response:", authResponse);
  const data = await authResponse.json();
  console.log("Token:", data.access_token);
  return data.access_token;
} catch(error) {
  console.error('Error fetching token',error);
}
}
async function searchSpotify(query) {
  try{
    const token = await getToken();
    const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=${types.toString()}`,{
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(data);
  }
  catch(error){
    console.error('Error fetching data:', error)
  }
}
function queryHandler(query) {
let formatedQuery = query.replaceAll(' ','%20');
if(formatedQuery.length>1){
  searchSpotify(formatedQuery);
}
}
const typesBtns = document.querySelectorAll('.search-filter');


function typeBtnHandler(btn) {
  
    let type = btn.getAttribute('typevalue'); 
    typesBtns.forEach(btn => btn.classList.remove('checked'));
    types=[];
    types.push(type);  
    btn.classList.toggle('checked');
  
}

function dataHandler(data) {
  const 
  switch (types.toString()) {
    case "artist,track,playlist":{

    }
    case "artist": {

    }
  }
} 
  



