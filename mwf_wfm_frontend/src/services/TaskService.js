import axios from "axios"

export default {
    async getTasks() {
        console.debug("getTasks() called");
        let res = await axios.get("http://localhost:12040/tasks");
        // console.log(res);
        return await res.data;
    },
    async getTaskSingle(taskId) {
        console.debug("getTaskSingle() called");
        let res = await axios.get("http://localhost:12040/tasks/" + taskId);
        // console.log(res);
        return res.data;
    },
    async deleteTask(taskId) {
        console.debug("deleteTask() called");
        let res = await axios.delete("http://localhost:12040/tasks/" + taskId + "/delete");
        return res.data;
    },
    async createTask(taskObject) {
        console.debug("createTask() called");
        console.log(taskObject);
        let res = await axios.post("http://localhost:12040/tasks/insert", taskObject)
    },
    // async setTaskState(taskId, previousState, targetState) {
    //     let res = await axios.put
    // }
}