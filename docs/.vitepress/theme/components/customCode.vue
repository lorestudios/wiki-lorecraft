<template>
    <div class="customCode relative inline-block" ref="customCode">
        <slot />
        <button @click="copyCode" class="absolute top-0 right-0 bg-white rounded-full p-1 duration-300 hover:opacity">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
            </svg>
        </button>
    </div>
</template>

<style>
    .customCode code {
        padding-right: 35px!important;
    }
    .customCode button {
        color: var(--vp-c-text-1);
        background-color: var(--vp-c-brand);
    }
    .customCode button:hover {
        color: var(--vp-button-brand-hover-text);
        background-color: var(--vp-button-brand-hover-bg);
    }
</style>


<script>
export default {
    name: "CustomCode",

    methods: {
        async copyURL(mytext) {
            try {
                await navigator.clipboard.writeText(mytext);
                alert('Link copied to clipboard');
            } catch($e) {
                alert('Cannot copy');
            }
        },

        copyCode() {
            const element = this.$refs.customCode;
            // const code = element.querySelector(code).innerHTML;
            // const code = element.querySelector('code').innerHTML;

            // alert(code);

            // navigator.clipboard.writeText(code);

            // element.select();
            // element.setSelectionRange(0, 99999);
            // document.execCommand('copy');

            const codeElement = element.querySelector("code");
            const range = document.createRange();
            range.selectNode(codeElement);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
            document.execCommand("copy");
            window.getSelection().removeAllRanges();
            alert("Code copied to clipboard!");
        }
    },
}
</script>