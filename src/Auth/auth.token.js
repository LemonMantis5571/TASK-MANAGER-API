import jwt from 'jsonwebtoken';


export default function verifyToken(req, res, next) {
    const token = req.headers.authorization.split(' ')[1];

    if(!token) {
        return res.status(401).send({message: 'Missing auth token'});
    }

    try {
        const decoded = jwt.verify(token, process.env.APIKEY);
        req.userId = decoded.userId;
        console.log(req.userId);
        next();
        
    } catch (error) {
        return res.status(401).send({ message: error });
    }
}