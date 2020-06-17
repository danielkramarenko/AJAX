
const url = new URL('http://cors-test.appspot.com/test');
const xhrGet = new XMLHttpRequest();
const xhrPost = new XMLHttpRequest();
const xhrWeird = new XMLHttpRequest();

const text1 = document.querySelector('.get');
const text2 = document.querySelector('.post');
const text3 = document.querySelector('.weird');
/* eslint no-param-reassign: ["error", { "props": false }] */
function htmlRequest(request, typeRequest, text) {
  request.open(typeRequest, url, true);
  request.send();

  request.onload = function() {
    console.log(`Статус: ${request.status}, ${request.statusText}, ${request.response}, ${request.readyState}`);
    if (request.status === 200 && request.readyState === 4) {
      text.style.color = 'green';
      text.style.fontStyle = 'bold';
      text.textContent = 'OK';
    }
  };

  request.onerror = function() {
    text.style.color = 'red';
    text.style.fontStyle = 'bold';
    text.textContent = 'Failed';
  };
}

htmlRequest(xhrGet, 'GET', text1);
htmlRequest(xhrPost, 'POST', text2);
htmlRequest(xhrWeird, 'WEIRD', text3);