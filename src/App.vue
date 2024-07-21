<<<<<<< HEAD
<script setup lang="ts">
import coming from '@/views/film/Coming.vue'
import detail from '@/views/film/Detail.vue'
import detailadd from '@/views/film/DetailAdd.vue'
import playing from '@/views/film/Playing.vue'
import userlist from '@/views/UserList.vue'
import login from '@/views/Login.vue'

</script>

<template>
  <div>
   <!-- <coming></coming> -->
   <!-- <detail></detail> -->
   <!-- <detailadd></detailadd> -->
   <!-- <playing></playing> -->
   <!-- <userlist></userlist> -->
   <login></login>

  </div>
</template>

<style scoped>
=======


<template>
  <div>
    <MyPageHeader title="欢迎光临卖座电影管理后台" @action-btn-click="onActionBtnClick">
      <template #action>
        <el-icon size="24" class="content-elem pointer">
          <SwitchButton />
        </el-icon>
      </template>

    </MyPageHeader>

    <main>
      <!-- <div class="left" > -->

      <!-- 渲染动态菜单 -->
      <!-- <EpMenu :menu="menu" :activeIndex="currentMenuIndex"></EpMenu> -->
      <!-- </div> -->
      
      <div class="left"></div>

      <!-- 右侧内容区 -->
      <div class="right">
        <!-- <router-view v-slot="{ Component }"> -->
        <!-- <transition name="slide-fade" mode="out-in"> -->
        <!-- <keep-alive :exclude="[`Detail`]"> -->
        <!-- <component :is="Component" /> -->
        <!-- </keep-alive> -->
        <!-- </transition> -->
        <!-- </router-view> -->
        <router-link to="/studyform">dianji
        </router-link>

        <router-view></router-view>

        

      </div>

    </main>


  </div>

</template>




<script setup lang="ts">
import MyPageHeader from './components/MyPageHeader.vue'
// import myTable from './components/myTable.vue'
import playing from '@/views/film/Playing.vue'

import {
  Grid,
  PictureFilled,
  Star,
  LocationFilled,
  Film,
  VideoCameraFilled,
  Histogram,
  PieChart,
  ArrowLeftBold,
  SwitchButton,
  User,
} from "@element-plus/icons-vue";


const onActionBtnClick = () => {
  console.log("onActionBtnClick");
};
</script>

<style lang="scss" scoped>
.top {
  width: 50px;
}

main {
  display: flex;
  height: calc(100vh - 50px);

  .left {
    width: 200px;
    padding-right: 1px;
    border-right: 1px solid black;
  }

  .right {
    flex-grow: 1;
    padding: 10px;
  }
}

>>>>>>> 838ec6ce43753faff6d469438ff8b37fdf62df3d


</style>
