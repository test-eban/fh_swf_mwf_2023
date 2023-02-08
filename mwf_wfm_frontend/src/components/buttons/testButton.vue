<script>
import { getAllUsers } from "../../services/UserService.js";

export default {
    data() {
        return {
            count: 0
        }
    }
}
</script>

<template>
  <button @click="getAllUsers()">You clicked me {{ count }} times.</button>
</template>