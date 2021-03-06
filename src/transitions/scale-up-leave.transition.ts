import { Animation, PageTransition } from 'ionic-angular';

export class ModalScaleUpLeaveTransition extends PageTransition {

public init() {
    const ele = this.leavingView.pageRef().nativeElement;
    const wrapper = new Animation(this.plt, ele.querySelector('.modal-wrapper'));

    wrapper.beforeStyles({ 'transform': 'scale(1)', 'opacity': 1 });
    wrapper.afterStyles({ 'opacity': 1, 'transform': 'scale(0)' });
    wrapper.fromTo('transform', 'scale(1)', 'scale(0)');
    wrapper.fromTo('opacity', 1, 1);
    // contentWrapper.fromTo('opacity', 1, 0);

    this
        .element(this.leavingView.pageRef())
        .duration(300)
        .easing('cubic-bezier(.1, .7, .1, 1)')
        .add(wrapper);
}
}