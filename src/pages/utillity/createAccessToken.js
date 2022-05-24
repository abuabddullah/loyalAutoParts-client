
const createAccessToken = (email) => {
    const currentUser = { email: email };
    if (email) {
        fetch(`https://stark-chamber-79715.herokuapp.com/login/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('data inside useToken', data);
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);
            })
    }
};

export default createAccessToken;