<script setup>
import SideBar from './components/SideBar.vue';
import NavBar from './components/NavBar.vue';
import NavMenu from './components/NavMenu.vue';
import ListNotes from './components/ListNotes.vue';
import NotesDetails from './components/NotesDetails.vue';
</script>

<template>
  <body>
    <SideBar />
    <div class="div header">
      <NavBar />
      <div class="main-wrapper">

        <NavMenu />
        <section class="main-content2">
          <ListNotes />
          <NotesDetails />
        </section>
      </div>
    </div>
   
  </body>
</template>

<style scoped>

</style>
