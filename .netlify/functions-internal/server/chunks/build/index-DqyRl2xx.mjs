import { _ as __nuxt_component_0$1, a as __nuxt_component_1, s as smallCardSections, l as largeCardSections } from './data-WiaEkDOS.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = {
  data() {
    return {
      largeCardInfo: largeCardSections,
      smallCardInfo: smallCardSections
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_LargeCardDisplay = __nuxt_component_0$1;
  const _component_SmallCardDisplay = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><!--[-->`);
  ssrRenderList($data.largeCardInfo.slice(0, 1), (cardInfo) => {
    _push(ssrRenderComponent(_component_LargeCardDisplay, {
      key: cardInfo.id,
      cardsSection: cardInfo
    }, null, _parent));
  });
  _push(`<!--]--><!--[-->`);
  ssrRenderList($data.smallCardInfo, (cardInfo) => {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-DqyRl2xx.mjs.map
