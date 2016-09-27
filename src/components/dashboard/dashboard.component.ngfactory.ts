/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/debug_context';
import * as import1 from './dashboard.component';
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
import * as import14 from './dashboard.component.css.shim';
import * as import15 from '@angular/core/src/linker/template_ref';
import * as import16 from '@angular/common/src/directives/ng_for';
import * as import17 from '../hero-search/hero-search.service';
import * as import18 from '../hero-search/hero-search.component';
import * as import19 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import20 from '../hero-search/hero-search.component.ngfactory';
import * as import21 from '@angular/http/src/http';
const nodeDebugInfos_DashboardComponent_Host0:import0.StaticNodeDebugInfo[] = [new import0.StaticNodeDebugInfo([import1.DashboardComponent],import1.DashboardComponent,{})];
var renderType_DashboardComponent_Host:import2.RenderComponentType = (null as any);
class _View_DashboardComponent_Host0 extends import3.DebugAppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import4.AppElement;
  _DashboardComponent_0_4:import1.DashboardComponent;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_DashboardComponent_Host0,renderType_DashboardComponent_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_DashboardComponent_Host0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    this._el_0 = this.selectOrCreateHostElement('my-dashboard',rootSelector,this.debug(0,0,0));
    this._appEl_0 = new import4.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_DashboardComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._DashboardComponent_0_4 = new import1.DashboardComponent(this.parentInjector.get(import9.Router),this.parentInjector.get(import10.HeroService),this.parentInjector.get(import11.Title));
    this._appEl_0.initComponent(this._DashboardComponent_0_4,[],compView_0);
    compView_0.create(this._DashboardComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.DashboardComponent) && (0 === requestNodeIndex))) { return this._DashboardComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._DashboardComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_DashboardComponent_Host0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import3.AppView<any> {
  if ((renderType_DashboardComponent_Host === (null as any))) { (renderType_DashboardComponent_Host = viewUtils.createRenderComponentType('',0,import12.ViewEncapsulation.None,[],{})); }
  return new _View_DashboardComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const DashboardComponentNgFactory:import13.ComponentFactory<import1.DashboardComponent> = new import13.ComponentFactory<import1.DashboardComponent>('my-dashboard',viewFactory_DashboardComponent_Host0,import1.DashboardComponent);
const styles_DashboardComponent:any[] = [import14.styles];
const nodeDebugInfos_DashboardComponent0:import0.StaticNodeDebugInfo[] = [
  new import0.StaticNodeDebugInfo([],(null as any),{}),
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
    import17.HeroSearchService,
    import18.HeroSearchComponent
  ]
  ,import18.HeroSearchComponent,{}),
  new import0.StaticNodeDebugInfo([],(null as any),{})
]
;
var renderType_DashboardComponent:import2.RenderComponentType = (null as any);
class _View_DashboardComponent0 extends import3.DebugAppView<import1.DashboardComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _anchor_6:any;
  /*private*/ _appEl_6:import4.AppElement;
  _TemplateRef_6_5:any;
  _NgFor_6_6:import16.NgFor;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  /*private*/ _appEl_9:import4.AppElement;
  _HeroSearchService_9_4:import17.HeroSearchService;
  _HeroSearchComponent_9_5:import18.HeroSearchComponent;
  _text_10:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_DashboardComponent0,renderType_DashboardComponent,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_DashboardComponent0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',this.debug(0,0,0));
    this._el_1 = this.renderer.createElement(parentRenderNode,'h3',this.debug(1,1,4));
    this._text_2 = this.renderer.createText(this._el_1,'Top Heroes',this.debug(2,1,8));
    this._text_3 = this.renderer.createText(parentRenderNode,'\n    ',this.debug(3,1,23));
    this._el_4 = this.renderer.createElement(parentRenderNode,'div',this.debug(4,2,4));
    this.renderer.setElementAttribute(this._el_4,'class','grid grid-pad');
    this._text_5 = this.renderer.createText(this._el_4,'\n      ',this.debug(5,2,31));
    this._anchor_6 = this.renderer.createTemplateAnchor(this._el_4,this.debug(6,3,6));
    this._appEl_6 = new import4.AppElement(6,4,this,this._anchor_6);
    this._TemplateRef_6_5 = new import15.TemplateRef_(this._appEl_6,viewFactory_DashboardComponent1);
    this._NgFor_6_6 = new import16.NgFor(this._appEl_6.vcRef,this._TemplateRef_6_5,this.parentInjector.get(import19.IterableDiffers),this.ref);
    this._text_7 = this.renderer.createText(this._el_4,'\n    ',this.debug(7,7,12));
    this._text_8 = this.renderer.createText(parentRenderNode,'\n    ',this.debug(8,8,10));
    this._el_9 = this.renderer.createElement(parentRenderNode,'hero-search',this.debug(9,9,4));
    this._appEl_9 = new import4.AppElement(9,(null as any),this,this._el_9);
    var compView_9:any = import20.viewFactory_HeroSearchComponent0(this.viewUtils,this.injector(9),this._appEl_9);
    this._HeroSearchService_9_4 = new import17.HeroSearchService(this.parentInjector.get(import21.Http));
    this._HeroSearchComponent_9_5 = new import18.HeroSearchComponent(this._HeroSearchService_9_4,this.parentInjector.get(import9.Router));
    this._appEl_9.initComponent(this._HeroSearchComponent_9_5,[],compView_9);
    compView_9.create(this._HeroSearchComponent_9_5,[],(null as any));
    this._text_10 = this.renderer.createText(parentRenderNode,'\n  ',this.debug(10,9,31));
    this._expr_0 = import8.UNINITIALIZED;
    this.init([],[
      this._text_0,
      this._el_1,
      this._text_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._anchor_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.TemplateRef) && (6 === requestNodeIndex))) { return this._TemplateRef_6_5; }
    if (((token === import16.NgFor) && (6 === requestNodeIndex))) { return this._NgFor_6_6; }
    if (((token === import17.HeroSearchService) && (9 === requestNodeIndex))) { return this._HeroSearchService_9_4; }
    if (((token === import18.HeroSearchComponent) && (9 === requestNodeIndex))) { return this._HeroSearchComponent_9_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import8.SimpleChange} = (null as any);
    this.debug(6,3,6);
    changes = (null as any);
    this.debug(6,3,11);
    const currVal_0:any = this.context.heroes;
    if (import5.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgFor_6_6.ngForOf = currVal_0;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import8.SimpleChange(this._expr_0,currVal_0);
      this._expr_0 = currVal_0;
    }
    if ((changes !== (null as any))) { this._NgFor_6_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_6_6.ngDoCheck(); }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._HeroSearchComponent_9_5.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_DashboardComponent0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import3.AppView<import1.DashboardComponent> {
  if ((renderType_DashboardComponent === (null as any))) { (renderType_DashboardComponent = viewUtils.createRenderComponentType('/Users/albatrosary/Sandbox/accounts-book/src/components/dashboard/dashboard.component.ts class DashboardComponent - inline template',0,import12.ViewEncapsulation.Emulated,styles_DashboardComponent,{})); }
  return new _View_DashboardComponent0(viewUtils,parentInjector,declarationEl);
}
const nodeDebugInfos_DashboardComponent1:import0.StaticNodeDebugInfo[] = [
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
class _View_DashboardComponent1 extends import3.DebugAppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _text_7:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_DashboardComponent1,renderType_DashboardComponent,import7.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_DashboardComponent1);
  }
  createInternal(rootSelector:string):import4.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',this.debug(0,3,6));
    this.renderer.setElementAttribute(this._el_0,'class','col-1-4');
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',this.debug(1,3,82));
    this._el_2 = this.renderer.createElement(this._el_0,'div',this.debug(2,4,8));
    this.renderer.setElementAttribute(this._el_2,'class','module hero');
    this._text_3 = this.renderer.createText(this._el_2,'\n          ',this.debug(3,4,33));
    this._el_4 = this.renderer.createElement(this._el_2,'h4',this.debug(4,5,10));
    this._text_5 = this.renderer.createText(this._el_4,'',this.debug(5,5,14));
    this._text_6 = this.renderer.createText(this._el_2,'\n        ',this.debug(6,5,32));
    this._text_7 = this.renderer.createText(this._el_0,'\n      ',this.debug(7,6,14));
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this._expr_1 = import8.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._text_7
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    this.debug(5,5,14);
    const currVal_1:any = import5.interpolate(1,'',this.context.$implicit.name,'');
    if (import5.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_5,currVal_1);
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(0,3,39);
    const pd_0:any = ((<any>this.parent.context.gotoDetail(this.context.$implicit)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_DashboardComponent1(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import3.AppView<any> {
  return new _View_DashboardComponent1(viewUtils,parentInjector,declarationEl);
}