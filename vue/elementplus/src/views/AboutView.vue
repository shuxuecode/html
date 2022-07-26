<template>
  <div class="about">
    <h1>This is an about page</h1>

    <el-button type="primary">Primary</el-button>

    <div class="demo-color-block">
      <span class="demonstration">With default value</span>
      <el-color-picker v-model="color1" />
    </div>
  </div>

  <div>
    <el-date-picker
        v-model="value1"
        type="datetime"
        placeholder="Select date and time"
      />

      <el-table :data="list" border style="width: 100%">
        <el-table-column prop="id" label="id" width="180" />
        
        <el-table-column label="图片"  width="180" >
            <template #default="scope">
                <div>
                    <el-image style="width: 100px; height: 100px" :src="scope.row.imgUrl" :fit="fit" />
                </div>
            </template>
        </el-table-column>
        <el-table-column prop="text" label="Name"/>
        <el-table-column prop="price" label="价格" />
      </el-table>
  </div>



</template>
<script>
import { defineComponent } from "vue";
import axios from "axios"
export default defineComponent({

  data(){
    return {
      list:[],
      color1: '',
      value1: '2022-12-12',
      fit: 'fill'
    };
  },

  mounted(){
    let _this = this;
    axios.get("http://shuxuecode.github.io/html/data/list.json")
    .then((res) => {
      console.log(res)
      console.log(res.data)
      _this.list = res.data
    })

  },



})


</script>