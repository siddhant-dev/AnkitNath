import {
    trigger,
    transition,
    style,
    query,
    group,
    animate,
    animation,
    useAnimation,
    animateChild,
  } from '@angular/animations';


export const leftSlide = animation([
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    })
  ], { optional: true }),
  query(':enter', [
    style({ left: '-100%' })
  ]),
  group([
    query(':leave', [
      animate('600ms ease', style({ left: '100%' }))
    ], { optional: true }),
    query(':enter', [
      animate('600ms ease', style({ left: '0' }))
    ])
  ]),
]);

export const rightSlide = animation([
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      right: 0,
      width: '100%'
    })
  ], { optional: true }),
  query(':enter', [
    style({ right: '-100%' })
  ]),
  group([
    query(':leave', [
      animate('600ms ease', style({ right: '100%' }))
    ], { optional: true }),
    query(':enter', [
      animate('600ms ease', style({ right: '0' }))
    ])
  ]),
    query(':leave', animateChild()),
    query(':enter', animateChild()),
]);

export const slider = trigger('routeAnimations', [
  transition('* => isLeft', [useAnimation(leftSlide)]),
  transition('* => isRight', [useAnimation(rightSlide)]),
  transition('isLeft => isAbout', [useAnimation(rightSlide)]),
  transition('isAbout => isLeft', [useAnimation(leftSlide)]),
  transition('isAbout => isWork', [useAnimation(rightSlide)]),
  transition('isWork => isAbout', [useAnimation(leftSlide)]),
  transition('isWork => isRight', [useAnimation(rightSlide)]),
  transition('isRight => *', [useAnimation(leftSlide)]),
  transition('isLeft => *', [useAnimation(rightSlide)]),
]);
