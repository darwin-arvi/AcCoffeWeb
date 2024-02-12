<template>
  <body class="az-body">
    <div class="az-signin-wrapper">
      <div class="az-card-signin">
        <h1 alt="Vue logo"><img src="../../assets/fup_logo.png"/></h1>
        <div class="az-signin-header">
          <h2>Welcome back!</h2>
          <h4>Please sign in to continue</h4>
          <form @submit.prevent="login">
            <div class="form-group">
              <label>Email</label>
              <input type="text" class="form-control" placeholder="Enter your email" v-model="login_form.email">
            </div><!-- form-group -->
            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" placeholder="Enter your password"
                v-model="login_form.password">
            </div><!-- form-group -->
            <button class="btn btn-az-primary btn-block" type="submit">Sign In</button>
          </form>
        </div><!-- az-signin-header -->
        <div class="az-signin-footer">
          <p><a href="">Forgot password?</a></p>
          <p>Don't have an account? <router-link to="/register">Create a new account</router-link>
          </p>
        </div><!-- az-signin-footer -->
      </div><!-- az-card-signin -->
    </div><!-- az-signin-wrapper -->
  </body>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex';
export default {
  setup() {
    const login_form = ref({});
    const store = useStore();

    const login = () => {
      store.dispatch('login', login_form.value);
    }
    return {
      login_form,
      login
    }
  }
}
</script>

<style>
</style>