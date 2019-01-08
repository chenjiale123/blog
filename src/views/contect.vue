<template>
  <div id="contect">
    <b-form v-if="show">
  <b-form-group
          id="exampleInputGroup1"
          label="添加姓名:"
          label-for="exampleInput1"
          description="show name"
        >
          <b-form-input
            id="exampleInput1"
            type="text"
            v-model="form.name"
            required
            placeholder="Enter name"
          ></b-form-input>
        </b-form-group>

      <b-form-textarea
        id="textarea1"
        v-model="form.text"
        placeholder="Enter something"
        :rows="3"
        :max-rows="6"
      ></b-form-textarea>
      <b-button type="button" variant="primary" @click="sendTo">Submit</b-button>
      <b-button type="button" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import qs from "qs";
export default {
  data() {
    return {
      form: {
        name: "",
        text: ""
      },

      show: true
    };
  },
  methods: {
    sendTo() {
      let data = qs.stringify(this.form);
      this.axios
        .post("http://chenjiale.gz01.bdysite.com/api2/getcomm.php", data)
        .then(res => {
          console.log(res.data);
        });
    }
  }
};
</script>
<style scoped>
#contect {
  width: 800px;
  height: 500px;
  background: #fff;
  margin: 20px auto;
}
form {
  width: 500px;
  margin: 20px auto;
}
button {
  margin-top: 30px;
}
</style>

