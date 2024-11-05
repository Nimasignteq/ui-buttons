<template>
  <div class="p-4 space-y-8">
    <!-- Forward (Primary) Buttons Desktop -->
    <div class="space-y-4">
      <h1 class="text-xl font-bold">Forward Button Desktop</h1>
      <div class="space-y-2">
        <CustomButton variant="primary" size="small">Small</CustomButton>
        <CustomButton variant="primary" size="base">Base</CustomButton>
        <CustomButton variant="primary" size="large">Large</CustomButton>
        <CustomButton variant="primary" size="x-large">X-Large</CustomButton>
        <CustomButton variant="primary" size="base" :disabled="true"
          >Disabled</CustomButton
        >
      </div>
    </div>
    <div class="space-y-4">
      <h1 class="text-xl font-bold">Forward Button Mobile</h1>
      <div class="space-y-2">
        <CustomButton variant="primary" size="mobile">Mobile</CustomButton>
        <CustomButton variant="primary" size="mobile" :disabled="true"
          >Mobile Disabled</CustomButton
        >
      </div>
    </div>

    <div class="space-y-4">
      <h1 class="text-xl font-bold">White Button Desktop</h1>
      <div class="space-y-2">
        <CustomButton variant="secondary" size="small">Small</CustomButton>
        <CustomButton variant="secondary" size="base">Base</CustomButton>
        <CustomButton variant="secondary" size="large">Large</CustomButton>
        <CustomButton variant="secondary" size="x-large">X-Large</CustomButton>
        <CustomButton variant="secondary" size="base" :disabled="true"
          >Disabled</CustomButton
        >
      </div>
    </div>

    <div class="space-y-4">
      <h1 class="text-xl font-bold">White Button Mobile</h1>
      <div class="space-y-2">
        <CustomButton variant="secondary" size="mobile">Mobile</CustomButton>
        <CustomButton variant="secondary" size="mobile" :disabled="true"
          >Mobile Disabled</CustomButton
        >
      </div>
    </div>
  </div>
  <div class="space-y-4">
      <h1 class="text-xl font-bold">Error Button Desktop</h1>
      <div class="space-y-2">
        <CustomButton variant="error" size="small">Small</CustomButton>
        <CustomButton variant="error" size="base">Base</CustomButton>
        <CustomButton variant="error" size="large">Large</CustomButton>
        <CustomButton variant="error" size="x-large">X-Large</CustomButton>
        <CustomButton variant="error" size="base" :disabled="true">Disabled</CustomButton>
      </div>
    </div>

    <!-- Error Buttons Mobile -->
    <div class="space-y-4">
      <h1 class="text-xl font-bold">Error Button Mobile</h1>
      <div class="space-y-2">
        <CustomButton variant="error" size="mobile">Mobile</CustomButton>
        <CustomButton variant="error" size="mobile" :disabled="true">Mobile Disabled</CustomButton>
      </div>
    </div>
</template>

<script>
import CustomButton from "./components/CustomButton.vue";

export default {
  components: {
    CustomButton,
  },
};
</script>
