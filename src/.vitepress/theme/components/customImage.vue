<template>
    <figure
        class="customImg"
        :class="{
            'float-left': alignFrom == 'left' || alignFrom == 'Left', 
            'float-right': alignFrom == 'right' || alignFrom == 'Right',
            'absolute': isBg == 'true' || isBg == 'True',
        }"
        :style="customStyle()"
    >
        <img 
            class="w-full h-full"
            :src="src" 
            :alt="alt"
        />
    </figure>
</template>

<style>
    .customImg.absolute {
        z-index: -1;
    }
</style>

<script>
export default {
    props: {
        src: String,
        alt: {
            type: String,
            default: "custom-image"
        },
        opacity: {
            type: String,
            default: "100"
        },
        width: {
            type: String,
            default: "auto",
        },
        height: {
            type: String,
            default: "auto",
        },
        alignFrom: {
            type: String,
            default: "left"
        },
        isBg: {
            type: String,
            default: "false"
        },
        marginTop: {
            type: String,
            default: '20px'
        },
        marginBottom: {
            type: String,
            default: '10px'
        },
        marginLeft: {
            type: String,
            default: '0'
        },
        marginRight: {
            type: String,
            default: '20px'
        },
    },

    methods: {
        customStyle() {
            return {
                'opacity': `${this.opacity}%`,
                'width': `${this.width}`,
                'height': `${this.height}`,
                'max-width': `100%`,
                'margin-top': `${this.marginTop}`,
                'margin-bottom': `${this.marginBottom}`,
                'margin-left': `${this.marginLeft}`,
                'margin-right': `${this.marginRight}`,
            }
        },
    }
}
</script>