<template>
  <header>header</header>
  <nav>navigation</nav>
  <section>
    <article>article1</article>
    <article>article2</article>
    <article>article3</article>
    <button class="px-5 px-2 border rounded">
      <NuxtLink to="/login"> hi </NuxtLink>
    </button>
  </section>
  <aside>aside</aside>
  <footer>footer</footer>
  <GoogleMap
    api-key="AIzaSyD1p5xDLclRH-RgWQ7DwnjvwUmMHFOVCcI"
    style="width: 100%; height: 500px"
    :center="center"
    :zoom="15"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>
<script>
import { defineComponent } from 'vue';
import { GoogleMap } from 'vue3-google-map';

export default defineComponent({
  components: { GoogleMap },
  setup() {
    const center = { lat: 40.689247, lng: -74.044502 };

    return { center };
  },
});
</script>
