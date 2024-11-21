<template>
    <div class="wrapper">
        <div>
            <h2>List Task</h2>
            <input type="text" v-model="newTask" @keyup.enter="addTask">
            <ul class="tasks-list">
                <li class="tasks-list-li" v-if="tasks.length <= 0">No tasks available :(</li>
                <li class="tasks-list-li" v-for="task in tasks" :key="task">{{ task }}</li>
            </ul>
        </div>

        <div>
            <h2>Remove Task</h2>
            <div>
                <input v-model="taskRemove" @keyup.enter="removeTask" type="text">
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
    import { ref } from 'vue'

    const tasks = ref<string[]>([])
    const newTask = ref<string>('')
    const taskRemove = ref<string>('')

    const addTask = () => {
        if(!newTask.value.trim()){
            return alert('Task cannot be empty');
        }

        if(tasks.value.includes(newTask.value.toLocaleLowerCase())){
            return alert('Task already exists');
        }

        tasks.value.push(newTask.value.toLowerCase());
        newTask.value = '';

        alert('Task added successfully');
    }

    const removeTask = () => {
        if(!taskRemove.value.trim()){
            return alert('Task cannot be empty');
        }

        if(!tasks.value.includes(taskRemove.value.toLowerCase())){
            return alert('Task does not exist');
        }

        tasks.value = tasks.value.filter(task => task !== taskRemove.value.toLocaleLowerCase());
        taskRemove.value = '';

        alert('Task removed successfully');
    }
</script>

<style scoped>
    .wrapper{
        display: flex;
        justify-content: space-between;
    }
    .tasks-list{
        list-style-type: none;
        padding: 0;
    }
    .tasks-list-li{
        text-transform: capitalize;
    }
</style>

