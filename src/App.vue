<script>
import axios from 'axios';

export default {
  name: 'App',
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
          console.log(response);
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
  <main>
    <div class="frame">
      <div class="row">
        <div class="col vh-100">
          <section class="site-left vh-100 d-flex flex-column justify-content-between">
            <div>
              <p class="text-light">Hi I'm</p>
              <h1 class="text-light">Mario Broi</h1>
              <h2 class="text-light">a Junior Web Developer</h2>
              <p class="text-light pb-5 fs-5">
                with a passion for creating intuitive and dynamic user
                experiences. <br> I thrive on learning new technologies and applying them to solve
                real-world problems.
              </p>
              <ul class="list-unstyled text-light">
                <li>
                  <a href="#about" class="text-light text-decoration-none fs-4">
                    About
                  </a>
                </li>
                <li class="pt-3">
                  <a href="#tech" class="text-light text-decoration-none fs-4">
                    Technical skills
                  </a>
                </li>
                <li class="pt-3">
                  <a href="#proj" class="text-light text-decoration-none fs-4">
                    Projects
                  </a>
                </li>
                <li class="pt-3">
                  <a href="#edu" class="text-light text-decoration-none fs-4">
                    Education
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <span>
                <a href="" class="text-light text-decoration-none">
                  <i class="fa-brands fa-github"></i>
                </a>
              </span>
              <span class="px-3">
                <a href="" class="text-light text-decoration-none">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </span>
              <span>
                <a href="" class="text-light text-decoration-none">
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
              </span>
            </div>
          </section>
          <!-- /.site-left -->
        </div>
        <!-- /.col -->
        <div class="col">
          <section class="site-right text-light">
            <div class="about-me" id="about">
              <h3>About me</h3>
              <p>After seven years of working in restaurants across Italy and London, I decided to make a
                significant career change by pursuing a passion for programming and web development. I
                discovered the Boolean online course, which is now training me to become a proficient
                web
                developer.</p>
            </div>
            <!-- /.about-me -->

            <div class="technical-skills pt-5" id="tech">
              <h3>Technical skills</h3>
              <ul class="list-unstyled">
                <li>
                  <span class="fw-bold">Front-end:</span> HTML, CSS, JavaScript, Bootstrap, Vue.js,
                  Sass
                </li>
                <li class="py-3">
                  <span class="fw-bold">Back-end-end:</span> PHP, MySql, Laravel
                </li>
                <li>
                  <span class="fw-bold">Tools:</span> Git, GitHub, MAMMP, PostMan
                </li>
              </ul>
            </div>
            <!-- /.technical-skills -->

            <div class="projects pt-5" id="proj">
              <h3 class="text-center pb-2">My projects</h3>
              <div class="row row-cols-3 g-3" v-if="!loading">
                <div class="col" v-for="project in projects.data">
                  <div class="card">
                    <div class="card-top">
                      <template v-if="project.project_img.startsWith('uploads')">
                        <img class="card-img-top" :src="base_api_url + '/storage/' + project.project_img"
                          alt="Title of {{ project.title }}" />
                      </template>
                      <template v-else>
                        <img class="card-img-top" :src="project.project_img" alt="Title of {{ project.title }}"
                          width="274px" />
                      </template>
                    </div>
                    <!-- /.card-top -->
                    <div class="card-body">
                      <h4 class="card-title">{{ project.title }}</h4>
                      <p class="card-text"><strong>Description: </strong>{{ project.description }}
                      </p>
                      <div v-if="project.type">
                        <p class="card-text"><strong>Type: </strong>{{ project.type.name }}
                        </p>
                      </div>
                      <p class="card-text"><strong>Technologies:</strong></p>
                      <ul class="list-unstyled" v-for="technology in project.technologies">
                        <li class="card-text">
                          {{ technology.name }}
                        </li>
                      </ul>
                      <p class="card-text"><strong>Link: </strong>
                        <a :href="project.project_link">{{ project.project_link }}</a>
                      </p>
                      <p class="card-text"><strong>GitHub: </strong>
                        <a :href="project.project_github">{{ project.project_github }}</a>
                      </p>
                    </div>
                    <!-- /.card-body -->
                  </div>
                  <!-- /.card -->
                </div>
                <!-- /.col -->
                <nav aria-label="Page navigation">
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
              <!-- /.row -->
              <div class="row" v-else>
                <div class="col">
                  Loading ...
                </div>
                <!-- /.col -->
              </div>
              <!-- /.row -->
            </div>
            <!-- /.projects -->

            <div class="education pt-5" id="edu">
              <h3>Education</h3>
              <p>
                Currently enrolled in the Boolean online course, specializing in web development
              </p>
            </div>
            <!-- /.education -->
          </section>
          <!-- /.site-right -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.frame -->
  </main>
  <AppMain />
</template>