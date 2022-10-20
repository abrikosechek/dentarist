<template>
  <div
    class="w-[290px] h-[360px] p-[16px] bg-white border-[rgba(24,_25,_69,_0.1)] border-solid border-[1px] rounded-[32px] duration-[0.5s] hover:shadow-[0px_64px_96px_rgba(24,_25,_69,_0.05)] hover:border-white"
  >
    <!-- Banner -->
    <div class="flex items-center justify-center w-full h-[200px] rounded-[32px]" :style="{ background: color }">
      <div
        class="h-[96px] aspect-square p-[12px] bg-[rgba(255,_255,_255,_0.3)] rounded-[16px]"
      >
        <div
          class="flex items-center justify-center w-full h-full bg-white rounded-[16px]"
        >
          <Icon :name="icon" class="fill-primary h-[32px]" />
        </div>
      </div>
    </div>

    <p class="text-[20px] leading-[28px] font-bold text-center mt-[25px]">{{ title }}</p>

    <p class="text-md text-center text-dark-blue mt-[10px] opacity-50">{{ text }}</p>
  </div>
</template>

<script>
import Icon from "@/components/Icon.vue"

export default {
  components: { Icon },
  props: {
    color: {
      default: "#DBEFFA",
      type: String,
    },
    icon: {
      default: "jaw",
      type: String,
    },
    title: {
      default: "Title of card",
      type: String,
    },
    text: {
      default: "Lorem ipsum is placeholder text commonly used in the graphic,",
      type: String,
    },
  },
};
</script>

<style scoped lang="scss"></style>
