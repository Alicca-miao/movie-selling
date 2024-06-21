<template>
    <div class="wrapper">
        <div class="card top">
            <el-button class="opBtn" type="danger">
                <el-icon>
                    <Close />
                </el-icon>&nbsp;删除
            </el-button>

            <el-button v-admin class="opBtn" type="success"><el-icon>
                    <DocumentCopy />
                </el-icon>&nbsp; 导出</el-button>

            <el-button class="opBtn" type="primary" @click="addPlaying">
                <el-icon>
                    <Plus />
                </el-icon>
                &nbsp; 添加
            </el-button>

        </div>

    </div>
</template>

<script setup>
// import {playing} from '@/api/movieapi.js'
import { onMounted,computed } from 'vue'
import { Plus, Close, DocumentCopy, Delete, Edit } from "@element-plus/icons-vue";
//组件挂载完成后发起ajax请求


// onMounted(async()=>{
//     const films = await playing()
//     console.log("film",films)
//     tableData.value = films
// })

const tableData=ref([])
const currentPage=ref(1)
const computedData=()=>{
    tableData.value.slice((currentPage-1)*5,currentPage*5)
}
const addPlaying = () => {
    // router.push("/film/add");
};

</script>

<style>

</style>