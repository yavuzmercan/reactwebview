import 'isomorphic-fetch';

const worktype = 'dev';
export function getApiUrl() {

    let localapi = 'https://app.toptankoyurunleri.com/api/api/';
    let prodapi = 'https://app.silifkesepeti.com/api/';

    let rootUrl = prodapi;
    if (worktype == 'dev') {
        rootUrl = localapi;
    }
    return rootUrl;
}

export function getData(method, methodType, data) {
    let options = {
        method: methodType,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (methodType === 'POST') {
        options.body = JSON.stringify(data);
    }
    console.log('getApiUrl()+method:', getApiUrl() + method);
    /*console.log('options:', options);

    console.log('body:', options.body);
  */

    return fetch(getApiUrl() + method, options)
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            return {
                data:json

            }
        })
        .catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            // ADD THIS THROW error
            throw error;
        });


    // return fetch(getApiUrl() + method, options)
    //     .then((res) => {
    //         //console.log('service retun:', res);
    //         return res.json();
    //     })
    //     .then((data) => {
    //         return data;
    //     })
    //     .catch(function (error) {
    //         console.log('err: ' + JSON.stringify(error));
    //         // ADD THIS THROW error
    //         throw error;
    //     });
}


