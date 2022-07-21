<template>

  <div class="LoginPage">

    <b-form class="login" @submit.prevent="" dir="rtl">

      <h2 >login</h2>
      <b-form-group id="username" label="Your username:" label-for="input-1">
        <b-form-input required v-model="username" type="text" id="input-1" placeholder="نام کاربری" />
      </b-form-group>

      <br />


      <b-form-group id="password" label="Your password:" label-for="input-2">
        <b-form-input required v-model="password" id="input-2" type="password" placeholder="رمز عبور" />
      </b-form-group>


      <br />

      <br />


      <b-button variant="outline-light" type="submit">ENTER</b-button>
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
      patternLogin: 't'
    }
  }
  ,
  methods: {

    login() {
      // // ?this.$router.replace("/"): "pasword or user is incorect";
      // if (this.username == this.patternLogin && this.password) {
      //   //generate user uniq key and save to localstorage
      //   this.saveUserKey(this.generateUniqKey())
      //   //redirect to dashboard path
      //   this.redirectToDashboard()
      // }
    },

    //generate ranodm uniq key
    generateUniqKey() {
      return this.patternLogin + 'qwerty1234!@#$$%^%^&D'
    },
    //save user key in localstorage
    saveUserKey(userUniqId) {
      // let key = "token";
      //save user uniq key in localstorage
      actions.setToken(userUniqId)
      // localStorage.setItem(key, userUniqId)
      //get user uniq key from locastorage
      // let keyFinder = localStorage.getItem(key)
      // console.log(keyFinder)
    },
    //redirect to dashboard path
    redirectToDashboard() {
      this.$router.push('/')
    }

  }
}
</script>

