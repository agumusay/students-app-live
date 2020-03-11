

let logInteraction = async (req, res, next) => {

    let url = req.originalUrl
    let payload = req.body;
    console.log(`${req.method} on ${url}
 payload: ${JSON.stringify(payload, null, 2)}`)
    next()
}


module.exports = logInteraction;
