<template>
  <div
    class="container-lg relative flex items-center h-[700px] px-[100px] py-[80px] bg-birch rounded-[50px] text-dark-blue overrflow-hidden"
  >
    <!-- Content -->
    <div class="relative max-w-[550px] mt-[50px] z-[3]">
      <p class="text-xxl text-dark-blue">Entrust your smile to professional</p>

      <p class="text-lg mt-[30px] opacity-70">
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </p>

      <div class="flex gap-[30px] mt-[70px]">
        <ButtonLg class="h-[64px]">
          <p class="text-md">Book an appointment</p>
        </ButtonLg>

        <!-- Phone -->
        <div class="flex items-center gap-[15px] h-full">
          <div
            class="h-[64px] aspect-square p-[8px] bg-[rgba(255,_255,_255,_0.3)] rounded-[16px]"
          >
            <div
              class="flex items-center justify-center w-full h-full bg-white rounded-[16px]"
            >
              <Icon :name="'call'" class="fill-primary w-[20px] h-[20px]" />
            </div>
          </div>

          <div class="flex flex-col justify-center">
            <p class="text-xs text-primary">Dental 24H Emergency</p>
            <p class="text-md font-bold">03 482 394 123</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Right -->
    <div class="absolute bottom-[0] right-[120px] h-[650px] z-[2]">
      <!-- Indoor -->
      <img class="z-[2]" src="@/static/main_banner/indoor.png" alt="indoor" />

      <!-- Tooth -->
      <div
        class="absolute top-[60px] left-[-80px] rotate-[-30deg] flex items-center justify-center h-[70px] aspect-square bg-primary rounded-[16px]"
      >
        <Icon :name="'tooth-bless'" class="h-[32px] fill-white" />
      </div>

      <!-- Consultant -->
      <div
        class="absolute left-[-90px] bottom-[80px] flex items-center gap-[20px] w-[270px] p-[15px] bg-white rounded-[24px] z-[10]"
      >
        <div class="relative h-[56px] aspect-square">
          <img
            class="rounded-[16px]"
            src="@/static/main_banner/Samantha.jpg"
            alt="Samantha"
          />
          <div
            class="absolute right-0 bottom-0 bg-light-green w-[14px] aspect-square border-white border-solid border-[2px] rounded-full"
          />
        </div>

        <div class="flex flex-col justify-center gap-[5px]">
          <p class="text-sm">Dr. Samantha Alice</p>
          <p class="text-xs opacity-60">Consultant</p>
        </div>
      </div>

      <!-- Shield -->
      <div
        class="absolute right-[-50px] bottom-[100px] rotate-[30deg] h-[96px] aspect-square p-[12px] bg-[rgba(255,_255,_255,_0.3)] rounded-[16px]"
      >
        <div
          class="flex items-center justify-center w-full h-full bg-white rounded-[16px]"
        >
          <Icon :name="'shield-check'" class="fill-primary w-[40px]" />
        </div>
      </div>

      <!-- Circles square -->
      <div class="absolute bottom-[45%] left-[-40px] flex flex-col gap-[15px] z-[-1]">
        <div v-for="(row, row_index) in 8" :key="row_index" class="flex gap-[15px]">
          <div
            v-for="(circle, circle_index) in 8"
            :key="circle_index"
            class="h-[4px] aspect-square bg-[#7ABADD] rounded-full"
          />
        </div>
      </div>

      <!-- Circle Top-Right -->
      <div
        class="absolute right-[5%] top-[15%] h-[16px] aspect-square bg-light-primary rounded-full"
      />

      <!-- Circle Bottom-Right -->
      <div
        class="absolute right-[-15%] bottom-[50%] h-[26px] aspect-square bg-[#7ABADD] rounded-full"
      />

      <!-- Circle Bottom-Left -->
      <div
        class="absolute left-[-50px] bottom-[35%] h-[12px] aspect-square bg-primary rounded-full"
      />
    </div>

    <!-- Wave -->
    <img
      class="absolute left-0 bottom-[18%] w-[1490px] z-[1]"
      src="@/static/main_banner/wave.png"
      alt=""
    />
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
