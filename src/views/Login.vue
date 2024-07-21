<template>
  <el-card class="box-card">
      <!-- 卡片头 -->
      <template #header>
         <div class="card-header">
            <h4>欢迎登录【叫座电影】管理端</h4>
         </div>
      </template>

      <el-form
           ref="ruleFormRef"
           :model = "ruleForm"
           status-icon
           :rules="rules"
           label-width = "80px"
           class = "demo-ruleForm"

      >
      <!-- status-icon	是否在输入框中显示校验结果反馈图标 -->
         <!-- rules	表单验证规则 -->
         <!-- status-icon	是否在输入框中显示校验结果反馈图标 -->


         <!-- label是input框左边那个 -->
<!-- prop在form里是当有了validate必须要有的，然后在rules里设置prop要求的自定义规则 -->
         <el-form-item
             label="用户名"
             prop="username"
         >
         <el-input v-model="ruleForm.username"></el-input>
         </el-form-item>

         <el-form-item
            label="密码"
            prop="pass">
            <el-input
               v-model="ruleForm.pass"
               type="password"
               autocomplete="off" />
         </el-form-item>

         <el-form-item
            label="确认密码"
            prop="checkPass">
            <el-input
               v-model="ruleForm.checkPass"
               type="password"
               autocomplete="off" />
         </el-form-item>

         <el-form-item>
            <el-button
               class="btn"
               type="primary"
               @click="submitForm(ruleFormRef)"
               >登录</el-button
            >
            <el-button
               class="btn"
               @click="resetForm(ruleFormRef)"
               >重置</el-button
            >
         </el-form-item>






      </el-form>


  </el-card>
</template>

<script setup>
import {reactive, ref} from 'vue'
// import {login} from "@api/userApi"
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
// import { useStore } from "vuex";

// const router = useRouter()
// const store = useStore()
const ruleForm = reactive({
    pass: "",
   checkPass: "",
   username: "",
})

const ruleFormRef = ref()
const regUsername = /^\w{5,20}$/;
const checkusername = (rule, value, callback) => {
   if (!regUsername.test(value)) {
      callback(new Error("用户名必须是5~20个单词字符"));
   } else {
      callback();
   }
};

const validatePass2 = (rule,value,callback)=>{
    if(value===""){
        callback(new Error("请再输入一次密码"))
    }
    else if(value!==ruleForm.pass) {
      callback(new Error("Two inputs don't match!"))
    } else {
      callback()
    }
}

// const rules = reactive({
//    //这里就是prop里对应的每一个都要有验证方式
//    //blur是当input失去焦点进行验证 change是input框输入内容进行验证
//    username: [{validator: checkusername, trigger:"blur"}],
//    pass: [{validator: validatePass, trigger:"blur"}],
//    checkPass: [{validator: validatePass2, trigger:"blur"}]
// })


// 相应提交，将整个表单进行验证
//返回promise 接受一个回调函数

/* 响应提交 */
const submitForm = formEl => {
   if (!formEl) return;

   formEl.validate(async valid => {
      if (valid) {
         console.log("submit!");
         // validate	对整个表单的内容进行验证。 接收一个回调函数，或返回 Promise。

         const username = ruleForm.username;
         const password = ruleForm.pass;
         console.log(username, password);

         /* 执行登录，并将结果丢vuex */
         const { msg, user, token } = await login(username, password);
         ElMessage({
            message: msg,
            type: user ? "success" : "error",
         });

         /* 如果登录成功跳转 */
         if (user) {
            /* 将user和token丢vuex */
            store.dispatch("saveUserInfo", { user, token });

            setTimeout(() => {
               router.push("/");
            }, 500);
            // 如果登录成功，将用户信息和 token 存储到 Vuex 中，并在短暂延迟后跳转到首页
         }
      } else {
         console.log("error submit!");
         return false;
      }
   });
};

const resetForm = formEl => {
   if(!formEl)return
   formEl.resetFields()
}
</script>

<style lang="scss">
.card-header {
   display: flex;
   justify-content: center;
   align-items: center;
}

.text {
   font-size: 14px;
}

.item {
   margin-bottom: 18px;
}
// ？？

.box-card {
   width: 600px;
   margin: 50px auto;
   padding-right: 1rem;
}

.btn {
   width: 100px;
}
</style>