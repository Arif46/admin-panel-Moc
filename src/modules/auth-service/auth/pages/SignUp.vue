<template>
   <b-container fluid class="px-0">
     <b-row align-v="center" no-gutters>
        <b-col cols="12" class="bg-secondary">
            <div class="signup-wrapper mc-signup-bg">
              <b-card>
                <b-form>
                <img class="img-fluid d-block mx-auto" width="100" src="@/assets/images/logo.png" alt="">
                <h5 class="text-center mb-3 text-light">Ministry of Commerce</h5>
                <hr class="text-light">
                <b-row>
                  <b-col>
                    <b-form-group
                        id="name"
                        label="Name"
                        label-for="name"
                    >
                        <b-form-input
                        id="nameInput"
                        v-model="form.name"
                        type="text"
                        placeholder="Enter Name"
                        required
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group
                    id="pass"
                    label="Password"
                    label-for="pass">
                        <b-form-input
                        id="passInput"
                        v-model="form.pass"
                        type="password"
                        placeholder="Enter Password"
                        required
                        ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col>
                    <b-form-group
                        id="email"
                        label="Email"
                        label-for="email"
                    >
                        <b-form-input
                        id="emailInput"
                        v-model="form.email"
                        type="email"
                        placeholder="Enter email"
                        required
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group
                    id="cPass"
                    label="Confirm Password"
                    label-for="cPass">
                        <b-form-input
                        id="cPass"
                        v-model="form.cPass"
                        type="password"
                        placeholder="Enter Password"
                        required
                        ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-button block type="submit" class="mb-2" variant="primary">SignUp</b-button>
                <b-small class="text-light">Already have an account? <a href="javascript:">Sign in</a></b-small>
                </b-form>
              </b-card>
            </div>
        </b-col>
   </b-row>
   </b-container>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        email: '',
        pass: '',
        cPass: ''
      }
    }
  }
}
</script>
<style>
.mc-signup-bg{
  background: url(../../../../assets/images/sidebar-bg.png);
  background-position: center;
}
.signup-wrapper{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.signup-wrapper .form-group label{
  color: var(--white);
}
.signup-wrapper .card{
  backdrop-filter: blur(2px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 1);
}
</style>
