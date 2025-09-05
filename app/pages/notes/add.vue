<template>
    <form @submit.prevent="onSubmit">
        <div>
            <label for="title"></label>
            <input type="text" id="title" placeholder="Title" v-model="form.title" required />
        </div>

        <div>
            <label for="tags"></label>
            <input type="text" id="tags" placeholder="tags" v-model="form.tags" />
        </div>

        <div>
            <label for="content"></label>
            <textarea cols="35" row="25" id="content" placeholder="content" v-model="form.content" required></textarea>
        </div>

        <div>
            <button type="submit">Submit</button>
        </div>
    </form>

    <div>{{ form }}</div>
</template>

<script setup lang="ts">
const onSubmit = async (event) => {
    await navigateTo('/notes');
};

const form = reactive({
    title: '',
    content: '',
    tags: [],
});
</script>
