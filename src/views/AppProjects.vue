<script>
import axios from 'axios';

export default {
    name: 'AppProjects',
    data() {

        return {
            base_api_url: 'http://127.0.0.1:8000',
            base_projects_url: '/api/projects',
            projects: [],
            loading: true,
        }
    },
    methods: {
        nextPage(url) {
            this.callApi(url)
        },
        prevPage(url) {
            this.callApi(url)
        },
        goTo(page) {
            const url = this.base_api_url + this.base_projects_url + `?page=${page}`
            this.callApi(url)
        },
        callApi(url) {
            axios
                .get(url)
                .then(response => {
                    //console.log(response);
                    this.projects = response.data.projects
                    this.loading = false
                })
                .catch(err => {
                    console.log(err);
                })
        }
    },
    mounted() {
        let url = this.base_api_url + this.base_projects_url
        this.callApi(url);
    }
}
</script>

<template>
    <div class="projects" id="proj">
        <h3 class="text-center pb-2">My projects</h3>
        <div v-if="!loading">
            <div class="row row-cols-2 g-3 justify-content-center">
                <div class="col" v-for="project in projects.data">
                    <RouterLink :to="{ name: 'single-project', params: { id: project.id } }"
                        class="text-decoration-none">
                        <div class="card">
                            <div class="card-top">
                                <template v-if="project.project_img.startsWith('uploads')">
                                    <img class="card-img-top p-1"
                                        :src="base_api_url + '/storage/' + project.project_img"
                                        alt="Title of {{ project.title }}" />
                                </template>
                                <template v-else>
                                    <img class="card-img-top p-1" :src="project.project_img"
                                        alt="Title of {{ project.title }}" />
                                </template>
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
                                    <a :href="project.project_github"><i
                                            class="fa-brands fa-github text-primary"></i></a>
                                </p>
                            </div>
                            <!-- /.card-body -->
                        </div>
                        <!-- /.card -->
                    </RouterLink>
                </div>
                <!-- /.col -->
                <nav aria-label="Page navigation" class="d-flex justify-content-center">
                    <ul class="pagination">
                        <li class="page-item" v-show="projects.prev_page_url" @click="prevPage(projects.prev_page_url)">
                            <button class="page-link" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </button>
                        </li>

                        <li v-for="page in   projects.last_page  " class="page-item"
                            :class="{ 'active': page == projects.current_page }" @click="goTo(page)">
                            <button class="page-link">{{ page }}</button>
                        </li>

                        <li class="page-item" v-show="projects.next_page_url" @click="nextPage(projects.next_page_url)">
                            <button class="page-link" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
            <!-- /loading -->
        </div>
        <!-- /.row -->
        <div class="row justify-content-center pt-5" v-else>
            <div class="looping-rhombuses-spinner">
                <div class="rhombus"></div>
                <div class="rhombus"></div>
                <div class="rhombus"></div>
            </div>
        </div>
    </div>
    <!-- /.projects -->

</template>

<style>
.looping-rhombuses-spinner,
.looping-rhombuses-spinner * {
    box-sizing: border-box;
}

.looping-rhombuses-spinner {
    width: calc(15px * 4);
    height: 15px;
    position: relative;
}

.looping-rhombuses-spinner .rhombus {
    height: 15px;
    width: 15px;
    background-color: #ff1d5e;
    left: calc(15px * 4);
    position: absolute;
    margin: 0 auto;
    border-radius: 2px;
    transform: translateY(0) rotate(45deg) scale(0);
    animation: looping-rhombuses-spinner-animation 2500ms linear infinite;
}

.looping-rhombuses-spinner .rhombus:nth-child(1) {
    animation-delay: calc(2500ms * 1 / -1.5);
}

.looping-rhombuses-spinner .rhombus:nth-child(2) {
    animation-delay: calc(2500ms * 2 / -1.5);
}

.looping-rhombuses-spinner .rhombus:nth-child(3) {
    animation-delay: calc(2500ms * 3 / -1.5);
}

@keyframes looping-rhombuses-spinner-animation {
    0% {
        transform: translateX(0) rotate(45deg) scale(0);
    }

    50% {
        transform: translateX(-233%) rotate(45deg) scale(1);
    }

    100% {
        transform: translateX(-466%) rotate(45deg) scale(0);
    }
}
</style>