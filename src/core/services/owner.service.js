export function getOwnerList() {
    return fetch('http://agl-developer-test.azurewebsites.net/people.json', {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
        })
    }).then(response => response.json());
}
