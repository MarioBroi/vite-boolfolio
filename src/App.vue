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
        <div class="col vh-100">
          <RouterView />
        </div>
        <!-- /.col -->
        <div class="col">
          <section class="site-right text-light">
            <router-link :to="{ name: 'home' }"> Home </router-link>
            <router-link :to="{ name: 'about' }"> About </router-link>
            <router-link :to="{ name: 'skill' }"> Skills </router-link>
            <RouterLink :to="{ name: 'projects' }">Projects</RouterLink>
            <RouterLink :to="{ name: 'education' }">Education</RouterLink>
            <RouterLink :to="{ name: 'contacts' }">Contacts</RouterLink>
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