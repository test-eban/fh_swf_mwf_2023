import axios from "axios"

export default {
    async getTasks() {
        console.log("getTasks() called");
        let res = await axios.get("http://localhost:12040/tasks");
        // console.log(res);
        return await res.data;
    },
    async getTaskSingle(taskId) {
        let res = await axios.get("http://localhost:12040/tasks/" + taskId);
        // console.log(res);
        return res.data;
    }
    // async setTaskState(taskId, previousState, targetState) {
    //     let res = await axios.put
    // }
}