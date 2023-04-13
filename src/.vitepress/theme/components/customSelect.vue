<template>
    <div 
        class="custom-select relative w-full text-left outline-none" 
        :tabindex="tabindex" 
        @blur="open = false"
        :style="'min-width:'+minWidth+'; max-width: 100%; border: 1px solid '+bodyBorder+'; background-color: '+bodyBg+'; padding: '+bodyPadding+';'"
    >
        <div 
            class="selected relative py-1 cursor-pointer select-none focus:outline-none capitalize" 
            :style="'color: '+bodyTextColor+';'"
            :class="{ open: open, 'px-3': bodyBorder!='transparent' }" 
            @click="open = !open"
        >
            {{ selected }}

            <span 
                class="block absolute top-2/4 transform -translate-y-2/4"
                :class="[bodyBorder=='transparent' ? 'right-0' : 'right-3']"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </span>
        </div>
        <div 
            :style="'background-color: '+optionBg+'; color: '+optionTextColor+';'"
            class="customBorder items rounded-b-md absolute left-0 right-0 z-10 shadow-md" 
            :class="{ hidden: !open }"
        >
            <div
                class="customDivide px-3 py-2 duration-300 cursor-pointer select-none hover:opacity-70 leading-normal capitalize"
                v-if="emptyOption"
                @click="
                    selected=emptyOption;
                    open = false;
                    $emit('input', '');
                "
            >
                {{ emptyOption }}
            </div>
            <div
                class="customDivide px-3 py-2 duration-300 cursor-pointer select-none hover:opacity-70 leading-normal capitalize"
                v-for="(option, i) of options"
                :key="i"
                @click="
                    selected = option;
                    open = false;
                    $emit('input', option);
                "
            >
                {{ option }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    props: {
        options: {
            type: Array,
            required: true,
        },
        emptyOption: {
            type: String,
            required: false,
            default: null,
        },
        default: {
            type: String,
            required: false,
            default: null,
        },
        tabindex: {
            type: Number,
            required: false,
            default: 0,
        },
        minWidth: {
            type: String,
            required: false,
            default: '100px'
        },
        bodyPadding: {
            type: String,
            required: false,
            default: '0px'
        },
        bodyBg: {
            type: String,
            required: false,
            default: 'transparent'
        },
        bodyBorder: {
            type: String,
            required: false,
            default: 'transparent'
        },
        bodyTextColor:{
            type: String,
            required: false,
            default: 'var(--vp-c-text-2)'
        },
        optionBg: {
            type: String,
            required: false,
            default: 'var(--vp-c-bg)'
        },
        optionTextColor:{
            type: String,
            required: false,
            default: 'var(--vp-c-text-2)'
        },
    },
    data() {
        return {
            selected: this.default ? this.default : this.emptyOption ? this.emptyOption : this.options.length > 0 ? this.options[0] : null,
            open: false,
        };
    },
};
</script>