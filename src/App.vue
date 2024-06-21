

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
      <div class="left">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
          active-text-color="#e9f4ff" background-color="#545c64" text-color="#fff">
          <!-- 数据看板 -->
          <el-menu-item index="1">
            <el-icon>
              <PieChart />
            </el-icon>
            <RouterLink class="tab" to="/data">数据看板</RouterLink>
          </el-menu-item>

          <!-- 影片管理 -->
          <el-sub-menu index="2">
            <template #title>
              <el-icon>
                <Film />
              </el-icon>
              <span>影片管理</span>
            </template>

            <!-- 正在热映 -->
            <el-menu-item index="2-1">
              <el-icon>
                <VideoCameraFilled />
              </el-icon>
              <RouterLink class="tab" to="/film/playing">正在热映</RouterLink>
            </el-menu-item>

            <!-- 即将上映 -->
            <el-menu-item index="2-2">
              <el-icon>
                <Histogram />
              </el-icon>
              <RouterLink class="tab" to="/film/coming">即将上映</RouterLink>
            </el-menu-item>
          </el-sub-menu>

          <!-- 影院管理 -->
          <el-sub-menu index="3">
            <template #title>
              <el-icon>
                <PictureFilled />
              </el-icon>
              <span>影院管理</span>
            </template>

            <!-- 热门城市 -->
            <el-sub-menu index="3-1">
              <template #title>
                <el-icon>
                  <Star />
                </el-icon>
                热门城市
              </template>

              <el-menu-item index="3-1-1">
                <RouterLink class="tab" to="/cinema/hot">北京</RouterLink>
              </el-menu-item>
              <el-menu-item index="3-1-2">
                <RouterLink class="tab" to="/cinema/hot">上海</RouterLink>
              </el-menu-item>
              <el-menu-item index="3-1-3">
                <RouterLink class="tab" to="/cinema/hot">广州</RouterLink>
              </el-menu-item>
            </el-sub-menu>

            <!-- 所有城市 -->
            <el-menu-item index="3-2">
              <el-icon>
                <LocationFilled />
              </el-icon>
              <RouterLink class="tab" to="/cinema/all">所有城市</RouterLink>
            </el-menu-item>
          </el-sub-menu>

          <!-- 用户管理 -->
          <el-menu-item index="4">
            <el-icon>
              <User />
            </el-icon>
            <RouterLink class="tab" to="/user">用户管理</RouterLink>
          </el-menu-item>

          <!-- 案例管理 -->
          <el-menu-item index="5">
            <el-icon>
              <Grid />
            </el-icon>
            <RouterLink class="tab" to="/demos">案例管理</RouterLink>
          </el-menu-item>
        </el-menu>
      </div>

      <!-- 右侧内容区 -->
      <div class="right">
        <!-- <router-view v-slot="{ Component }"> -->
        <!-- <transition name="slide-fade" mode="out-in"> -->
        <!-- <keep-alive :exclude="[`Detail`]"> -->
        <!-- <component :is="Component" /> -->
        <!-- </keep-alive> -->
        <!-- </transition> -->
        <!-- </router-view> -->


        



      </div>


    </main>

<playing></playing>
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



</style>
