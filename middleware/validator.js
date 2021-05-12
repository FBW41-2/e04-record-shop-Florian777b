module.exports = (req, res, next) => {
    const erros = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }else {
        next()
    }
}