<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <template>
      <b-container class="bv-example-row">
        <div>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
              id="input-group-1"
              label="Email address:"
              label-for="input-1"
              description="We'll never share your email with anyone else."
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="Email"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="form.firstName"
                required
                placeholder="First Name"
              ></b-form-input>
              <br />
              <b-form-input
                id="input-3"
                v-model="form.lastName"
                required
                placeholder="Last Name"
              ></b-form-input>
            </b-form-group>


            <b-form-group id="input-group-2" label="Your Date of Birth:" label-for="input-4">
              <b-form-input :id="inline-form-custom-select-pref" v-model="form.dateOfBirth" type="date" required></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Your Password:" label-for="input-5">
              <b-input type="password" id="text-password" v-model="form.password" required placeholder="Password" aria-describedby="password-help-block"></b-input>
              <b-form-text id="password-help-block">
                Your password must be 8-20 characters long, contain letters and numbers, and must not
                contain spaces, special characters, or emoji.
              </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-4">
              <b-form-radio-group required v-model="form.checked" id="checkboxes-4">
                <b-form-radio required value="agreed">I agree to the terms and conditions</b-form-radio>
              </b-form-radio-group>
            </b-form-group>

            <b-button type="submit" variant="primary">Register</b-button>
            <b-button type="reset" :style="{ backgroundColor: '#e54711', borderColor: '#e54711' }" >Reset</b-button>
          </b-form>
          <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
          </b-card>
        </div>
      </b-container>
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Register',
  components: {
    HelloWorld
  },
    data() {
      return {
        form: {
          email: '',
          firstName: '',
          lastName: '',
          password: '',
          dateOfBirth: '',
          checked: []
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form), 'Success!')
        this.$router.push("/Login");
        this.$store.dispatch('registerUser', this.form);
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.firstName = ''
        this.form.lastName = ''
        this.form.password = ''
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
 
}
</script>
