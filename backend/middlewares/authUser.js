import jwt from "jsonwebtoken"

//admin authentication middleware
const authUser = async (req, res, next) => {

    try {
        const { token } = req.headers
        if (!token) {
            return res.json({ success: false, message: "Not authorized Login Again" })
        }
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        if (!req.body) {
            req.body = {}; // Create it if undefined
        }
        req.body.userId = token_decode.id

        next()

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })

    }


}

export default authUser