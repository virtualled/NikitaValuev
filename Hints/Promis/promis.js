const output = document.getElementById('output');

// const getData = (url, outputData) =>{
//
//     return Promise((resolve,reject) =>{
//
//     });
//
//     const request = new XMLHttpRequest();
//     request.open('GET', url);
//     request.addEventListener('readystatechange',() =>{
//         if (request.readyState !==4){
//             return;
//         }
//         if (request.status === 200){
//             const response = JSON.parse(request.responseText);
//             outputData(response);
//         }else{
//             console.error(request.statusText);
//         }
//     });
//     request.send();
// };

// const outputPhoto = (data) =>{
//     const random = Math.floor(Math.random()* data.length);
//     const obj = data[random];
//     output.innerHTML = `<h2>${obj.title}</h2>>
//                         <img src="${obj.url}">`;
//     console.log(obj);
// };
// getData('https://jsonplaceholder.typicode.com/photos',outputPhoto);


const getData = (url) =>{

    return new Promise((resolve,reject) =>{
        const request = new XMLHttpRequest();
        request.open('GET', url);
        request.addEventListener('readystatechange',() =>{
            if (request.readyState !==4){
                return;
            }
            if (request.status === 200){
                const response = JSON.parse(request.responseText);
                resolve(response);
            }else{
                reject(request.statusText);
            }
        });
        request.send();

    });


};

const outputPhoto = (data) =>{
    const random = Math.floor(Math.random()* data.length);
    const obj = data[random];
    output.innerHTML = `<h4>${obj.title}</h4>
                        <img src="${obj.thumbnailUrl}">`;
    console.log(obj);
};


getData('https://jsonplaceholder.typicode.com/photos')
    .then(outputPhoto)
        .catch(error => console.error(error));