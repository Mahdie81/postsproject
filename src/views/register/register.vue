<template>

  <div class="LoginPage">

    <b-form class="login" @submit.prevent="" dir="rtl">

      <h2>register</h2>
      <b-form-group id="username" label="Your username:" label-for="input-1">
        <b-form-input required v-model="username" type="text" id="input-1" placeholder="نام کاربری" />
      </b-form-group>

      <br />


      <b-form-group id="password" label="Your password:" label-for="input-2">
        <b-form-input required v-model="password" id="input-2" type="password" placeholder="رمز عبور" />
      </b-form-group>


      <br />
        <b-form-group id="password" label="repit your password:" label-for="input-3">
        <b-form-input required v-model="repassword" id="input-3" type="password" placeholder="رمز عبور" />
        </b-form-group>


      <br />


      <b-button variant="outline-light" type="submit">SIGN IN</b-button>
      <br />
      <br />

    </b-form>

  </div>

</template>
<script>
import "@/views/login/login.scss"
// import actions from '@/modules/actions'
export default {
  components: {

  },
  data() {
    return {
      username: "",
      password: "",
      repassword:"",
      patternLogin: 't'
    }
  }
  ,
  methods: {
  }}

</script>

