import {API} from '../constraints';

// let url = new URL(API.URL);
// url.searchParams.set('params',value);

export async function postAuth(params) {
  let buildUrl = API.URL + API.AUTH;
  // let buildUrl = new URL(API.AUTH,url);
  return await postMethod(buildUrl, params);
}

export async function getProduct(props) {
  let tail = !!props ? ('/' + props) : "";
  let buildUrl = API.URL + API.PRODUCTS + tail;
  // let buildUrl = new URL(API.PRODUCTS+tail,url);
  return await getMethod(buildUrl);
}

export async function getUser(prop) {
  let buildUrl = API.URL + API.USER + prop;
  // let buildUrl = new URL(API.USER + prop,url);
  return await getMethod(buildUrl);
}

async function postMethod(endpoint, data) {
  console.log('POST:: ', endpoint);
  return fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .catch(error => {
      console.error('Error:', error);
    });
}
async function getMethod(endpoint) {
  console.log('GET:: ', endpoint);
  return fetch(endpoint).then(resp => resp.json());
}
