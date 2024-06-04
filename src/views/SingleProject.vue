<script>
import axios from 'axios';

export default {
    name: 'SingleProject',
    data() {
        return {
            base_api_url: 'http://127.0.0.1:8000',
            base_project_url: '/api/projects',
            project: {},
            loading: true,
        }
    },
    methods: {
    },
    mounted() {
        console.log(this.$route.params.id, this.base_api_url, this.base_project_url)
        const url = this.base_api_url + this.base_project_url + `/${this.$route.params.id}`
        console.log(url);

        axios
            .get(url)
            .then(response => {
                console.log(response)
                if (response.data.success) {
                    console.log(response.data.response)
                    this.project = response.data.response
                    this.loading = false
                    console.log(this.project);

                } else {
                    this.$router.push({ name: 'not-found' })
                }
            }).catch(err => {
                console.error(err)
            })
    }
}
</script>

<template>
    <div class=" card">
        <div class="card-top">
            <img class="card-img-top" :src="base_api_url + '/storage/' + project.project_img"
                alt="Title of {{ project.title }}" />
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
</template>