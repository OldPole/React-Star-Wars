export const getApiResources = async (url) => {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            console.error('Could not Fetch.', res.status);
            return false;
        }

        return await res.json();
    } catch (error) {
        console.error('Could not Fetch.', error.message);
        return false;
    }
}

export const makeCurrentRequest = async (urls) => {
    const res = await Promise.all(urls.map(url => {
        return fetch(url).then(res => res.json());
    }));

    return res;
}

// Async functions
//(async () => {
//    const body = await getApiResources(API_ROOT + API_PEOPLE);
//    console.log(body)
//})();

// Promises
// getApiResources(API_ROOT + API_PEOPLE)
//   .then(body => console.log(body));
    