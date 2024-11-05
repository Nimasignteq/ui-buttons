<template>
  <button
    :class="[
      baseClasses,
      sizeClasses,
      disabled
        ? variantClasses.disabled
        : [variantClasses.default, variantClasses.hover, variantClasses.active],
      variant === 'secondary' ? 'text-black' : 'text-white'
    ]"
    :disabled="disabled"
  >
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "base",
      validator: (value) =>
        ["mobile", "small", "base", "large", "x-large"].includes(value),
    },
    variant: {
      type: String,
      default: "primary",
      validator: (value) => ["primary", "secondary", "error"].includes(value),
    },
  },
  computed: {
    baseClasses() {
      return "font-semibold flex items-center justify-center transition duration-200 ease-in-out focus:outline-none";
    },
    sizeClasses() {
      switch (this.size) {
        case "mobile":
          return "w-[342px] h-[48px] text-[20px] rounded-[8px]";
        case "small":
          return "w-[138px] h-[32px] text-[12px] rounded-[8px]";
        case "base":
          return "w-[167px] h-[40px] text-[14px] rounded-[10px]";
        case "large":
          return "w-[205px] h-[48px] text-[16px] rounded-[12px]";
        case "x-large":
          return "w-[234px] h-[56px] text-[18px] rounded-[14px]";
        default:
          return "";
      }
    },
    variantClasses() {
      const variants = {
        primary: {
          default: "bg-primary-button-default",
          hover: "hover:bg-primary-button-hover",
          active: "active:bg-primary-button-active",
          disabled: "bg-primary-button-disabled cursor-not-allowed",
        },
        secondary: {
          default: "bg-secondary-button-default",
          hover: "hover:bg-secondary-button-hover",
          active: "active:bg-secondary-button-active",
          disabled: "bg-secondary-button-disabled cursor-not-allowed",
        },
        error: {
          default: "bg-error-button-default",
          hover: "hover:bg-error-button-hover",
          active: "active:bg-error-button-active",
          disabled: "bg-error-button-disabled cursor-not-allowed",
        },
      };
      return variants[this.variant];
    }
  },
};
</script>