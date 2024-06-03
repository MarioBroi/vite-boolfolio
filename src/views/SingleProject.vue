<script>
import axios from 'axios';
export default {
    name: 'SingleProject',
    data() {
        return {
            base_api_url: 'http://127.0.0.1:8000',
            base_projects_url: '/api/projects',
            project: null,
            projectId: null,
            loading: true,
        }
    },
    methods: {
        callApi(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response);
                    if (response.data.success) {
                        this.project = response.data.response
                        console.log(this.project);
                        this.loading = false
                    } else {

                    }
                })
                .catch(err => {
                    console.log(err);
                })
        },
    },
    mounted() {
        this.projectId = this.$route.params.id;
        console.log(this.projectId);

        let url = this.base_api_url + this.base_projects_url + `/${this.projectId}`;
        console.log(url);

        this.callApi(url);
    }
}
</script>

<template>
    <div>
        <h1>Single project N: {{ this.projectId }}</h1>
        {{ console.log(this.project) }}
        <div class="container">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{{ project.name }}</h5>
                    <p class="card-text">{{ project.description }}</p>
                </div>
                <!-- /.card-body -->
            </div>
            <!-- /.card -->
        </div>
        <!-- /.container -->
    </div>
</template>