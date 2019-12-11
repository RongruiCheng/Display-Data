import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  // 在指令的构造函数中使用ElementRef来注入你放置apphighlight的那个元素
  constructor(private el: ElementRef) {
    console.log(el);
    el.nativeElement.style.backgroundColor = 'yellow';
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
