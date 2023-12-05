class StickyNav {
    constructor(model, stickyClass, noneStickyClass) {
        this.model = model;
        this.stickyClass = stickyClass;
        this.noneStickyClass = noneStickyClass;
    }
    addStickyClass() {
        this.model.classList.add(this.stickyClass);
    }
    removeStickyClass() {
        this.model.classList.remove(this.stickyClass);
    }
    hasStickyClass() {
        return this.model.classList.contains(this.stickyClass);
    }
    addNoneStickyClass() {
        this.model.classList.add(this.noneStickyClass);
    }
    removeNoneStickyClass() {
        this.model.classList.remove(this.noneStickyClass);
    }
    hasNoneStickyClass() {
        return this.model.classList.contains(this.noneStickyClass);
    }
}
export default StickyNav;
//# sourceMappingURL=StickyNav.js.map