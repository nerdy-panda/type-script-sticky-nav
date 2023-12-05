import { NONE_STICKY_CLASS, STICKY_CLASS } from "../../Configs/Widgets/StickyNav.js";
import {default as StickyNavContract} from "../../Contracts/Widgets/StickyNav.js";
import StickyNav from "../../Widgets/StickyNav.js";

class Program {
    protected  stickyNav : StickyNavContract | null = null ;
    protected stickyPosition : number = 0;
    protected noneStickyPosition : number = 0;
    main(){
        this.stickyNav = new StickyNav(
            <HTMLElement> window.document.body.querySelector("nav#page-nav") , 
            STICKY_CLASS , NONE_STICKY_CLASS
        );
        this.stickyPosition = this.stickyNav.model.offsetHeight;
        this.noneStickyPosition = this.stickyNav.model.offsetTop;

        this.stickyNavHandler();
        window.addEventListener('scroll',this.scrollListener);

        
    }
    protected scrollListener = (event : Event ) :void => {
        this.stickyNavHandler();
    }
    protected stickyNavHandler(){
        const current : number = window.scrollY;

        const shouldBeSticky :boolean = current>=this.stickyPosition ;
        const shouldBeNoneSticky : boolean = current<=this.noneStickyPosition;

        const hasStickyClass :boolean =  <boolean> this.stickyNav?.hasStickyClass(); 
        const hasNoneSticlyClass : boolean = <boolean> this.stickyNav?.hasNoneStickyClass();

        if(shouldBeSticky && !hasStickyClass && !hasNoneSticlyClass)
            this.stickyNav?.addStickyClass();
        else if(shouldBeSticky && !hasStickyClass && hasNoneSticlyClass){
            this.stickyNav?.removeNoneStickyClass();
            this.stickyNav?.addStickyClass();
        }
        else if(shouldBeNoneSticky && hasStickyClass){
            this.stickyNav?.removeStickyClass();
            this.stickyNav?.addNoneStickyClass();
        }
    }
}

export default Program ;