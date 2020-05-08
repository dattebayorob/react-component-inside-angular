import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Component, OnDestroy, ViewChild, ElementRef, Input, AfterViewInit, OnChanges } from '@angular/core';

type Props = {
  message: string,
}

const Gambs = ({ message }: Props) => {

  React.useEffect(() => {
    console.log(message)
  }, [message])

  return (
    <div>
      { message }
    </div>
  )
}

const ELEMENT_NAME = 'reactGambs';

@Component({
  selector: 'app-react',
  template: `<div class='react' #${ELEMENT_NAME}></div>`,
  styles: ['.react { text-align: center; font-size: 36px }'],
})
export class GambsComponent implements OnDestroy,AfterViewInit,OnChanges {
  @ViewChild(ELEMENT_NAME, {static: false}) containerRef: ElementRef;

  @Input() public message: string;

  ngAfterViewInit(){
    this.render();
  }

  ngOnDestroy() {
    ReactDom.unmountComponentAtNode(this.containerRef.nativeElement);
  }

  ngOnChanges() {
    this.render();
  }

  private render() {
    ReactDom.render(<Gambs message={this.message} />, this.containerRef.nativeElement);
  }
}