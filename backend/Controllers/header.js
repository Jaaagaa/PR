export const getAllHeaders = (req, res) => {
    res.status(200).json({ data: "" });
}


export default {
    getAll: getAllHeaders,
}