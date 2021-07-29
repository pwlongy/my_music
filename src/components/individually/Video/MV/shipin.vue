<template>
  <div class="shipin">
     <el-popover
      placement="bottom-start"
      title="标题"
      width="200"
      trigger="click">
      <el-table :data="gridData">
        <el-table-column width="150" property="date" label="日期"></el-table-column>
        <el-table-column width="100" property="name" label="姓名"></el-table-column>
        <el-table-column width="300" property="address" label="地址"></el-table-column>
      </el-table>
      <el-button slot="reference">全部视频<i class="el-icon-arrow-down"></i></el-button>
    </el-popover>



    <list 
      :top="false" 
      width="310px" 
      height="230px"
      imgheight="170px"></list>

  </div>
</template>

<script>
import list from "@/components/common/list"
import { Button, Popover, Table, TableColumn } from "element-ui"
export default {
  components: {
    list,
    [Button.name]: Button,
    [Popover.name]: Popover,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
  data () {
    return {
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      };
    }
}
</script>

<style lang="scss" scoped>
  .shipin{
    padding-left: 150px;
    
  }
</style>

<style lang="scss">
  .popover-thumbnail{
    .el-button{
      .i{
        margin-left: 10px;
      }
    }
  }
</style>