const API_ROOT = 'https://swapi-api.hbtn.io/api/';
const API_PEOPLE = 'people';

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

// Async functions
(async () => {
    const body = await getApiResources(API_ROOT + API_PEOPLE);
    console.log(body)
})();

// Promises
// getApiResources(API_ROOT + API_PEOPLE)
//   .then(body => console.log(body));
    