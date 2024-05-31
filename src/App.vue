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
            <div class="personal-description">
              <p class="text-light">Hi I'm</p>
              <h1 class="text-light">Mario Broi</h1>
              <h2 class="text-light">a Junior Web Developer</h2>
              <p class="text-light pb-5 fs-5">
                with a passion for creating intuitive and dynamic user
                experiences. <br> I thrive on learning new technologies and applying them to solve
                real-world problems.
              </p>
            </div>
            <!-- /.personal-description -->
            <div class="router-links">
              <router-link :to="{ name: 'about' }" class="text-light text-decoration-none fs-4">
                About
              </router-link>
              <br>
              <router-link :to="{ name: 'skill' }" class="text-light text-decoration-none fs-4">
                Skills
              </router-link>
              <br>
              <RouterLink :to="{ name: 'projects' }" class="text-light text-decoration-none fs-4">
                Projects
              </RouterLink>
              <br>
              <RouterLink :to="{ name: 'education' }" class="text-light text-decoration-none fs-4">
                Education
              </RouterLink>
              <br>
              <RouterLink :to="{ name: 'contacts' }" class="text-light text-decoration-none fs-4">
                Contacts
              </RouterLink>
            </div>
            <!-- /.router-links -->
            <div class="socials">
              <span>
                <a href="https://github.com/MarioBroi" class="text-light text-decoration-none">
                  <i class="fa-brands fa-github"></i>
                </a>
              </span>
              <span class="px-3">
                <a href="https://www.linkedin.com/in/mario-broi/" class="text-light text-decoration-none">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </span>
              <span>
                <a href="https://x.com/MarioBroi" class="text-light text-decoration-none">
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
              </span>
            </div>
            <!-- /.socials -->
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