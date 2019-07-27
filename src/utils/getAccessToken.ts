const getAccessToken = (cookie) => {
    try {
        const {access_token} = cookie;
        return access_token;
    } catch (e) {
        throw new Error("Unauthorized")
    }
};
export default getAccessToken