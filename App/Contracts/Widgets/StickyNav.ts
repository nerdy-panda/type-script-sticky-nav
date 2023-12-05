interface StickyNav {
    model : HTMLElement;
    stickyClass : string ;
    noneStickyClass : string ;

    addStickyClass():void;
    removeStickyClass():void;
    hasStickyClass():boolean;

    addNoneStickyClass():void;
    removeNoneStickyClass():void;
    hasNoneStickyClass():boolean;
}
export default StickyNav;