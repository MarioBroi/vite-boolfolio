<script>
import { RouterView } from 'vue-router';

export default {
  name: 'App',
}
</script>

<template>
  <header>

  </header>
  <main>
    <div class="frame">
      <div class="row">
        <div class="col vh-100 text-light">
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
              <!--               <ul class="list-unstyled text-light">
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
              </ul> -->
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
            <router-link :to="{ name: 'about' }"> About </router-link>
            <router-link :to="{ name: 'skill' }"> Skills </router-link>
            <RouterLink :to="{ name: 'projects' }">Projects</RouterLink>
            <RouterLink :to="{ name: 'education' }">Education</RouterLink>
            <RouterLink :to="{ name: 'contacts' }">Contacts</RouterLink>
          </section>
          <!-- /.site-left -->
        </div>
        <!-- /.col -->
        <div class="col">
          <section class="site-right text-light">
            <RouterView />
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