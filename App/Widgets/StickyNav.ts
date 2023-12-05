import { default as Contract } from "../Contracts/Widgets/StickyNav.js";

class StickyNav implements Contract {
    constructor(
        public model : HTMLElement , public stickyClass : string , public noneStickyClass : string 
    ){}
    addStickyClass(): void {
        this.model.classList.add(this.stickyClass);
    }
    removeStickyClass(): void {
        this.model.classList.remove(this.stickyClass);
    }
    hasStickyClass(): boolean {
        return this.model.classList.contains(this.stickyClass);
    }
    addNoneStickyClass():void {
        this.model.classList.add(this.noneStickyClass);
    }
    removeNoneStickyClass():void {
        this.model.classList.remove(this.noneStickyClass);
    }
    hasNoneStickyClass(): boolean {
        return this.model.classList.contains(this.noneStickyClass);
    }

}
export default StickyNav;