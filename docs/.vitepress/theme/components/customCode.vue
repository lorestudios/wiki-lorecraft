<template>
    <div @click="copyCode" class="customCode relative inline-block duration-100 hover:scale-110 cursor-pointer rounded-md overflow-hidden" ref="customCode">
        <slot />
        <span class="copyText text-xs" :class="{'opacity-100': showCopied==true}" >Copied</span>
    </div>
</template>


<script>
export default {
    name: "CustomCode",

    data() {
        return {
            showCopied: false,
        }
    },

    methods: {
        copyCode() {
            const element = this.$refs.customCode;
            const codeElement = element.querySelector("code");
            const range = document.createRange();
            range.selectNode(codeElement);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
            document.execCommand("copy");
            window.getSelection().removeAllRanges();

            this.showCopied = true;
            let vm = this;
            setTimeout(function() {
                vm.showCopied = false;
            }, 500);
            
        }
    },
}
</script>