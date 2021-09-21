const urlencoded = (data) => {
    const formBody = [];

    for (const property in data) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(data[property]);

        formBody.push(`${encodedKey}=${encodedValue}`);
    }
    
    const str = formBody.join('&');

    return str;
};

export default urlencoded;