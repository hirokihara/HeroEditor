/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/debug_context';
import * as import1 from './heroes.component';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view';
import * as import4 from '@angular/core/src/linker/element';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '@angular/router/src/router';
import * as import10 from '../shared/hero.service';
import * as import11 from '@angular/platform-browser/src/browser/title';
import * as import12 from '@angular/core/src/metadata/view';
import * as import13 from '@angular/core/src/linker/component_factory';
import * as import14 from './heroes.component.css.shim';
import * as import15 from '@angular/core/src/linker/template_ref';
import * as import16 from '@angular/common/src/directives/ng_for';
import * as import17 from '@angular/common/src/directives/ng_if';
import * as import18 from '@angular/common/src/pipes/uppercase_pipe';
import * as import19 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import20 from '../hero-detail/hero-detail.component';
import * as import21 from '../hero-detail/hero-detail.component.ngfactory';
import * as import22 from '@angular/router/src/router_state';
const nodeDebugInfos_HeroesComponent_Host0:import0.StaticNodeDebugInfo[] = [new import0.StaticNodeDebugInfo([import1.HeroesComponent],import1.HeroesComponent,{})];
var renderType_HeroesComponent_Host:import2.RenderComponentType = (null as any);
class _View_HeroesComponent_Host0 extends import3.DebugAppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import4.AppElement;
  _HeroesComponent_0_4:import1.HeroesComponent;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_HeroesComponent_Host0,renderType_HeroesComponent_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_HeroesComponent_Host0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    this._el_0 = this.selectOrCreateHostElement('my-heroes',rootSelector,this.debug(0,0,0));
    this._appEl_0 = new import4.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_HeroesComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._HeroesComponent_0_4 = new import1.HeroesComponent(this.parentInjector.get(import9.Router),this.parentInjector.get(import10.HeroService),this.parentInjector.get(import11.Title));
    this._appEl_0.initComponent(this._HeroesComponent_0_4,[],compView_0);
    compView_0.create(this._HeroesComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.HeroesComponent) && (0 === requestNodeIndex))) { return this._HeroesComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._HeroesComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_HeroesComponent_Host0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import3.AppView<any> {
  if ((renderType_HeroesComponent_Host === (null as any))) { (renderType_HeroesComponent_Host = viewUtils.createRenderComponentType('',0,import12.ViewEncapsulation.None,[],{})); }
  return new _View_HeroesComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const HeroesComponentNgFactory:import13.ComponentFactory<import1.HeroesComponent> = new import13.ComponentFactory<import1.HeroesComponent>('my-heroes',viewFactory_HeroesComponent_Host0,import1.HeroesComponent);
const styles_HeroesComponent:any[] = [import14.styles];
const nodeDebugInfos_HeroesComponent0:import0.StaticNodeDebugInfo[] = [
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([
    import15.TemplateRef,
    import16.NgFor
  ]
  ,(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([
    import15.TemplateRef,
    import17.NgIf
  ]
  ,(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([
    import15.TemplateRef,
    import17.NgIf
  ]
  ,(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([
    import15.TemplateRef,
    import17.NgIf
  ]
  ,(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{})
]
;
var renderType_HeroesComponent:import2.RenderComponentType = (null as any);
class _View_HeroesComponent0 extends import3.DebugAppView<import1.HeroesComponent> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _anchor_5:any;
  /*private*/ _appEl_5:import4.AppElement;
  _TemplateRef_5_5:any;
  _NgFor_5_6:import16.NgFor;
  _text_6:any;
  _text_7:any;
  _anchor_8:any;
  /*private*/ _appEl_8:import4.AppElement;
  _TemplateRef_8_5:any;
  _NgIf_8_6:import17.NgIf;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _text_12:any;
  _anchor_13:any;
  /*private*/ _appEl_13:import4.AppElement;
  _TemplateRef_13_5:any;
  _NgIf_13_6:import17.NgIf;
  _text_14:any;
  _anchor_15:any;
  /*private*/ _appEl_15:import4.AppElement;
  _TemplateRef_15_5:any;
  _NgIf_15_6:import17.NgIf;
  _text_16:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  _pipe_uppercase_0:import18.UpperCasePipe;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_HeroesComponent0,renderType_HeroesComponent,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_HeroesComponent0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'h2',this.debug(0,0,0));
    this._text_1 = this.renderer.createText(this._el_0,'My Heroes',this.debug(1,0,4));
    this._text_2 = this.renderer.createText(parentRenderNode,'\n',this.debug(2,0,18));
    this._el_3 = this.renderer.createElement(parentRenderNode,'ul',this.debug(3,1,0));
    this.renderer.setElementAttribute(this._el_3,'class','heroes');
    this._text_4 = this.renderer.createText(this._el_3,'\n  ',this.debug(4,1,19));
    this._anchor_5 = this.renderer.createTemplateAnchor(this._el_3,this.debug(5,2,2));
    this._appEl_5 = new import4.AppElement(5,3,this,this._anchor_5);
    this._TemplateRef_5_5 = new import15.TemplateRef_(this._appEl_5,viewFactory_HeroesComponent1);
    this._NgFor_5_6 = new import16.NgFor(this._appEl_5.vcRef,this._TemplateRef_5_5,this.parentInjector.get(import19.IterableDiffers),this.ref);
    this._text_6 = this.renderer.createText(this._el_3,'\n',this.debug(6,7,7));
    this._text_7 = this.renderer.createText(parentRenderNode,'\n',this.debug(7,8,5));
    this._anchor_8 = this.renderer.createTemplateAnchor(parentRenderNode,this.debug(8,9,0));
    this._appEl_8 = new import4.AppElement(8,(null as any),this,this._anchor_8);
    this._TemplateRef_8_5 = new import15.TemplateRef_(this._appEl_8,viewFactory_HeroesComponent2);
    this._NgIf_8_6 = new import17.NgIf(this._appEl_8.vcRef,this._TemplateRef_8_5);
    this._text_9 = this.renderer.createText(parentRenderNode,'\n',this.debug(9,9,48));
    this._el_10 = this.renderer.createElement(parentRenderNode,'button',this.debug(10,10,0));
    this._text_11 = this.renderer.createText(this._el_10,'Add New Hero',this.debug(11,10,28));
    this._text_12 = this.renderer.createText(parentRenderNode,'\n',this.debug(12,10,49));
    this._anchor_13 = this.renderer.createTemplateAnchor(parentRenderNode,this.debug(13,11,0));
    this._appEl_13 = new import4.AppElement(13,(null as any),this,this._anchor_13);
    this._TemplateRef_13_5 = new import15.TemplateRef_(this._appEl_13,viewFactory_HeroesComponent3);
    this._NgIf_13_6 = new import17.NgIf(this._appEl_13.vcRef,this._TemplateRef_13_5);
    this._text_14 = this.renderer.createText(parentRenderNode,'\n',this.debug(14,13,6));
    this._anchor_15 = this.renderer.createTemplateAnchor(parentRenderNode,this.debug(15,14,0));
    this._appEl_15 = new import4.AppElement(15,(null as any),this,this._anchor_15);
    this._TemplateRef_15_5 = new import15.TemplateRef_(this._appEl_15,viewFactory_HeroesComponent4);
    this._NgIf_15_6 = new import17.NgIf(this._appEl_15.vcRef,this._TemplateRef_15_5);
    this._text_16 = this.renderer.createText(parentRenderNode,'\n',this.debug(16,19,6));
    this._expr_0 = import8.UNINITIALIZED;
    this._expr_1 = import8.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_10,'click',this.eventHandler(this._handle_click_10_0.bind(this)));
    this._expr_3 = import8.UNINITIALIZED;
    this._expr_4 = import8.UNINITIALIZED;
    this.debug((null as any),(null as any),(null as any));
    this._pipe_uppercase_0 = new import18.UpperCasePipe();
    this.init([],[
      this._el_0,
      this._text_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._anchor_5,
      this._text_6,
      this._text_7,
      this._anchor_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._text_12,
      this._anchor_13,
      this._text_14,
      this._anchor_15,
      this._text_16
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.TemplateRef) && (5 === requestNodeIndex))) { return this._TemplateRef_5_5; }
    if (((token === import16.NgFor) && (5 === requestNodeIndex))) { return this._NgFor_5_6; }
    if (((token === import15.TemplateRef) && (8 === requestNodeIndex))) { return this._TemplateRef_8_5; }
    if (((token === import17.NgIf) && (8 === requestNodeIndex))) { return this._NgIf_8_6; }
    if (((token === import15.TemplateRef) && (13 === requestNodeIndex))) { return this._TemplateRef_13_5; }
    if (((token === import17.NgIf) && (13 === requestNodeIndex))) { return this._NgIf_13_6; }
    if (((token === import15.TemplateRef) && (15 === requestNodeIndex))) { return this._TemplateRef_15_5; }
    if (((token === import17.NgIf) && (15 === requestNodeIndex))) { return this._NgIf_15_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import8.SimpleChange} = (null as any);
    this.debug(5,2,2);
    changes = (null as any);
    this.debug(5,2,6);
    const currVal_0:any = this.context.heroes;
    if (import5.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgFor_5_6.ngForOf = currVal_0;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import8.SimpleChange(this._expr_0,currVal_0);
      this._expr_0 = currVal_0;
    }
    if ((changes !== (null as any))) { this._NgFor_5_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_5_6.ngDoCheck(); }
    this.debug(8,9,19);
    const currVal_1:any = this.context.error;
    if (import5.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgIf_8_6.ngIf = currVal_1;
      this._expr_1 = currVal_1;
    }
    this.debug(13,11,5);
    const currVal_3:any = this.context.addingHero;
    if (import5.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._NgIf_13_6.ngIf = currVal_3;
      this._expr_3 = currVal_3;
    }
    this.debug(15,14,5);
    const currVal_4:any = this.context.selectedHero;
    if (import5.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._NgIf_15_6.ngIf = currVal_4;
      this._expr_4 = currVal_4;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_10_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(10,10,8);
    const pd_0:any = ((<any>this.context.addHero()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_HeroesComponent0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import3.AppView<import1.HeroesComponent> {
  if ((renderType_HeroesComponent === (null as any))) { (renderType_HeroesComponent = viewUtils.createRenderComponentType('/Users/albatrosary/Sandbox/accounts-book/src/components/heroes/heroes.component.html',0,import12.ViewEncapsulation.Emulated,styles_HeroesComponent,{})); }
  return new _View_HeroesComponent0(viewUtils,parentInjector,declarationEl);
}
const nodeDebugInfos_HeroesComponent1:import0.StaticNodeDebugInfo[] = [
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{})
]
;
class _View_HeroesComponent1 extends import3.DebugAppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _text_10:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_HeroesComponent1,renderType_HeroesComponent,import7.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_HeroesComponent1);
  }
  createInternal(rootSelector:string):import4.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'li',this.debug(0,2,2));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',this.debug(1,2,100));
    this._el_2 = this.renderer.createElement(this._el_0,'span',this.debug(2,3,4));
    this.renderer.setElementAttribute(this._el_2,'class','hero-element');
    this._text_3 = this.renderer.createText(this._el_2,'\n      ',this.debug(3,3,31));
    this._el_4 = this.renderer.createElement(this._el_2,'span',this.debug(4,4,6));
    this.renderer.setElementAttribute(this._el_4,'class','badge');
    this._text_5 = this.renderer.createText(this._el_4,'',this.debug(5,4,26));
    this._text_6 = this.renderer.createText(this._el_2,'',this.debug(6,4,44));
    this._text_7 = this.renderer.createText(this._el_0,'\n    ',this.debug(7,5,11));
    this._el_8 = this.renderer.createElement(this._el_0,'button',this.debug(8,6,4));
    this.renderer.setElementAttribute(this._el_8,'class','delete-button');
    this._text_9 = this.renderer.createText(this._el_8,'Delete',this.debug(9,6,69));
    this._text_10 = this.renderer.createText(this._el_0,'\n  ',this.debug(10,6,84));
    this._expr_1 = import8.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this._expr_2 = import8.UNINITIALIZED;
    this._expr_3 = import8.UNINITIALIZED;
    var disposable_1:Function = this.renderer.listen(this._el_8,'click',this.eventHandler(this._handle_click_8_0.bind(this)));
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._text_10
    ]
    ,[
      disposable_0,
      disposable_1
    ]
    ,[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    this.debug(0,2,59);
    const currVal_1:any = (this.context.$implicit === this.parent.context.selectedHero);
    if (import5.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_0,'selected',currVal_1);
      this._expr_1 = currVal_1;
    }
    this.debug(5,4,26);
    const currVal_2:any = import5.interpolate(1,'',this.context.$implicit.id,'');
    if (import5.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_5,currVal_2);
      this._expr_2 = currVal_2;
    }
    this.debug(6,4,44);
    const currVal_3:any = import5.interpolate(1,' ',this.context.$implicit.name,'\n    ');
    if (import5.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setText(this._text_6,currVal_3);
      this._expr_3 = currVal_3;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(0,2,34);
    const pd_0:any = ((<any>this.parent.context.onSelect(this.context.$implicit)) !== false);
    return (true && pd_0);
  }
  private _handle_click_8_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(8,6,34);
    const pd_0:any = ((<any>this.parent.context.deleteHero(this.context.$implicit,$event)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_HeroesComponent1(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import3.AppView<any> {
  return new _View_HeroesComponent1(viewUtils,parentInjector,declarationEl);
}
const nodeDebugInfos_HeroesComponent2:import0.StaticNodeDebugInfo[] = [
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{})
]
;
class _View_HeroesComponent2 extends import3.DebugAppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_HeroesComponent2,renderType_HeroesComponent,import7.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_HeroesComponent2);
  }
  createInternal(rootSelector:string):import4.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',this.debug(0,9,0));
    this.renderer.setElementAttribute(this._el_0,'class','error');
    this._text_1 = this.renderer.createText(this._el_0,'',this.debug(1,9,33));
    this._expr_0 = import8.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[],[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    this.debug(1,9,33);
    const currVal_0:any = import5.interpolate(1,'',this.parent.context.error,'');
    if (import5.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_1,currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_HeroesComponent2(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import3.AppView<any> {
  return new _View_HeroesComponent2(viewUtils,parentInjector,declarationEl);
}
const nodeDebugInfos_HeroesComponent3:import0.StaticNodeDebugInfo[] = [
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([import20.HeroDetailComponent],import20.HeroDetailComponent,{}),
  new import0.StaticNodeDebugInfo([],(null as any),{})
]
;
class _View_HeroesComponent3 extends import3.DebugAppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import4.AppElement;
  _HeroDetailComponent_2_4:import20.HeroDetailComponent;
  _text_3:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_HeroesComponent3,renderType_HeroesComponent,import7.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_HeroesComponent3);
  }
  createInternal(rootSelector:string):import4.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',this.debug(0,11,0));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',this.debug(1,11,24));
    this._el_2 = this.renderer.createElement(this._el_0,'my-hero-detail',this.debug(2,12,2));
    this._appEl_2 = new import4.AppElement(2,0,this,this._el_2);
    var compView_2:any = import21.viewFactory_HeroDetailComponent0(this.viewUtils,this.injector(2),this._appEl_2);
    this._HeroDetailComponent_2_4 = new import20.HeroDetailComponent(this.parentInjector.get(import10.HeroService),this.parentInjector.get(import22.ActivatedRoute),this.parentInjector.get(import11.Title));
    this._appEl_2.initComponent(this._HeroDetailComponent_2_4,[],compView_2);
    compView_2.create(this._HeroDetailComponent_2_4,[],(null as any));
    this._text_3 = this.renderer.createText(this._el_0,'\n',this.debug(3,12,59));
    var disposable_0:Function = this.renderer.listen(this._el_2,'close',this.eventHandler(this._handle_close_2_0.bind(this)));
    const subscription_0:any = this._HeroDetailComponent_2_4.close.subscribe(this.eventHandler(this._handle_close_2_0.bind(this)));
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3
    ]
    ,[disposable_0],[subscription_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import20.HeroDetailComponent) && (2 === requestNodeIndex))) { return this._HeroDetailComponent_2_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._HeroDetailComponent_2_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_close_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(2,12,18);
    const pd_0:any = ((<any>this.parent.context.close($event)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_HeroesComponent3(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import3.AppView<any> {
  return new _View_HeroesComponent3(viewUtils,parentInjector,declarationEl);
}
const nodeDebugInfos_HeroesComponent4:import0.StaticNodeDebugInfo[] = [
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{})
]
;
class _View_HeroesComponent4 extends import3.DebugAppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  _pipe_uppercase_0_0:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_HeroesComponent4,renderType_HeroesComponent,import7.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_HeroesComponent4);
  }
  createInternal(rootSelector:string):import4.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',this.debug(0,14,0));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',this.debug(1,14,26));
    this._el_2 = this.renderer.createElement(this._el_0,'h2',this.debug(2,15,2));
    this._text_3 = this.renderer.createText(this._el_2,'',this.debug(3,15,6));
    this._text_4 = this.renderer.createText(this._el_0,'\n  ',this.debug(4,17,7));
    this._el_5 = this.renderer.createElement(this._el_0,'button',this.debug(5,18,2));
    this._text_6 = this.renderer.createText(this._el_5,'View Details',this.debug(6,18,33));
    this._text_7 = this.renderer.createText(this._el_0,'\n',this.debug(7,18,54));
    this._pipe_uppercase_0_0 = import5.pureProxy1((<_View_HeroesComponent0>this.parent)._pipe_uppercase_0.transform.bind((<_View_HeroesComponent0>this.parent)._pipe_uppercase_0));
    this._expr_0 = import8.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_5,'click',this.eventHandler(this._handle_click_5_0.bind(this)));
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import8.ValueUnwrapper();
    this.detectContentChildrenChanges(throwOnChange);
    this.debug(3,15,6);
    valUnwrapper.reset();
    const currVal_0:any = import5.interpolate(1,'\n    ',valUnwrapper.unwrap(import5.castByValue(this._pipe_uppercase_0_0,(<_View_HeroesComponent0>this.parent)._pipe_uppercase_0.transform)(this.parent.context.selectedHero.name)),' is my hero\n  ');
    if ((valUnwrapper.hasWrappedValue || import5.checkBinding(throwOnChange,this._expr_0,currVal_0))) {
      this.renderer.setText(this._text_3,currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_5_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(5,18,10);
    const pd_0:any = ((<any>this.parent.context.gotoDetail()) !== false);
    return (true && pd_0);
  }
}
function viewFactory_HeroesComponent4(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import3.AppView<any> {
  return new _View_HeroesComponent4(viewUtils,parentInjector,declarationEl);
}