<template>
    
        <el-card v-loading="loading">
            正文内容...
        </el-card>
    
</template>

<script setup>
let form = {};
let detail = {
    pr: 1625097600,
    category: "Action|Adventure",
    actors: [
        { name: "John Doe", role: "Hero", avatarAddress: "hero.jpg" },
        { name: "Jane Doe", role: "Villain", avatarAddress: "villain.jpg" },
    ]
};

Object.assign(form, detail, {
    pr: detail.pr * 1000,
    category: detail.category.split("|"),
    actors: detail.actors.map(({ name, role, avatarAddress }) => ({
        name: `${name}-${role}`,
        url: avatarAddress,
    })),
});


</script>

<style></style>