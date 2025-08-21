import { computed, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { u as useProductsStore } from './products-C0JF55yf.mjs';
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

const _sfc_main$1 = {
  props: ["item"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "item-container" }, _attrs))} data-v-03abd93e><img${ssrRenderAttr("src", `/images/${$props.item.image}`)} alt="" data-v-03abd93e><div class="text-container" data-v-03abd93e><h4 data-v-03abd93e>${ssrInterpolate($props.item.title)}</h4><p data-v-03abd93e>${ssrInterpolate($props.item.description)}</p></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MyItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-03abd93e"]]), { __name: "MyItem" });
const _sfc_main = {
  __name: "my-items",
  __ssrInlineRender: true,
  setup(__props) {
    const products = useProductsStore();
    const myRentals = computed(() => products.$state.myRentals);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MyItem = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(unref(myRentals), (item) => {
        _push(ssrRenderComponent(_component_MyItem, {
          key: item.id,
          item
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/my-items.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=my-items-Dn92rD3w.mjs.map
