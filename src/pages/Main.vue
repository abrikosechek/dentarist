<template>
  <BannerMain />

  <p class="text-xl-1 text-center max-w-[840px] mx-auto mt-[150px]">
    Dentalist is re-imagining what the dental experience can be and proudly setting a new
    standard for patient care.
  </p>

  <div class="h-[4px] w-[120px] mx-auto mt-[30px] bg-primary rounded-[2px]" />

  <Services class="mt-[110px]" />

  <!-- Book an pointment -->
  <div class="container flex items-center justfiy-between mt-[200px] gap-[110px]">
    <!-- Banner -->
    <div class="flex-[0_0_auto] relative flex items-center h-[510px] pl-[70px]">
      <div class="absolute left-0 top-0 bg-birch h-full w-[400px] rounded-[32px]" />
      <img
        class="relative w-[480px] rounded-[32px]"
        src="@/static/main_page/appointment.jpg"
      />
    </div>

    <!-- Content -->
    <div>
      <p class="text-xs text-primary uppercase">Dental 24H Emergency</p>
      <p class="text-xl mt-[16px]">
        Gentle, friendly treatment from our locally practice.
      </p>
      <p class="text-md mt-[24px] max-w-[510px]">
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </p>

      <ButtonLg class="mt-[72px]">
        <p class="text-md font-bold">Book an appointment</p>
      </ButtonLg>
    </div>
  </div>

  <BannerFeatures class="mt-[150px]" />
</template>

<script>
import BannerMain from "@/components/banner/Main.vue";
import BannerFeatures from "@/components/banner/Features.vue";
import Services from "@/components/Services.vue";
import ButtonLg from "@/components/button/lg.vue";

export default {
  components: {
    BannerMain,
    BannerFeatures,
    Services,
    ButtonLg,
  },
};
</script>

<style scoped lang="scss"></style>
