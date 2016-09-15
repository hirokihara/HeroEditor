/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/debug_context';
import * as import1 from './hero-detail.component';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view';
import * as import4 from '@angular/core/src/linker/element';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '../shared/hero.service';
import * as import10 from '@angular/router/src/router_state';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from './hero-detail.component.css.shim';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/common/src/directives/ng_if';
import * as import16 from '@angular/forms/src/directives/default_value_accessor';
import * as import17 from '@angular/forms/src/directives/control_value_accessor';
import * as import18 from '@angular/forms/src/directives/ng_model';
import * as import19 from '@angular/forms/src/directives/ng_control';
import * as import20 from '@angular/forms/src/directives/ng_control_status';
import * as import21 from '@angular/core/src/linker/element_ref';
const nodeDebugInfos_HeroDetailComponent_Host0:import0.StaticNodeDebugInfo[] = [new import0.StaticNodeDebugInfo([import1.HeroDetailComponent],import1.HeroDetailComponent,{})];
var renderType_HeroDetailComponent_Host:import2.RenderComponentType = (null as any);
class _View_HeroDetailComponent_Host0 extends import3.DebugAppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import4.AppElement;
  _HeroDetailComponent_0_4:import1.HeroDetailComponent;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_HeroDetailComponent_Host0,renderType_HeroDetailComponent_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_HeroDetailComponent_Host0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    this._el_0 = this.selectOrCreateHostElement('my-hero-detail',rootSelector,this.debug(0,0,0));
    this._appEl_0 = new import4.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_HeroDetailComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._HeroDetailComponent_0_4 = new import1.HeroDetailComponent(this.parentInjector.get(import9.HeroService),this.parentInjector.get(import10.ActivatedRoute));
    this._appEl_0.initComponent(this._HeroDetailComponent_0_4,[],compView_0);
    compView_0.create(this._HeroDetailComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.HeroDetailComponent) && (0 === requestNodeIndex))) { return this._HeroDetailComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._HeroDetailComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_HeroDetailComponent_Host0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import3.AppView<any> {
  if ((renderType_HeroDetailComponent_Host === (null as any))) { (renderType_HeroDetailComponent_Host = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,[],{})); }
  return new _View_HeroDetailComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const HeroDetailComponentNgFactory:import12.ComponentFactory<import1.HeroDetailComponent> = new import12.ComponentFactory<import1.HeroDetailComponent>('my-hero-detail',viewFactory_HeroDetailComponent_Host0,import1.HeroDetailComponent);
const styles_HeroDetailComponent:any[] = [import13.styles];
const nodeDebugInfos_HeroDetailComponent0:import0.StaticNodeDebugInfo[] = [
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([
    import14.TemplateRef,
    import15.NgIf
  ]
  ,(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{})
]
;
var renderType_HeroDetailComponent:import2.RenderComponentType = (null as any);
class _View_HeroDetailComponent0 extends import3.DebugAppView<import1.HeroDetailComponent> {
  _text_0:any;
  _anchor_1:any;
  /*private*/ _appEl_1:import4.AppElement;
  _TemplateRef_1_5:any;
  _NgIf_1_6:import15.NgIf;
  _text_2:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_HeroDetailComponent0,renderType_HeroDetailComponent,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_HeroDetailComponent0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',this.debug(0,0,0));
    this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode,this.debug(1,1,4));
    this._appEl_1 = new import4.AppElement(1,(null as any),this,this._anchor_1);
    this._TemplateRef_1_5 = new import14.TemplateRef_(this._appEl_1,viewFactory_HeroDetailComponent1);
    this._NgIf_1_6 = new import15.NgIf(this._appEl_1.vcRef,this._TemplateRef_1_5);
    this._text_2 = this.renderer.createText(parentRenderNode,'\n  ',this.debug(2,11,8));
    this._expr_0 = import8.UNINITIALIZED;
    this.init([],[
      this._text_0,
      this._anchor_1,
      this._text_2
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.TemplateRef) && (1 === requestNodeIndex))) { return this._TemplateRef_1_5; }
    if (((token === import15.NgIf) && (1 === requestNodeIndex))) { return this._NgIf_1_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(1,1,9);
    const currVal_0:any = this.context.hero;
    if (import5.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgIf_1_6.ngIf = currVal_0;
      this._expr_0 = currVal_0;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_HeroDetailComponent0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import3.AppView<import1.HeroDetailComponent> {
  if ((renderType_HeroDetailComponent === (null as any))) { (renderType_HeroDetailComponent = viewUtils.createRenderComponentType('/Users/albatrosary/Sandbox/HeroEditor/src/components/hero-detail/hero-detail.component.ts class HeroDetailComponent - inline template',0,import11.ViewEncapsulation.Emulated,styles_HeroDetailComponent,{})); }
  return new _View_HeroDetailComponent0(viewUtils,parentInjector,declarationEl);
}
const nodeDebugInfos_HeroDetailComponent1:import0.StaticNodeDebugInfo[] = [
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
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([
    import16.DefaultValueAccessor,
    import17.NG_VALUE_ACCESSOR,
    import18.NgModel,
    import19.NgControl,
    import20.NgControlStatus
  ]
  ,(null as any),{}),
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
class _View_HeroDetailComponent1 extends import3.DebugAppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _el_13:any;
  _text_14:any;
  _text_15:any;
  _el_16:any;
  _DefaultValueAccessor_16_3:import16.DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_16_4:any[];
  _NgModel_16_5:import18.NgModel;
  _NgControl_16_6:any;
  _NgControlStatus_16_7:import20.NgControlStatus;
  _text_17:any;
  _text_18:any;
  _el_19:any;
  _text_20:any;
  _text_21:any;
  _el_22:any;
  _text_23:any;
  _text_24:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_11:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_HeroDetailComponent1,renderType_HeroDetailComponent,import7.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_HeroDetailComponent1);
  }
  createInternal(rootSelector:string):import4.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',this.debug(0,1,4));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',this.debug(1,1,22));
    this._el_2 = this.renderer.createElement(this._el_0,'h2',this.debug(2,2,4));
    this._text_3 = this.renderer.createText(this._el_2,'',this.debug(3,2,8));
    this._text_4 = this.renderer.createText(this._el_0,'\n    ',this.debug(4,2,35));
    this._el_5 = this.renderer.createElement(this._el_0,'div',this.debug(5,3,4));
    this._text_6 = this.renderer.createText(this._el_5,'\n      ',this.debug(6,3,9));
    this._el_7 = this.renderer.createElement(this._el_5,'label',this.debug(7,4,6));
    this._text_8 = this.renderer.createText(this._el_7,'id: ',this.debug(8,4,13));
    this._text_9 = this.renderer.createText(this._el_5,'',this.debug(9,4,25));
    this._text_10 = this.renderer.createText(this._el_0,'\n    ',this.debug(10,4,42));
    this._el_11 = this.renderer.createElement(this._el_0,'div',this.debug(11,5,4));
    this._text_12 = this.renderer.createText(this._el_11,'\n      ',this.debug(12,5,9));
    this._el_13 = this.renderer.createElement(this._el_11,'label',this.debug(13,6,6));
    this._text_14 = this.renderer.createText(this._el_13,'name: ',this.debug(14,6,13));
    this._text_15 = this.renderer.createText(this._el_11,'\n      ',this.debug(15,6,27));
    this._el_16 = this.renderer.createElement(this._el_11,'input',this.debug(16,7,6));
    this.renderer.setElementAttribute(this._el_16,'placeholder','name');
    this._DefaultValueAccessor_16_3 = new import16.DefaultValueAccessor(this.renderer,new import21.ElementRef(this._el_16));
    this._NG_VALUE_ACCESSOR_16_4 = [this._DefaultValueAccessor_16_3];
    this._NgModel_16_5 = new import18.NgModel((null as any),(null as any),(null as any),this._NG_VALUE_ACCESSOR_16_4);
    this._NgControl_16_6 = this._NgModel_16_5;
    this._NgControlStatus_16_7 = new import20.NgControlStatus(this._NgControl_16_6);
    this._text_17 = this.renderer.createText(this._el_11,'\n    ',this.debug(17,7,58));
    this._text_18 = this.renderer.createText(this._el_0,'\n    ',this.debug(18,8,10));
    this._el_19 = this.renderer.createElement(this._el_0,'button',this.debug(19,9,4));
    this._text_20 = this.renderer.createText(this._el_19,'Back',this.debug(20,9,31));
    this._text_21 = this.renderer.createText(this._el_0,'\n    ',this.debug(21,9,44));
    this._el_22 = this.renderer.createElement(this._el_0,'button',this.debug(22,10,4));
    this._text_23 = this.renderer.createText(this._el_22,'Save',this.debug(23,10,29));
    this._text_24 = this.renderer.createText(this._el_0,'\n  ',this.debug(24,10,42));
    this._expr_0 = import8.UNINITIALIZED;
    this._expr_1 = import8.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_16,'ngModelChange',this.eventHandler(this._handle_ngModelChange_16_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_16,'input',this.eventHandler(this._handle_input_16_1.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_16,'blur',this.eventHandler(this._handle_blur_16_2.bind(this)));
    this._expr_5 = import8.UNINITIALIZED;
    const subscription_0:any = this._NgModel_16_5.update.subscribe(this.eventHandler(this._handle_ngModelChange_16_0.bind(this)));
    this._expr_6 = import8.UNINITIALIZED;
    this._expr_7 = import8.UNINITIALIZED;
    this._expr_8 = import8.UNINITIALIZED;
    this._expr_9 = import8.UNINITIALIZED;
    this._expr_10 = import8.UNINITIALIZED;
    this._expr_11 = import8.UNINITIALIZED;
    var disposable_3:Function = this.renderer.listen(this._el_19,'click',this.eventHandler(this._handle_click_19_0.bind(this)));
    var disposable_4:Function = this.renderer.listen(this._el_22,'click',this.eventHandler(this._handle_click_22_0.bind(this)));
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._text_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._text_18,
      this._el_19,
      this._text_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._text_24
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3,
      disposable_4
    ]
    ,[subscription_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.DefaultValueAccessor) && (16 === requestNodeIndex))) { return this._DefaultValueAccessor_16_3; }
    if (((token === import17.NG_VALUE_ACCESSOR) && (16 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_16_4; }
    if (((token === import18.NgModel) && (16 === requestNodeIndex))) { return this._NgModel_16_5; }
    if (((token === import19.NgControl) && (16 === requestNodeIndex))) { return this._NgControl_16_6; }
    if (((token === import20.NgControlStatus) && (16 === requestNodeIndex))) { return this._NgControlStatus_16_7; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import8.SimpleChange} = (null as any);
    this.debug(16,7,6);
    changes = (null as any);
    this.debug(16,7,13);
    const currVal_5:any = this.parent.context.hero.name;
    if (import5.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._NgModel_16_5.model = currVal_5;
      if ((changes === (null as any))) { (changes = {}); }
      changes['model'] = new import8.SimpleChange(this._expr_5,currVal_5);
      this._expr_5 = currVal_5;
    }
    if ((changes !== (null as any))) { this._NgModel_16_5.ngOnChanges(changes); }
    this.detectContentChildrenChanges(throwOnChange);
    this.debug(3,2,8);
    const currVal_0:any = import5.interpolate(1,'',this.parent.context.hero.name,' details!');
    if (import5.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_3,currVal_0);
      this._expr_0 = currVal_0;
    }
    this.debug(9,4,25);
    const currVal_1:any = import5.interpolate(1,'',this.parent.context.hero.id,'');
    if (import5.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_9,currVal_1);
      this._expr_1 = currVal_1;
    }
    this.debug(16,7,6);
    const currVal_6:any = this._NgControlStatus_16_7.ngClassUntouched;
    if (import5.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementClass(this._el_16,'ng-untouched',currVal_6);
      this._expr_6 = currVal_6;
    }
    this.debug(16,7,6);
    const currVal_7:any = this._NgControlStatus_16_7.ngClassTouched;
    if (import5.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementClass(this._el_16,'ng-touched',currVal_7);
      this._expr_7 = currVal_7;
    }
    this.debug(16,7,6);
    const currVal_8:any = this._NgControlStatus_16_7.ngClassPristine;
    if (import5.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementClass(this._el_16,'ng-pristine',currVal_8);
      this._expr_8 = currVal_8;
    }
    this.debug(16,7,6);
    const currVal_9:any = this._NgControlStatus_16_7.ngClassDirty;
    if (import5.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setElementClass(this._el_16,'ng-dirty',currVal_9);
      this._expr_9 = currVal_9;
    }
    this.debug(16,7,6);
    const currVal_10:any = this._NgControlStatus_16_7.ngClassValid;
    if (import5.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this.renderer.setElementClass(this._el_16,'ng-valid',currVal_10);
      this._expr_10 = currVal_10;
    }
    this.debug(16,7,6);
    const currVal_11:any = this._NgControlStatus_16_7.ngClassInvalid;
    if (import5.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this.renderer.setElementClass(this._el_16,'ng-invalid',currVal_11);
      this._expr_11 = currVal_11;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this.debug(16,7,6);
    this._NgModel_16_5.ngOnDestroy();
  }
  private _handle_ngModelChange_16_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(16,7,13);
    const pd_0:any = ((<any>(this.parent.context.hero.name = $event)) !== false);
    return (true && pd_0);
  }
  private _handle_input_16_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(16,7,6);
    const pd_0:any = ((<any>this._DefaultValueAccessor_16_3.onChange($event.target.value)) !== false);
    return (true && pd_0);
  }
  private _handle_blur_16_2($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(16,7,6);
    const pd_0:any = ((<any>this._DefaultValueAccessor_16_3.onTouched()) !== false);
    return (true && pd_0);
  }
  private _handle_click_19_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(19,9,12);
    const pd_0:any = ((<any>this.parent.context.goBack()) !== false);
    return (true && pd_0);
  }
  private _handle_click_22_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(22,10,12);
    const pd_0:any = ((<any>this.parent.context.save()) !== false);
    return (true && pd_0);
  }
}
function viewFactory_HeroDetailComponent1(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import3.AppView<any> {
  return new _View_HeroDetailComponent1(viewUtils,parentInjector,declarationEl);
}