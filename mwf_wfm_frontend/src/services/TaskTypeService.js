import axios from "axios"

export default {
    async getTaskTypes() {
        console.debug("getTaskTypes() called");
        let res = await axios.get("http://localhost:12040/tasktypes");
        return await res.data;
    },
    async getTaskTypeSingle(taskTypeId) {
        console.debug("getTaskTypeSingle() called");
        let res = await axios.get("http://localhost:12040/tasktypes/" + taskTypeId);
        // console.log(res);
        return res.data;
    },
    async deleteTaskType(taskTypeId) {
        console.debug("deleteTaskType() called");
        let res = await axios.delete("http://localhost:12040/tasktypes/" + taskTypeId + "/delete");
        return res.data;
    }
}