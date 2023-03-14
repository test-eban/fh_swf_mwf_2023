import Model from '../models/model.js';
// vorerst verwaist

const messagesModel = new Model('users');
export const messagesPage = async (req, res) => {
    try {
        const data = await messagesModel.select('*');
        console.log(data.rows);
        res.status(200).json({
            messages: data
        });
    } catch (err) {
        res.status(200).json({
            messages: err.stack
        });
    }
};
