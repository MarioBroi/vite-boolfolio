<script>
import axios from 'axios';

export default {
    name: 'AppContacts',
    data() {
        return {
            base_api_url: 'http://127.0.0.1:8000',
            name: '',
            email: '',
            message: '',
            loading: false,
            success: false,
            errors: false,
        }
    },
    methods: {
        sendMessage() {
            this.loading = true;

            const data = {
                name: this.name,
                email: this.email,
                message: this.message,
            }

            const apiUrl = `${this.base_api_url}/api/contacts`
            console.log(apiUrl, data);

            axios
                .post(apiUrl, data)
                .then(response => {
                    console.log(response);
                    if (response.data.success) {
                        this.name = ''
                        this.email = ''
                        this.message = ''
                        this.success = response.data.message
                    } else {
                        this.errors = response.data.errors
                    }
                    this.loading = false;

                })
                .catch(err => {
                    console.error(err);
                })
        }
    }
}
</script>

<template>

    <h1>Contact me</h1>

    <template v-if="success">
        <div class="bg-success p-3 mb-2 rounded">
            {{ success }}
        </div>
    </template>
    <template v-if="errors">
        <div class="bg-danger p-3 mb-2 rounded">
            <ul class="list-unstyled">
                <li v-for="error in errors">
                    {{ error[0] }}
                </li>
            </ul>
        </div>
    </template>

    <form @submit.prevent="sendMessage()">

        <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control input_form" :class="{ 'border border-danger': errors.name }"
                name="name" id="name" aria-describedby="helpId" placeholder="..." v-model="name" />
            <small id="helpId" class="form-text text-light">Type your name</small>
        </div>
        <!-- /.name -->

        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control input_form" :class="{ 'border border-danger': errors.email }"
                name="email" id="email" aria-describedby="emailHelpId" placeholder="abc@mail.com" v-model="email" />
            <small id="emailHelpId" class="form-text text-light">Type your email</small>
        </div>
        <!-- /.email -->

        <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control input_form" :class="{ 'border border-danger': errors.message }" name="message"
                id="message" rows="3" v-model="message"></textarea>
        </div>
        <!-- /.message -->

        <button type="submit" class="btn submit_button" :disabled="loading">
            <!-- {{ loading ? `'Sending...'` : 'Send' }} -->
            <div v-if="loading == true">
                <div class="looping-rhombuses-spinner">
                    <div class="rhombus"></div>
                    <div class="rhombus"></div>
                    <div class="rhombus"></div>
                </div>
            </div>
            <div v-else>
                Send
            </div>
        </button>

    </form>

</template>

<style></style>