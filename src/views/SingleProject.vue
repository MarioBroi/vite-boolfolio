<script>
import axios from 'axios';
import { routerKey } from 'vue-router';
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
                        this.$router.push({ name: 'not-found' })
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
                <div class="card-top">
                    <!--                     <template v-if="project.project_img.startsWith('uploads')">
                        <img class="card-img-top" :src="base_api_url + '/storage/' + project.project_img"
                            alt="Title of {{ project.title }}" />
                    </template>
<div v-else-if="project.project_img === null">
    <P> NO IMAGE TO DISPLAY</P>
</div>
<template v-else>
                        <img class="card-img-top" :src="project.project_img" alt="Title of {{ project.title }}" />
                    </template> -->
                </div>
                <!-- /.card-top -->
                <div class="card-body">
                    <h4 class="card-title">{{ project.title }}</h4>
                    <p class="card-text"><strong>Description: </strong>{{ project.description }}
                    </p>
                    <p class="card-text" v-if="project.type">
                    <p class="card-text"><strong>Type: </strong>{{ project.type.name }}
                    </p>
                    </p>
                    <div><strong>Technologies:</strong></div>
                    <div v-for="technology in project.technologies">
                        {{ technology.name }}
                    </div>
                    <p class="card-text pt-3">
                        <strong>Link: </strong>
                        <a :href="project.project_link"><i class="fa-solid fa-link text-primary"></i></a>
                        <strong> | GitHub: </strong>
                        <a :href="project.project_github"><i class="fa-brands fa-github text-primary"></i></a>
                    </p>
                </div>
                <!-- /.card-body -->
            </div>
            <!-- /.card -->
        </div>
        <!-- /.container -->
    </div>
</template>