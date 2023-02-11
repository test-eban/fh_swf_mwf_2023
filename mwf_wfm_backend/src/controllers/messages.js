import Model from '../models/model.js';

const messagesModel = new Model('messages');
export const messagesPage = async (req, res) => {
    try {
        const data = await messagesModel.select('name, message');
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