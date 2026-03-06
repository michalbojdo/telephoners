<script setup>
const props = defineProps({
    'text':String,
    'invert':Boolean
})
console.log(props.invert)
</script>

<template>
    <div :class="props.invert ? 'tag invert':'tag'">
        {{ props.text }}
    </div>
</template>

<style>
.tag{
    font-size: xx-small;
    text-transform: uppercase;
    background-color: var(--tele-black);
    color:#fff;
    padding:4px;
    margin-right:4px;
    border-radius: 4px;
}
.invert{
    background-color: #fff;
    color: var(--tele-black);
}
</style>