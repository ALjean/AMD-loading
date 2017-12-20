import angular from 'angular'

let app = angular.module('app', [])
    .component('massage', {
        template: '<div>{{$ctrl.msg}}, {{$ctrl.sdkDataV1}}, {{$ctrl.sdkDataV2}} </div>',
        controller: function ($timeout) {
            this.sdkDataV1 = '';
            this.sdkDataV2 = '';
            this.count = 0;
            this.msg = 'Hello Angular application';
            let self = this;

            this.loadSDk= function () {

                $timeout(()=> {
                    scSDK.load('v1', (sdk) => {
                        console.log(`Angular call ${sdk.data}`);
                        self.sdkDataV1 = sdk.data
                    });
                }, 1500);

                $timeout(()=> {
                    scSDK.load('v2', (sdk) => {
                        console.log(`Angular call ${sdk.data}`);
                        self.sdkDataV2 = sdk.data
                    });
                }, 1600);

                $timeout(()=> {}, 2000)
            };

            this.loadSDk();
        }
    });


export default app
