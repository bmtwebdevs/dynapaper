/// <reference path="bmt.fontpreloader.ts" />


module BMT.DynaPaper {

    export interface IApplicationConfig {
        canvasId: string;
        containerId: string;
        text: string;
        baseColour: string;
        textColour: string;
        width: number;
        height: number;
        font: string;
    }

    export class Application {

        private canvasId: string;
        private containerId: string;
        private text: string;
        private baseColour: string;
        private textColour: string;
        private width: number;
        private height: number;
        private font: string;
        private $: JQueryStatic;

        private canvas: HTMLCanvasElement;
        private context2D: CanvasRenderingContext2D;

        constructor($: JQueryStatic, config: IApplicationConfig) {

            this.text = config.text;
            this.baseColour = config.baseColour;
            this.textColour = config.textColour;
            this.width = config.width;
            this.height = config.height;
            this.font = config.font;
            this.canvasId = config.canvasId;
            this.containerId = config.containerId;
            this.$ = $;

            this.preloadFonts();
            setTimeout(() => {                
                this.createCanvas();
                this.fillCanvasBackground();
                this.addText();
            }, 2000);
            
        }

        private createCanvas(): void {

            var canvasHtml = $('<canvas id=' + this.canvasId + ' width=' + this.width + ' height=' + this.height + '>');
            var containerHtml = $('<div id=' + this.containerId + 'width=' + this.width + ' height=' + this.height + '/>');

            $('body  div.jumbotron').after(containerHtml);
            containerHtml.append(canvasHtml);

            canvasHtml.width(this.width);
            canvasHtml.height(this.height);

            containerHtml.width(this.width);
            containerHtml.height(this.height);

            this.canvas = <HTMLCanvasElement>document.getElementById(this.canvasId);
            this.context2D = this.canvas.getContext('2d');

        }

        private fillCanvasBackground(): void {

            this.context2D.fillStyle = this.baseColour;
            this.context2D.fillRect(0, 0, this.canvas.width, this.canvas.height);

        }

        private addText() {

            this.context2D.font = "60pt aleg";
            this.context2D.textBaseline = "Top";
            this.context2D.fillStyle = this.textColour;
            this.context2D.fillText(this.text, 100, this.height / 2);

            
            this.context2D.shadowOffsetX = 0.3;
            this.context2D.shadowOffsetY = 0.3;
            this.context2D.shadowBlur = 10;
            this.context2D.shadowColor = "#efefef";

        }

        private preloadFonts(): void {

            var fontClassName = "aleg";

            var preloader = new FontPreloader(this.$, {
                cssClass: fontClassName
            });

        }

    }

} 