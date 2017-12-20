<template>
  <div class="message">{{ msg }}, {{sdkDataV1}}, {{sdkDataV2}}</div>
</template>

<script>
    export default {
        mounted() {
            this.loadSdk();

        },

        data() {
            return {
                msg: 'Hello Vue application',
                sdkDataV1: '',
                sdkDataV2: '',
            }
        },
        methods: {
            loadSdk () {
                scSDK.load('v1', (sdk) => {
                    console.log(`Vue call ${sdk.data}`);
                    this.sdkDataV1 = sdk.data
                });

                setTimeout(() => {
                    scSDK.load('v2', (sdk) => {
                        console.log(`Vue call ${sdk.data}`);
                        this.sdkDataV2 = sdk.data
                    });
                }, 2000);
            }
        }
    }
</script>