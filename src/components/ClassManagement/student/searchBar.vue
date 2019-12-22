<template>
  <div>
    <el-form :model="form">
      <el-input
        type="age"
        v-model.number="numberValidateForm.age"
        autocomplete="off"
        placeholder="请输入学生姓名"
      ></el-input>

      <el-form-item>
        <el-select v-model="form.classroom" placeholder="请选择教室号">
          <el-option
            v-for="(item,index) in getOverClassStateList"
            :key="index"
            :label="item.room_text"
            :value="item.room_text"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-select v-model="form.classAndGrade" placeholder="班级名">
          <el-option
            v-for="(item,index) in getClassAndGradeStateList"
            :key="index"
            :label="item.grade_name"
            :value="item.grade_name"
          ></el-option>
        </el-select>
      </el-form-item>
      <button>搜索</button>
      <button>重置</button>
    </el-form>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

export default {
  props: ["getOverClassStateList", "getClassAndGradeStateList"],
  data() {
    return {
      form: {
        classroom: "",
        classAndGrade: ""
      },
      numberValidateForm: {
        age: ""
      }
    };
  },
  computed: {
    ...mapState({})
  },
  methods: {
    ...mapActions({}),
    created() {}
  }
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  margin: 0;
  padding: 0;
}
.el-form {
  width: 100%;
  display: flex;
  /deep/.el-input {
    width: 175px;
    margin-right: 20px;

    .el-input__inner {
      height: 30px;
      margin-top: 5px;
    }
  }
  /deep/.el-form-item {
    width: 175px;
    margin-right: 20px;
    input {
      height: 30px;
    }
  }
  button {
    width: 115px;
    height: 35px;
    margin-right: 20px;
  }
}
</style>