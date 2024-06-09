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
    <div v-if="!loading">
        <div class="card card_background">
            <div class="card-top">
                <img class=" card_image_big  p-2" :src="base_api_url + '/storage/' + project.project_img"
                    alt="Title of {{ project.title }}" />
            </div>
            <!-- /.card-top -->
            <div class="card-body">
                <h4 class="card-title">{{ project.title }}</h4>
                <p class="card-text">Description: {{ project.description }}
                </p>
                <p class="card-text" v-if="project.type">
                <p class="card-text">Type: {{ project.type.name }}
                </p>
                </p>
                <div>
                    Technologies:
                    <span v-for="technology in project.technologies">
                        {{ technology.name + ' ' }}
                    </span>
                </div>
                <p class="card-text pt-3">
                <div v-if="project.project_github != null">
                    <span>GitHub: </span>
                    <a :href="project.project_github" target="_blank" class="card_links_icons"><i
                            class="fa-brands fa-github fa-xl px-2"></i></a>
                </div>
                <div v-if="project.project_link != null">
                    <span>Link: </span>
                    <a :href="project.project_link" target="_blank" class="card_links_icons"><i
                            class="fa-solid fa-link fa-xl px-2"></i></a>
                </div>
                </p>
            </div>
            <!-- /.card-body -->
        </div>
        <!-- /.card -->
    </div>
    <!-- /loading -->
    <div class="row justify-content-center pt-5" v-else>
        <div class="looping-rhombuses-spinner">
            <div class="rhombus"></div>
            <div class="rhombus"></div>
            <div class="rhombus"></div>
        </div>
    </div>
    <!-- /spinners -->
</template>