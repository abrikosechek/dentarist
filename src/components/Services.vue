<template>
  <div class="container">
    <p class="text-xs text-primary uppercase">Services</p>

    <div class="flex justify-between items-center w-full mt-[15px]">
      <p class="text-xl">
        Feel amazing about <br />
        your oral health
      </p>

      <p class="text-lg max-w-[550px] opacity-60">
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </p>
    </div>

    <!-- Cards -->
    <div
      class="grid grid-cols-[repeat(auto-fill,_290px)] justify-between gap-x-[20px] gap-y-[40px] w-full mt-[100px]"
    >
      <CardService
        v-for="(card, index) in cards"
        :key="index"
        :color="card.color"
        :icon="card.icon"
        :title="card.title"
      />
    </div>

    <button
      class="flex items-center justify-center gap-[15px] w-full max-w-[240px] min-h-[65px] mx-auto mt-[100px] p-[10px] bg-[rgba(88,_63,_188,_0.1)] rounded-[16px]"
    >
      <p class="text-md font-bold text-primary">View all service list</p>

      <div
        class="flex items-center justify-center h-[24px] aspect-square bg-primary rounded-full"
      >
        <Icon class="h-[12px] fill-primary border-white" :name="'arrow'" />
      </div>
    </button>
  </div>
</template>

<script>
import CardService from "@/components/card/service.vue";
import Icon from "@/components/Icon.vue";

export default {
  components: { CardService, Icon },
  data() {
    return {
      cards: [
        {
          color: "#DBEFFA",
          icon: "jaw",
          title: "Dentures",
        },
        {
          color: "#DBDEFA",
          icon: "tooth-opened",
          title: "Implants",
        },
        {
          color: "#F6DBFA",
          icon: "tooth-group",
          title: "Whitening",
        },
        {
          color: "#FADBE2",
          icon: "tooth-canal",
          title: "Root Canal",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss"></style>
