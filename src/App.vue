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

  <header class="site-header">
    <h1>Header</h1>
  </header>
  <!-- /.site-header -->

  <main class="site-main">
    <div class="container">
      <div class="row">
        <div class="col" v-for="project in projects.data">
          <div class="card">
            <template v-if="project.project_img.startsWith('uploads')">
              <img class="card-img-top" :src="base_api_url + '/storage/' + project.project_img"
                alt="Title of {{ project.title }}" />
            </template>
            <template v-else>
              <img class="card-img-top" :src="project.project_img" alt="Title of {{ project.title }}" width="274px" />
            </template>
            <div class="card-body">
              <h4 class="card-title">{{ project.title }}</h4>
              <p class="card-text"> <strong>Description: </strong>{{ project.description }}</p>
              <div v-if="project.type">
                <p class="card-text">
                  <strong>Type: </strong>{{ project.type.name }}
                </p>
              </div>
              <p class="card-text"><strong>Technologies:</strong></p>
              <ul v-for="technology in project.technologies">
                <li class="card-text">
                  {{ technology.name }}
                </li>
              </ul>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </main>
  <!-- /.site-main -->

  <footer class="site-footer">
    <h1>Footer</h1>
  </footer>
  <!-- /.site-footer -->
</template>

<style></style>
