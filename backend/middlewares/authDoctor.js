import jwt from "jsonwebtoken"

//admin authentication middleware
const authDoctor = async (req, res, next) => {

    try {
        const { dtoken } = req.headers
        if (!dtoken) {
            return res.json({ success: false, message: "Not authorized Login Again" })
        }
        const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET)
        if (!req.body) {
            req.body = {}; // Create it if undefined
        }
        req.body.docId = token_decode.id

        next()

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })

    }


}

export default authDoctor