import verifyToken from "../utils/verifyToken";
import getAccessToken from "../utils/getAccessToken";

const auth = (req, res, next) => {
    try {
        let access_token = getAccessToken(req.cookies);
        if (access_token) {
            verifyToken(access_token)
                .then(user => {
                    if (user) return next();
                })
                .catch(() => res.status(401).json({error: "Unauthorized"}))
        } else {
            res.status(401).json({error: "Unauthorized"});
        }
    } catch (e) {
        res.status(401).json({error: e.message});
    }
};
export default auth