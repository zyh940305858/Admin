<template>
  <div class="box">
    <p class="title">用户展示</p>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="用户数据" name="first">  <!--用户数据-->
        <h4 class="first-title">用户数据</h4>

        <div class="first-box">
          <el-table :data="examS.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%">
            <el-table-column prop="user_name" label="用户名" width="180" />
            <el-table-column prop="user_pwd" label="密码" width="520" />
            <el-table-column prop="identity_text" label="身份" />
          </el-table>

          <!-- 分页 -->
          <el-pagination
            layout="prev, pager, next"
            background
            :total="+userlength"
            :page-size="pagesize"
            @current-change="current_change"
            @size-change="handleSizeChange"
          />
        </div>

      </el-tab-pane>

      <el-tab-pane label="身份数据" name="second"> <!--身份数据-->
        <h6 class="second-title">身份数据</h6>
        <div class="second-box">
          <el-table :data="userNPID.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%">
            <el-table-column prop="identity_text" label="身份名称" width="180" />
          </el-table>

          <!-- 分页 -->
          <el-pagination
            layout="prev, pager, next"
            :total="+authorlenght"
            :page-size="pagesize"
            background
            @current-change="current_change"
            @size-change="handleSizeChange"
          />

        </div>
      </el-tab-pane>

      <el-tab-pane label="api接口权限数据" name="third"> <!--api接口权限数据-->
        <h6 class="third-title">api接口权限数据</h6>
        <el-table :data="apiALL.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%">
          <el-table-column prop="api_authority_text" label="api权限名称" width="180" />
          <el-table-column prop="api_authority_url" label="api权限url" width="520" />
          <el-table-column prop="api_authority_method" label="api权限方法" />
        </el-table>

        <!-- 分页 -->
        <el-pagination
          layout="prev, pager, next"
          :total="+apilength"
          :page-size="pagesize"
          background
          @current-change="current_change"
          @size-change="handleSizeChange"
        />
      </el-tab-pane>

      <el-tab-pane label="身份和api接口数据" name="fourth"> <!--身份和api接口数据-->
        <h6 class="fourth-title">身份和api接口数据</h6>
        <el-table :data="allGuanXi.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%">
          <el-table-column prop="identity_text" label="身份名称" width="180" />
          <el-table-column prop="api_authority_text" label="api权限名称" width="200" />
          <el-table-column prop="api_authority_url" label="api权限url" width="280" />
          <el-table-column prop="api_authority_method" label="api权限方法" />
        </el-table>

        <!-- 分页 -->
        <el-pagination
          layout="prev, pager, next"
          :total="+allGuanXilength"
          :page-size="pagesize"
          background
          @current-change="current_change"
          @size-change="handleSizeChange"
        />
      </el-tab-pane>

      <el-tab-pane label="视图接口数据" name="fifth"> <!--视图接口数据-->
        <h6 class="fifth-title">视图接口数据</h6>
        <el-table :data="allViewsQX.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%">
          <el-table-column prop="view_authority_text" label="视图权限名称" width="180" />
          <el-table-column prop="view_id" label="视图id" width="200" />
        </el-table>

        <!-- 分页 -->
        <el-pagination
          layout="prev, pager, next"
          :total="+allViewsQXlength"
          :page-size="pagesize"
          background
          @current-change="current_change"
          @size-change="handleSizeChange"
        />
      </el-tab-pane>

      <el-tab-pane label="身份和视图权限关系" name="sixth"> <!--身份和视图权限关系-->
        <h6 class="sixth-title">身份和视图权限关系</h6>
        <el-table :data="allAuthorViews.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%">
          <el-table-column prop="identity_text" label="身份" width="180" />
          <el-table-column prop="api_authority_text" label="视图名称" width="200" />
          <el-table-column prop="api_authority_method" label="视图id" width="280" />
        </el-table>

        <!-- 分页 -->
        <el-pagination
          layout="prev, pager, next"
          :total="+allAuthorViewslength"
          :page-size="pagesize"
          background
          @current-change="current_change"
          @size-change="handleSizeChange"
        />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      activeName: 'first',
      // total: 1000, // 默认数据总数
      pagesize: 5, // 每页的数据条数
      currentPage: 1 // 默认开始页面
    }
  },
  computed: {
    ...mapState({
      // 用户信息数据的长度
      examS: state => state.paperList.examS,
      userNPID: state => state.paperList.userNPID,
      userlength: state => state.paperList.userlength,
      authorlenght: state => state.paperList.authorlenght, // 身份数据的长度
      apiALL: state => state.paperList.apiALL, // 所有api接口权限数据
      apilength: state => state.paperList.apilength, // 所有api接口权限数据长度
      allGuanXi: state => state.paperList.allGuanXi, // 获取身份和api权限关系数据
      allGuanXilength: state => state.paperList.allGuanXilength, // 身份和api权限关系数据长度
      allAuthorViews: state => state.paperList.allAuthorViews, // 展示身份和视图权限关系的所有数据
      allAuthorViewslength: state => state.paperList.allAuthorViewslength, // 所以身份和视图权限关系数据的长度
      allViewsQX: state => state.paperList.allViewsQX, // 获取视图权限数据的所有数据
      allViewsQXlength: state => state.paperList.allViewsQXlength // 获取视图权限数据的所有数据的长度
    })
  },
  mounted() {
    this.authorAll()
    this.authorIDentity()
    this.authorityApi()
    this.authorGuanXi()
    this.authorViews()
    this.viesQuanXI()
  },
  methods: {
    ...mapActions({
      authorAll: 'paperList/authorAll',
      authorIDentity: 'paperList/authorIDentity',
      authorityApi: 'paperList/authorityApi',
      authorGuanXi: 'paperList/authorGuanXi',
      authorViews: 'paperList/authorViews',
      viesQuanXI: 'paperList/viesQuanXI'
    }),
    handleClick() {
      console.log('1')
    },
    current_change: function(currentPage) {
      this.currentPage = currentPage
    },
    handleSizeChange: function(size) {
      this.pagesize = size
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  margin-left: 20px;
  position: relative;
}
.box .title {
  font-size: 20px;
}
.first-title {
  font-size: 20px;
  position: absolute;
  top: -42px;
}
.first-ulto {
  display: flex;
  background: #eeeeee;
  line-height: 50px;
  margin-top: 40px;
  li:nth-child(1) {
    flex: 2;
  }
  li:nth-child(2) {
    flex: 7;
  }
  li:nth-child(3) {
    flex: 4;
  }
}
.first-ult {
  display: flex;
  border-bottom: 1px solid #eeeeee;
  line-height: 25px;
  li:nth-child(1) {
    flex: 2;
  }
  li:nth-child(2) {
    flex: 7;
  }
  li:nth-child(3) {
    flex: 4;
  }
}
.first-box {
  margin-top: 50px;
}
.second-box {
  margin-top: 50px;
}
.second-title {
  font-size: 20px;
  position: absolute;
  top: -42px;
}
.second-ult {
  display: flex;
  border-bottom: 1px solid #eeeeee;
  line-height: 25px;
  li:nth-child(1) {
    flex: 2;
  }
  li:nth-child(2) {
    flex: 7;
  }
  li:nth-child(3) {
    flex: 4;
  }
}
</style>
