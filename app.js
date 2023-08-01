const DomLibrary = {
  changeClassName: (selector, newClassName) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
        console.log(element, "elements");
        element.className = newClassName;
    });
  },

  getDataset: (selector) => {
    const element = document.querySelector(selector);
    return element ? element.dataset : null
  },
  
  injectNewElement: (newElement, targetElement) => {
    const parentElement = document.querySelector(targetElement);
    if(parentElement) {
        parentElement.appendChild(newElement);
    }
  },

  makeAjaxRequest: (url, options) => {
    return new Promise((resolve, reject) => {
        const data = new XMLHttpRequest();
        data.open(options.method || 'GET', url);
        data.onload = () => {
            if(data.status >= 200 && data.status <300) {
                resolve(data.response);
            } else {
                reject(data.statusText);
            }
        };
        data.onerror = () => {
            reject('Network Error');
        };
        data.send(options.body);
    });
  },

  getValue: (selector) => {
    const element = document.querySelector(selector);
    return element ? element.value : null;
  },

  setValue: (selector, value) => {
    const element = document.querySelector(selector);
    if(element) {
        element.value = value;
    }
  },
  
};



// 3 POST requests at the same time
const postData = { key: 'value' };
const promises = [
DomLibrary.makeAjaxRequest('/api/endpoint1', { method: 'POST', body: JSON.stringify(postData) }),
DomLibrary.makeAjaxRequest('/api/endpoint2', { method: 'POST', body: JSON.stringify(postData) }),
DomLibrary.makeAjaxRequest('/api/endpoint3', { method: 'POST', body: JSON.stringify(postData) }),
];

Promise.all(promises)
  .then((responses) => {
    console.log('requests resolved:', responses);
  })
  .catch((error) => {
    console.error('Error:', error);
  });