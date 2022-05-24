
const createAccessToken = (email) => {
    const currentUser = { email: email };
    if (email) {
        fetch(`http://localhost:5000/login/${email}`, {
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