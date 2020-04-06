import { AfterViewInit, Component, ContentChildren, Directive, ElementRef, Input,
   QueryList,  ViewChild, ViewChildren } from '@angular/core';
import { CarouselItemDirective } from '../carousel-item.directive';
import { animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style } from '@angular/animations';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '.carousel-item'
})
// tslint:disable-next-line: directive-class-suffix
export class CarouselItemElement {
}



@Component({
  // tslint:disable-next-line: component-selector
  selector: 'carousel',
  exportAs: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterViewInit {
  @ContentChildren(CarouselItemDirective) items: QueryList<CarouselItemDirective>;
  @ViewChildren(CarouselItemElement, { read: ElementRef }) private itemsElements: QueryList<ElementRef>;
  @ViewChild('carousel') private carousel: ElementRef;
  @Input() timing = '250ms ease-in-out';
  @Input() showControls = true;
  private player: AnimationPlayer;
  private itemWidth: number;
  private currentSlide = 0;
  disableNext: boolean;
  disablePrev = true;
  carouselWrapperStyle = {};

  next() {
    this.disablePrev = false;
    if (this.currentSlide === this.items.length - 2) {
      this.disableNext = true;
      this.disablePrev = false;
    }
    if ( this.currentSlide + 1 === this.items.length ) { return; }
    this.currentSlide = (this.currentSlide + 1) % this.items.length;
    const offset = this.currentSlide * this.itemWidth;
    const myAnimation: AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }

  private buildAnimation( offset ) {
    return this.builder.build([
      animate(this.timing, style({ transform: `translateX(-${offset}px)` }))
    ]);
  }

  prev() {
    this.disableNext = false;
    if ( this.currentSlide === 0 ) {
      this.disablePrev = true;
      this.disableNext = false;
      return; }

    this.currentSlide = ((this.currentSlide - 1) + this.items.length) % this.items.length;
    const offset = this.currentSlide * this.itemWidth;
    if ( this.currentSlide === 0 ) {
      this.disablePrev = true;
      this.disableNext = false;
    }

    const myAnimation: AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }

  constructor( private builder: AnimationBuilder ) {
  }

  ngAfterViewInit() {
    // For some reason only here I need to add setTimeout, in my local env it's working without this.
    setTimeout(() => {
      this.itemWidth = this.itemsElements.first.nativeElement.getBoundingClientRect().width;
      this.carouselWrapperStyle = {
        width: `${this.itemWidth}px`
      };
    });
  }

}
