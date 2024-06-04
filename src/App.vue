<script>
import { RouterView } from 'vue-router';
import LeftPage from "./components/LeftPage.vue";

export default {
  name: 'App',
  components: {
    LeftPage
  },
}
</script>

<template>

  <main>
    <div class="frame">
      <div class="row">
        <div class="col vh-100 text-light">
          <LeftPage />
        </div>
        <!-- /.col -->
        <div class="col">
          <section class="site-right text-light">
            <transition name="fadeIn">
              <RouterView />
            </transition>
          </section>
          <!-- /.site-right -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.frame -->
  </main>

</template>

<style></style>