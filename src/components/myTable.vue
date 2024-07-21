<template>
    <div>
        <!-- 
  :data="tableData" // 表格数据
  stripe //隔行变色
  style="width: 100%" //额外样式，会透传到组件的布局中为根元素所接收
  :default-sort="{ prop: 'date', order: 'ascending' }" //默认根据数据项的date字段升序排列
  @selection-change="handleSelectionChange" //多选变化时的处理函数，载荷为勾选上的数据集
 -->
        <el-table :data="computedData" stripe style="width: 100%" :default-sort="{prop:'date'}"
            @selection-change="handleSelectionChange">
            <!-- 多选显示栏 -->
            <!-- 多选显示栏 -->
            <el-table-column type="selection" width="40" />

            <!-- fixed固定 sortable字段可排序 label=当前列标题 width当前列像素宽度 -->
            <el-table-column sortable fixed prop="date" label="日期" width="120" />
            <el-table-column sortable prop="name" label="姓名" width="100" />
            <el-table-column sortable prop="state" label="州" width="120" />
            <el-table-column sortable prop="city" label="城市" width="120" />
            <el-table-column sortable prop="address" label="地址" width="300" />
            <el-table-column prop="zip" label="邮编" width="120" />
            <!-- 都是一列一列的看 sortable表示可以以这一列为准排序-->
            <el-table-column fixed="right" label="操作" width="90">
                <!-- 覆盖为小号圆形的编辑按钮与删除按钮 -->
                <template #default>
                    <el-button type="primary" :icon="Edit" circle size="small" />
                    <el-button type="danger" :icon="Delete" circle size="small" />
                </template>
            </el-table-column>








        </el-table>
        <br />
        <el-pagination background layout="prev, pager, next" :page-size="3" :total="tableData.length"
            @current-page="currentPage" @current-change="onCurrentChange" />


    </div>


</template>

<script setup>
import {ref,computed,reactive} from 'vue'
const handleSelectionChange=(val)=>{
console.log(val)
}



    
    
const tableData = [
    
        {
        date: "2016-05-03",
        name: "Cindy",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
        tag: "Home",
    },
    
    {
        date: '2016-05-02',
        name: 'om',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'To',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    
]

/* 实时记录当前页码 */
const currentPage = ref(1);

/* 根据页码实时截取一页数据供表格显示 */
const computedData = computed(() =>
    tableData.slice((currentPage.value - 1) * 3, currentPage.value * 3)
);

/* 响应分页器的翻页事件，拿到实时页码同步给currentPage */
// 当前已经用更好的方式实现翻页侦听，即: v-model:current-page="currentPage"
const onCurrentChange = (page) => {
    console.log("onCurrentChange", page);
    currentPage.value = page;
};



</script>

<style>

</style>