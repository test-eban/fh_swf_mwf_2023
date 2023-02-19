<template>
    <div class="event-single">
        <section class="hero is-primary">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">{{ event.label }}</h1>
                    <h2 class="subtitle ">
                        <strong>StartDate:</strong> {{ event.startDate }}
                        <br />
                        <strong>EndDate:</strong> {{ event.endDate }}
                    </h2>
                </div>
            </div>
        </section>
        <section class="event-content">
            <div class="container">
                <p class="is-size-4 description">{{ event.label }}</p>
                <p class="is-size-4 description">{{ event.description }}</p>
                <p class="is-size-5"><strong>Sparte:</strong> {{ event.branch }}</p>
                <p class="is-size-5"><strong>Tasktyp:</strong> {{ event.taskType }}</p>
                <p class="is-size-5"><strong>Aufgabenanweisung:</strong> {{ event.taskInstruction }}</p>
                <div class="event-images columns is-multiline has-text-centered">
                    <div v-for="image in event.images" :key="image.id" class="column is-one-third">
                        <img :src="image" :alt="event.name" />
                    </div>
                </div>
            </div>
        </section>
</div>
</template>
<script>
// NEW - import EventService
import TaskService from '@/services/TaskService';
export default {
    name: 'EventSingle',
    data() {
        // NEW - initialize the event object
        return {
            event: {}
        }
    },
    created() {
        this.getEventData(); // NEW - call getEventData() when the instance is created
    },
    // NEW
    methods: {
        async getEventData() {
            try {
                const results = await TaskService.getTaskSingle(this.$route.params.id);
                this.event = results.task[0];
                console.log('Event:', this.event);
            } catch (error) {
                console.log('Error:', error);
            }
        },
    },
};
</script>