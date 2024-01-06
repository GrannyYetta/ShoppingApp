export const paymentMiddleware =async(req, res, next)=>{

    req.payment = true
    next()
}