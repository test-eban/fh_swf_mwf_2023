import axios from "axios"

export default {
    async getTasks() {
        let res = await axios.get("http://localhost:12040/tasks");
        return res.data;
    },
    async getTaskSingle(taskId) {
        let res = await axios.get("http://localhost:12040/tasks/" + taskId);
        console.log(res);
        return res.data;
    }
    // async setTaskState(taskId, previousState, targetState) {
    //     let res = await axios.put
    // }
}