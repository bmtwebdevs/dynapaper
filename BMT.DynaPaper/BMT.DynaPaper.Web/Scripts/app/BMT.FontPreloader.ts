

module BMT.DynaPaper {
    
    export interface IFontPreloaderConfig {
        cssClass: string;
    }

    export class FontPreloader {
        
        private $: JQueryStatic;
        private cssClass: string;

        constructor($:JQueryStatic, config: IFontPreloaderConfig) {

            this.cssClass = config.cssClass;
            this.$ = $;

            this.createDummyElementAndHideIt();
        }

        private createDummyElementAndHideIt(): void {

            var dummyElementHtml = $('<div class=' + this.cssClass + '>.</div>');

            $('body').append(dummyElementHtml);

            //dummyElementHtml.hide();

        }

    }

} 