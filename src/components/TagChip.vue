<script setup lang="ts">
const props = defineProps({
    'text':String,
    'bright':Boolean,
    
    'nokia': Boolean
})
console.log(props)
</script>

<template>
    <div :class="{tag:true, nokia: props.nokia, bright: props.bright}">
        {{ props.text }}
    </div>
</template>

<style>
.tag{
    font-size: xx-small;
    text-transform: uppercase;
    background-color: #fff;
    color:var(--tele-black);
    padding:4px;
    margin-right:4px;
    border-radius: 4px;
}
.bright{
    background-color: var(--tele-black);
    color: #fff;
}
.nokia{
    background-color: #fff;
    color: var(--nokia)
}
</style>