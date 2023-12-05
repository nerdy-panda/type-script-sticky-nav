import { NONE_STICKY_CLASS, STICKY_CLASS } from "../../Configs/Widgets/StickyNav.js";
import StickyNav from "../../Widgets/StickyNav.js";
class Program {
    constructor() {
        this.stickyNav = null;
        this.stickyPosition = 0;
        this.noneStickyPosition = 0;
        this.scrollListener = (event) => {
            this.stickyNavHandler();
        };
    }
    main() {
        this.stickyNav = new StickyNav(window.document.body.querySelector("nav#page-nav"), STICKY_CLASS, NONE_STICKY_CLASS);
        this.stickyPosition = this.stickyNav.model.offsetHeight;
        this.noneStickyPosition = this.stickyNav.model.offsetTop;
        this.stickyNavHandler();
        window.addEventListener('scroll', this.scrollListener);
    }
    stickyNavHandler() {
        var _a, _b, _c, _d, _e, _f, _g;
        const current = window.scrollY;
        const shouldBeSticky = current >= this.stickyPosition;
        const shouldBeNoneSticky = current <= this.noneStickyPosition;
        const hasStickyClass = (_a = this.stickyNav) === null || _a === void 0 ? void 0 : _a.hasStickyClass();
        const hasNoneSticlyClass = (_b = this.stickyNav) === null || _b === void 0 ? void 0 : _b.hasNoneStickyClass();
        if (shouldBeSticky && !hasStickyClass && !hasNoneSticlyClass)
            (_c = this.stickyNav) === null || _c === void 0 ? void 0 : _c.addStickyClass();
        else if (shouldBeSticky && !hasStickyClass && hasNoneSticlyClass) {
            (_d = this.stickyNav) === null || _d === void 0 ? void 0 : _d.removeNoneStickyClass();
            (_e = this.stickyNav) === null || _e === void 0 ? void 0 : _e.addStickyClass();
        }
        else if (shouldBeNoneSticky && hasStickyClass) {
            (_f = this.stickyNav) === null || _f === void 0 ? void 0 : _f.removeStickyClass();
            (_g = this.stickyNav) === null || _g === void 0 ? void 0 : _g.addNoneStickyClass();
        }
    }
}
export default Program;
//# sourceMappingURL=Program.js.map