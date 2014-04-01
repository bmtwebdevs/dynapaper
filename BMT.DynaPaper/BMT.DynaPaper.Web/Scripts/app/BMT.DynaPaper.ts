module BMT.DynaPaper {

    export interface IApplicationConfig {
        canvasId: string;
        containerId: string;
        text: string;
        baseColour: string;
        width: number;
        height: number;
        font: string;        
    }

    export class Application {

        private canvasId: string;
        private containerId: string;
        private text: string;
        private baseColour: string;
        private width: number;
        private height: number;
        private font: string;
        private $: JQueryStatic;

        constructor($: JQueryStatic, config: IApplicationConfig) {

            console.log("ctor");

            this.text = config.text;
            this.baseColour = config.baseColour;
            this.width = config.width;
            this.height = config.height;
            this.font = config.font;
            this.canvasId = config.canvasId;
            this.containerId = config.containerId;
            this.$ = $;

            this.createCanvas();
        }

        public createCanvas(): void {

            var canvasHtml = $('<canvas id=' + this.canvasId + '>');
            var containerHtml = $('<div id=' + this.containerId + '/>');

            $('body  div.jumbotron').after(containerHtml);
            containerHtml.append(canvasHtml);

            canvasHtml.width(this.width);
            canvasHtml.height(this.height);

            console.log("create canvas");

        }

    }

} 