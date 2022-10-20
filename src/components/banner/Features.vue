<template>
  <div
    class="container-lg relative px-[275px] pt-[90px] pb-[135px] bg-yogurt rounded-[50px] text-dark-blue overflow-hidden"
  >
    <p class="text-sm uppercase">Features</p>
    <p class="text-xl mt-[16px]">Specialized care through experience</p>
    <p class="text-lg mt-[24px]">
      Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
      industries for previewing layouts and visual mockups.
    </p>

    <div
      class="grid grid-flow-row grid-cols-[repeat(2,_400px)] gap-y-[4.5em] w-full mt-[105px]"
    >
      <div class="flex items-center gap-[1.5em] h-[6em]">
        <!-- Icon -->
        <div
          class="flex-[0_0_auto] flex items-center justify-center w-[6em] aspect-square bg-[rgba(255,_255,_255,_0.3)] rounded-[1em]"
        >
          <div
            class="flex items-center justify-center w-[4.5em] h-[4.5em] bg-white rounded-[1em]"
          >
            <Icon class="fill-primary w-[32px]" :name="'shield-check'" />
          </div>
        </div>

        <!-- Content -->
        <div class="flex flex-col gap-[0.5em]">
          <p class="text-[20px] leading-[28px] font-bold">Safety first</p>
          <p class="text-md opacity-50">
            We prioritize safety with health checks and more
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonLg from "@/components/button/lg.vue";
import Icon from "@/components/Icon.vue";

export default {
  components: { ButtonLg, Icon },
};
</script>

<style scoped lang="scss"></style>
