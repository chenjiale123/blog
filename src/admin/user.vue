<template>
  <div id="user">
    <naver/>
    <div class="show">
      <el-table :data="tableData" style="width: 100%">
           <el-table-column label="id" width="150">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="email" width="150">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.email }}</span>
          </template>
        </el-table-column>
        <el-table-column label="权限" width="150">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.level==0? '管理员':"普通用户" }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="姓名" width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import naver from "../components/nav.vue";
export default {
  name: "user",
  data() {
    return {
      tableData: [
        {
          id:"",
          email: "",
          name: "",
          level: " "
        }
      ]
    };
  },
  components: {
    naver
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index) {
      if (confirm("你确定要删除本条信息吗？")) {
        this.axios
          .get("http://chenjiale.gz01.bdysite.com/api2/del.php", {
            params: {
              id: index
            }
          })

          .then(res => {
            console.log(res);
            this.tableData.splice(this.index, 1);
          });
      } else {
      }
      // console.log( index)
    },
    getuser() {
      this.axios
        .get("http://chenjiale.gz01.bdysite.com/api2/getuser.php")
        .then(res => {
          this.tableData = res.data;
          console.log(res.data);
        });
    }
  },
  created() {
    this.getuser();
  }
};
</script>
<style scoped>
#user {
  width: 500px;
  /* height: 800px; */
  height: 600px;
  position: relative;
}

.show {
  width: 800px;
  height: 500px;
  background: #fff;
  /* float: left; */
  /* margin-left: 50px; */
  position: absolute;
  left: 300px;
  top: 30px;
}
</style>
