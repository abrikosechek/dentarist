<template>
  <div class="container flex justify-between items-center my-[30px]">
    <router-link to="/main">
      <img src="@/static/logo/lg.png" alt="Dentalist" />
    </router-link>

    <div class="flex items-center gap-[60px]">
      <router-link
        v-for="(link, index) in links"
        :key="index"
        class="text-sm font-bold capitalize"
        :to="{ path: link.path }"
      >
        {{ link.text }}
      </router-link>
    </div>

    <ButtonMd>
      <p class="text-sm font-bold">
        Book appointment
      </p>
    </ButtonMd>
  </div>
</template>

<script>
import ButtonMd from "@/components/button/md.vue"

export default {
  components: { ButtonMd },
  data() {
    return {
      links: [
        {
          text: "About Us",
          path: "/about",
        },
        {
          text: "New Patient",
          path: "/news",
        },
        {
          text: "Our Services",
          path: "/services",
        },
        {
          text: "Contact us",
          path: "/contacts",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss"></style>
