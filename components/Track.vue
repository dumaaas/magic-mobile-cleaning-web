<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import "@/assets/sass/abstracts/_colors.scss";
@import "@/assets/sass/abstracts/_mixins.scss";

    div {
        background-color: #19A3A6;
        color: white;
        font-size: 1.393rem;
        text-transform: uppercase;
        text-align: center;
        padding: 2.344rem 0;
        letter-spacing: 0.165rem;
        @include breakpoint($xs) {
            font-size: 0.85rem;
            padding: 0.813rem 0;
        }
    }
</style>