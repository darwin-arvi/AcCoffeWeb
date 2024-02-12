<template>

  <body class="az-body">
    <div class="az-signup-wrapper">
      <div class="az-column-signup-left">
        <div>
          <h3 class="az-logo"><img src="../../assets/fup_logo.png" /></h3>
          <h5>Control panel and &amp; administration</h5>
          <p>This platform is for academic use for AcCoffee Accounting Emergy agriculture in Colombia.</p>
        </div>
      </div><!-- az-column-signup-left -->
      <div class="az-column-signup">
        <i class="az-logo"><img src="../../assets/fup_logo.png" /></i>
        <div class="az-signup-header">
          <h2>Get Started</h2>
          <h4>It's free to signup and only takes a minute.</h4>
          <form @submit.prevent="register">
            <div class="form-group">
              <label>Email</label>
              <input type="text" class="form-control" placeholder="Enter your email" v-model="register_form.email">
            </div><!-- form-group -->
            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" placeholder="Enter your password"
                v-model="register_form.password">
            </div><!-- form-group -->
            <button class="btn btn-az-primary btn-block" type="submit">Create Account</button>
          </form>
        </div><!-- az-signup-header -->
        <div class="az-signup-footer">
          <p>Already have an account?<router-link to="/login">Sign In</router-link>
          </p>
        </div><!-- az-signin-footer -->
      </div><!-- az-column-signup -->
    </div><!-- az-signup-wrapper -->
  </body>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex';
export default {
  setup() {
    const register_form = ref({});
    const store = useStore();

    const register = () => {
      store.dispatch('register', register_form.value);
    }
    return {
      register_form,
      register
    }
  }
}
</script>

<style>

</style>