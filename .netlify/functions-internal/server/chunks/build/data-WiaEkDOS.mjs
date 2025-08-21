import { _ as _export_sfc, e as __nuxt_component_0$2$1 } from './server.mjs';
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main$3 = {
  props: ["card"]
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$2$1;
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
    to: `/products/${$props.card.id}`,
    class: "card"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", `/images/${$props.card.image || "fe1.jpg"}`)} alt="fe" class="image" data-v-702b39ea${_scopeId}><h3 class="header" data-v-702b39ea${_scopeId}>${ssrInterpolate($props.card.title)}</h3><p class="snippet" data-v-702b39ea${_scopeId}>${ssrInterpolate($props.card.snippet)}</p>`);
      } else {
        return [
          createVNode("img", {
            src: `/images/${$props.card.image || "fe1.jpg"}`,
            alt: "fe",
            class: "image"
          }, null, 8, ["src"]),
          createVNode("h3", { class: "header" }, toDisplayString($props.card.title), 1),
          createVNode("p", { class: "snippet" }, toDisplayString($props.card.snippet), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LargeCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-702b39ea"]]), { __name: "LargeCard" });
const _sfc_main$2 = {
  props: ["cardsSection"]
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_LargeCard = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-cc5095da><h4 class="header" data-v-cc5095da>${ssrInterpolate($props.cardsSection.title)}</h4><p class="snippet" data-v-cc5095da>${ssrInterpolate($props.cardsSection.snippet)}</p><div class="cards-container" data-v-cc5095da><!--[-->`);
  ssrRenderList($props.cardsSection.cards, (card) => {
    _push(ssrRenderComponent(_component_LargeCard, {
      key: card.id,
      card
    }, null, _parent));
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LargeCardDisplay.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-cc5095da"]]), { __name: "LargeCardDisplay" });
const _sfc_main$1 = {
  props: ["card"]
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$2$1;
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
    to: `/products/${$props.card.id}`,
    class: "card-container"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", `/images/${$props.card.image || "fe1.jpg"}`)} alt="fe" class="image" data-v-22c45979${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: `/images/${$props.card.image || "fe1.jpg"}`,
            alt: "fe",
            class: "image"
          }, null, 8, ["src"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SmallCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-22c45979"]]), { __name: "SmallCard" });
const _sfc_main = {
  props: ["cardsSection"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SmallCard = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-8803fc24><h3 class="header" data-v-8803fc24>${ssrInterpolate($props.cardsSection.title)}</h3><div class="card-container" data-v-8803fc24><!--[-->`);
  ssrRenderList($props.cardsSection.cards, (card) => {
    _push(ssrRenderComponent(_component_SmallCard, {
      key: card.id,
      card
    }, null, _parent));
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SmallCardDisplay.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8803fc24"]]), { __name: "SmallCardDisplay" });
const largeCardSections = [
  {
    id: 1,
    title: "Top-rated Fire Extinguisher in Niagara",
    snippet: "User say these are the best fire extinguishers to rent if your house is burning down.",
    cards: [
      {
        id: 19,
        title: "Toronto's Portable 2L Fire Extinguisher",
        snippet: "This fire extinguisher saved homes from completely burning down. People that used it only had 98% of their homes burned down.",
        image: "fe1.jpg"
      },
      {
        id: 20,
        title: "Empty Super Red Fire Extinguisher",
        snippet: "This is one of the most red fire extinguishers you will ever see. Super clean. It's pretty much useless otherwise.",
        image: "fe2.jpg"
      },
      {
        id: 21,
        title: "Fire Extinguisher, Perfect for Pools",
        snippet: "If you ever find that your pool is on fire then this is the fire extinguisher for you. It has a 100% success rate.",
        image: "fe3.jpg"
      }
    ]
  },
  {
    id: 2,
    title: "Luxury Fire Extinguisher",
    snippet: "Take down that fire lavishly and in style with our luxury extinguishers.",
    cards: [
      {
        id: 22,
        title: "Vintage 1864 Fire Extinguisher",
        snippet: "This is hands down the worst fire extinguisher you can use in a crisis. The radiation will kill you if the fire doesn't",
        image: "fe4.png"
      },
      {
        id: 23,
        title: "Pure Silver & Gold Fire Extinguisher",
        snippet: "This one is made out of 50k worth of pure silver and white gold. The metal choice was a poor for functionality, but was great for style!",
        image: "fe5.png"
      },
      {
        id: 24,
        title: "Two in One Fire Extinguisher",
        snippet: "This is the first ever two in one fire extinguisher. Good if both you and your friend's houses are burining down",
        image: "fe6.jpg"
      }
    ]
  }
];
const smallCardSections = [
  {
    id: 1,
    title: "Fire Extinguisher in Toronto",
    cards: [
      {
        id: 1,
        image: "fe7.jpg"
      },
      {
        id: 2,
        image: "fe8.jpg"
      },
      {
        id: 3,
        image: "fe9.jpg"
      },
      {
        id: 4,
        image: "fe10.jpg"
      },
      {
        id: 5,
        image: "fe11.jpg"
      },
      {
        id: 6,
        image: "fe12.jpg"
      },
      {
        id: 7,
        image: "fe13.jpg"
      },
      {
        id: 8,
        image: "fe14.jpg"
      },
      {
        id: 9,
        image: "fe15.jpg"
      },
      {
        id: 10,
        image: "fe16.jpg"
      },
      {
        id: 11,
        image: "fe17.jpeg"
      },
      {
        id: 12,
        image: "fe18.jpg"
      }
    ]
  },
  {
    id: 2,
    title: "Fire Extinguisher in Niagara",
    cards: [
      {
        id: 13,
        image: "fe19.jpg"
      },
      {
        id: 14,
        image: "fe20.jpg"
      },
      {
        id: 15,
        image: "fe21.jpg"
      },
      {
        id: 16,
        image: "fe22.jpg"
      },
      {
        id: 17,
        image: "fe23.jpg"
      },
      {
        id: 18,
        image: "fe24.jpg"
      },
      {
        id: 19,
        image: "fe1.jpg"
      },
      {
        id: 20,
        image: "fe2.jpg"
      },
      {
        id: 21,
        image: "fe3.jpg"
      },
      {
        id: 22,
        image: "fe4.png"
      },
      {
        id: 23,
        image: "fe5.png"
      },
      {
        id: 24,
        image: "fe5.png"
      }
    ]
  }
];

export { __nuxt_component_0$1 as _, __nuxt_component_1 as a, largeCardSections as l, smallCardSections as s };
//# sourceMappingURL=data-WiaEkDOS.mjs.map
