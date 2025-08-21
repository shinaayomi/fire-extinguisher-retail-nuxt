import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0$1, a as __nuxt_component_1, s as smallCardSections, l as largeCardSections } from './data-WiaEkDOS.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'pinia';
import 'vue-router';

const _imports_0 = "data:image/svg+xml,%3csvg%20id='Capa_1'%20enable-background='new%200%200%20490%20490'%20height='512'%20viewBox='0%200%20490%20490'%20width='512'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%3e%3cpath%20d='m490%20245c0%20104.12-64.95%20193.08-156.55%20228.55-27.44%2010.62-57.26%2016.45-88.45%2016.45-43.47%200-84.3-11.32-119.7-31.19-26.78-15.01-50.44-34.93-69.79-58.51-34.7-42.27-55.51-96.36-55.51-155.3%200-135.31%20109.69-245%20245-245s245%20109.69%20245%20245z'%20fill='%23e7c837'/%3e%3cpath%20d='m206.386%2060.944h116.142v39.076h-116.142z'%20fill='%23232c31'/%3e%3cpath%20d='m164.054%2026.21h67.297v156.303h-67.297z'%20fill='%23e4e4e4'/%3e%3cpath%20d='m164.054%2026.21h26.305v156.303h-26.305z'%20fill='%23b0b0b0'/%3e%3cpath%20d='m339.9%20263.92v167.16c0%2014.8-2.26%2029.06-6.45%2042.47-27.44%2010.62-57.26%2016.45-88.45%2016.45-76.36%200-144.57-34.94-189.49-89.7v-136.38c0-78.53%2063.66-142.19%20142.19-142.19s142.2%2063.66%20142.2%20142.19z'%20fill='%23db2b51'/%3e%3cpath%20d='m123.89%20263.92v167.16c0%209.49.48%2018.76%201.41%2027.73-26.78-15.01-50.44-34.93-69.79-58.51v-136.38c0-78.22%2063.14-141.67%20141.24-142.18-40.33.99-72.86%2064.27-72.86%20142.18z'%20fill='%23b21646'/%3e%3cpath%20d='m474.489%20142.352-180.182-26.116v-75.85l180.182-26.116z'%20fill='%23e4e4e4'/%3e%3cpath%20d='m474.489%20142.352-180.182-26.116v-30.327l180.182%208.683z'%20fill='%23b0b0b0'/%3e%3cpath%20d='m115.752%20255.237h163.901v189.951h-163.901z'%20fill='%23e4e4e4'/%3e%3cpath%20d='m124.262%20445.188h-8.51v-189.951h8.282c-.098%202.866-.141%205.764-.141%208.683v167.157c0%204.766.119%209.466.369%2014.111z'%20fill='%23b0b0b0'/%3e%3cpath%20d='m195.229%20409.369c-30.392%200-51.016-41.247-33.649-70.553s10.854-52.101%2010.854-52.101%2039.076%2031.478%2029.307%2060.784c0%200%2011.94-16.101%2011.94-37.99%2018.814%203.618%2056.986%2099.86-18.452%2099.86z'%20fill='%23db2b51'/%3e%3c/g%3e%3c/svg%3e";
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "Hero container" }, _attrs))} data-v-23a6b075><div class="text-container" data-v-23a6b075><h1 class="header" data-v-23a6b075>FInd your Fire Extinguisher</h1><p class="snippet" data-v-23a6b075> A portable or movable device containing extinguishing agents, used to put out small fires by disrupting the fire triangle (heat, oxygen, and fuel). It typically consists of a hand-held cylindrical pressure vessel filled with a substance that can be discharged to suppress the fire. </p><button class="button btn" data-v-23a6b075>Start looking</button></div><img${ssrRenderAttr("src", _imports_0)} alt="" class="image" data-v-23a6b075></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-23a6b075"]]), { __name: "Hero" });
const _sfc_main = {
  data() {
    return {
      largeCardInfo: largeCardSections,
      smallCardSections
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Hero = __nuxt_component_0;
  const _component_LargeCardDisplay = __nuxt_component_0$1;
  const _component_SmallCardDisplay = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Hero, null, null, _parent));
  _push(`<!--[-->`);
  ssrRenderList($data.largeCardInfo, (cardInfo) => {
    _push(ssrRenderComponent(_component_LargeCardDisplay, {
      key: cardInfo.id,
      cardsSection: cardInfo
    }, null, _parent));
  });
  _push(`<!--]--><!--[-->`);
  ssrRenderList($data.smallCardSections, (cardInfo) => {
    _push(ssrRenderComponent(_component_SmallCardDisplay, {
      key: cardInfo.id,
      cardsSection: cardInfo
    }, null, _parent));
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-BMG3icwx.mjs.map
