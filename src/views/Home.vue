<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

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
              <b-form-input
                id="input-3"
                v-model="form.lastName"
                required
                placeholder="Last Name"
              ></b-form-input>
            </b-form-group>

            <b-form inline>
              <label class="mr-sm-2" for="inline-form-custom-select-pref">Date of Birth:</label>
              <b-form-select
                class="mb-2 mr-sm-2 mb-sm-0"
                :value="null"
                :options="{ '1': 'One', '2': 'Two', '3': 'Three' }"
                id="inline-form-custom-select-pref"
              >
                <option slot="first" :value="null">Month</option>
              </b-form-select>

              <b-form-select
                class="mb-2 mr-sm-2 mb-sm-0"
                :value="null"
                :options="{ '1': 'One', '2': 'Two', '3': 'Three' }"
                id="inline-form-custom-select-pref"
              >
                <option slot="first" :value="null">Day</option>
              </b-form-select>

              <b-form-select
                class="mb-2 mr-sm-2 mb-sm-0"
                :value="null"
                :options="{ '1': 'One', '2': 'Two', '3': 'Three' }"
                id="inline-form-custom-select-pref"
              >
                <option slot="first" :value="null">Year</option>
              </b-form-select>
            </b-form>

            <b-form-group id="input-group-3" label="Password:" label-for="input-3">
               <b-form-input
                id="input-4"
                v-model="form.password"
                required
                placeholder="Password"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4">
              <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                <b-form-checkbox value="agreed">I agree to the terms and conditions</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>

            <b-button type="submit" variant="primary">Register</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
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
          checked: []
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
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
