import axios from "axios"

export default {
    async getBranches() {
        console.debug("getBranches() called");
        let res = await axios.get("http://localhost:12040/branches");
        return await res.data;
    },
    async getBranchSingle(branchId) {
        console.debug("getBranchSingle() called");
        let res = await axios.get("http://localhost:12040/branches/" + branchId);
        // console.log(res);
        return res.data;
    },
    async deleteBranch(branchId) {
        console.debug("deleteBranch() called");
        let res = await axios.delete("http://localhost:12040/branches/" + branchId + "/delete");
        return res.data;
    }
}