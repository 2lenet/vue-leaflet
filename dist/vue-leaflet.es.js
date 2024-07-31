import { watch as He, ref as c, provide as G, inject as O, onUnmounted as ye, h as U, onBeforeUnmount as R, defineComponent as S, onMounted as _, markRaw as j, nextTick as g, render as vt, reactive as bt, computed as ne } from "vue";
const de = (t, o) => {
  for (const e of Object.keys(o))
    t.on(e, o[e]);
}, me = (t) => {
  for (const o of Object.keys(t)) {
    const e = t[o];
    e && k(e.cancel) && e.cancel();
  }
}, Je = (t) => !t || typeof t.charAt != "function" ? t : t.charAt(0).toUpperCase() + t.slice(1), k = (t) => typeof t == "function", L = (t, o, e) => {
  for (const n in e) {
    const a = "set" + Je(n);
    t[a] ? He(
      () => e[n],
      (r, l) => {
        t[a](r, l);
      }
    ) : o[a] && He(
      () => e[n],
      (r) => {
        o[a](r);
      }
    );
  }
}, f = (t, o, e = {}) => {
  const n = { ...e };
  for (const a in t) {
    const r = o[a], l = t[a];
    r && (r && r.custom === !0 || l !== void 0 && (n[a] = l));
  }
  return n;
}, T = (t) => {
  const o = {}, e = {};
  for (const n in t)
    if (n.startsWith("on") && !n.startsWith("onUpdate") && n !== "onReady") {
      const a = n.slice(2).toLocaleLowerCase();
      o[a] = t[n];
    } else
      e[n] = t[n];
  return { listeners: o, attrs: e };
}, qe = async (t) => {
  const o = await Promise.all([
    import("leaflet/dist/images/marker-icon-2x.png"),
    import("leaflet/dist/images/marker-icon.png"),
    import("leaflet/dist/images/marker-shadow.png")
  ]);
  delete t.Default.prototype._getIconUrl, t.Default.mergeOptions({
    iconRetinaUrl: o[0].default,
    iconUrl: o[1].default,
    shadowUrl: o[2].default
  });
}, Y = (t) => {
  const o = c(
    (...n) => console.warn(`Method ${t} has been invoked without being replaced`)
  ), e = (...n) => o.value(...n);
  return e.wrapped = o, G(t, e), e;
}, V = (t, o) => t.wrapped.value = o, v = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || globalThis, y = (t) => {
  const o = O(t);
  if (o === void 0)
    throw new Error(
      `Attempt to inject ${t.description} before it was provided.`
    );
  return o;
}, Xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  WINDOW_OR_GLOBAL: v,
  assertInject: y,
  bindEventHandlers: de,
  cancelDebounces: me,
  capitalizeFirstLetter: Je,
  isFunction: k,
  propsBinder: L,
  propsToLeafletOptions: f,
  provideLeafletWrapper: Y,
  remapEvents: T,
  resetWebpackIcon: qe,
  updateLeafletWrapper: V
}, Symbol.toStringTag, { value: "Module" })), h = Symbol(
  "useGlobalLeaflet"
), M = Symbol("addLayer"), ee = Symbol("removeLayer"), H = Symbol(
  "registerControl"
), ve = Symbol(
  "registerLayerControl"
), be = Symbol(
  "canSetParentHtml"
), fe = Symbol("setParentHtml"), ge = Symbol("setIcon"), Le = Symbol("bindPopup"), he = Symbol("bindTooltip"), Oe = Symbol("unbindPopup"), Se = Symbol("unbindTooltip"), Yt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AddLayerInjection: M,
  BindPopupInjection: Le,
  BindTooltipInjection: he,
  CanSetParentHtmlInjection: be,
  RegisterControlInjection: H,
  RegisterLayerControlInjection: ve,
  RemoveLayerInjection: ee,
  SetIconInjection: ge,
  SetParentHtmlInjection: fe,
  UnbindPopupInjection: Oe,
  UnbindTooltipInjection: Se,
  UseGlobalLeafletInjection: h
}, Symbol.toStringTag, { value: "Module" })), W = {
  options: {
    type: Object,
    default: () => ({}),
    custom: !0
  }
}, J = (t) => ({ options: t.options, methods: {} }), ft = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  componentProps: W,
  setupComponent: J
}, Symbol.toStringTag, { value: "Module" })), D = {
  ...W,
  pane: {
    type: String
  },
  attribution: {
    type: String
  },
  name: {
    type: String,
    custom: !0
  },
  layerType: {
    type: String,
    custom: !0
  },
  visible: {
    type: Boolean,
    custom: !0,
    default: !0
  }
}, q = (t, o, e) => {
  const n = y(M), a = y(ee), { options: r, methods: l } = J(t), s = f(
    t,
    D,
    r
  ), i = () => n({ leafletObject: o.value }), u = () => a({ leafletObject: o.value }), d = {
    ...l,
    setAttribution(m) {
      u(), o.value.options.attribution = m, t.visible && i();
    },
    setName() {
      u(), t.visible && i();
    },
    setLayerType() {
      u(), t.visible && i();
    },
    setVisible(m) {
      o.value && (m ? i() : u());
    },
    bindPopup(m) {
      if (!o.value || !k(o.value.bindPopup)) {
        console.warn(
          "Attempt to bind popup before bindPopup method available on layer."
        );
        return;
      }
      o.value.bindPopup(m);
    },
    bindTooltip(m) {
      if (!o.value || !k(o.value.bindTooltip)) {
        console.warn(
          "Attempt to bind tooltip before bindTooltip method available on layer."
        );
        return;
      }
      o.value.bindTooltip(m);
    },
    unbindTooltip() {
      o.value && (k(o.value.closeTooltip) && o.value.closeTooltip(), k(o.value.unbindTooltip) && o.value.unbindTooltip());
    },
    unbindPopup() {
      o.value && (k(o.value.closePopup) && o.value.closePopup(), k(o.value.unbindPopup) && o.value.unbindPopup());
    },
    updateVisibleProp(m) {
      e.emit("update:visible", m);
    }
  };
  return G(Le, d.bindPopup), G(he, d.bindTooltip), G(Oe, d.unbindPopup), G(Se, d.unbindTooltip), ye(() => {
    d.unbindPopup(), d.unbindTooltip(), u();
  }), { options: s, methods: d };
}, A = (t, o) => {
  if (t && o.default)
    return U("div", { style: { display: "none" } }, o.default());
}, gt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  layerProps: D,
  render: A,
  setupLayer: q
}, Symbol.toStringTag, { value: "Module" })), _e = {
  ...D,
  interactive: {
    type: Boolean,
    default: void 0
  },
  bubblingMouseEvents: {
    type: Boolean,
    default: void 0
  }
}, Ke = (t, o, e) => {
  const { options: n, methods: a } = q(
    t,
    o,
    e
  );
  return { options: f(
    t,
    _e,
    n
  ), methods: a };
}, Lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  interactiveLayerProps: _e,
  setupInteractiveLayer: Ke
}, Symbol.toStringTag, { value: "Module" })), te = {
  ..._e,
  stroke: {
    type: Boolean,
    default: void 0
  },
  color: {
    type: String
  },
  weight: {
    type: Number
  },
  opacity: {
    type: Number
  },
  lineCap: {
    type: String
  },
  lineJoin: {
    type: String
  },
  dashArray: {
    type: String
  },
  dashOffset: {
    type: String
  },
  fill: {
    type: Boolean,
    default: void 0
  },
  fillColor: {
    type: String
  },
  fillOpacity: {
    type: Number
  },
  fillRule: {
    type: String
  },
  className: {
    type: String
  }
}, re = (t, o, e) => {
  const { options: n, methods: a } = Ke(t, o, e), r = f(
    t,
    te,
    n
  ), l = y(ee), s = {
    ...a,
    setStroke(i) {
      o.value.setStyle({ stroke: i });
    },
    setColor(i) {
      o.value.setStyle({ color: i });
    },
    setWeight(i) {
      o.value.setStyle({ weight: i });
    },
    setOpacity(i) {
      o.value.setStyle({ opacity: i });
    },
    setLineCap(i) {
      o.value.setStyle({ lineCap: i });
    },
    setLineJoin(i) {
      o.value.setStyle({ lineJoin: i });
    },
    setDashArray(i) {
      o.value.setStyle({ dashArray: i });
    },
    setDashOffset(i) {
      o.value.setStyle({ dashOffset: i });
    },
    setFill(i) {
      o.value.setStyle({ fill: i });
    },
    setFillColor(i) {
      o.value.setStyle({ fillColor: i });
    },
    setFillOpacity(i) {
      o.value.setStyle({ fillOpacity: i });
    },
    setFillRule(i) {
      o.value.setStyle({ fillRule: i });
    },
    setClassName(i) {
      o.value.setStyle({ className: i });
    }
  };
  return R(() => {
    l({ leafletObject: o.value });
  }), { options: r, methods: s };
}, ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pathProps: te,
  setupPath: re
}, Symbol.toStringTag, { value: "Module" })), se = {
  ...te,
  /**
   * Radius of the marker in pixels.
   */
  radius: {
    type: Number
  },
  latLng: {
    type: [Object, Array],
    required: !0,
    custom: !0
  }
}, je = (t, o, e) => {
  const { options: n, methods: a } = re(
    t,
    o,
    e
  ), r = f(
    t,
    se,
    n
  ), l = {
    ...a,
    setRadius(s) {
      o.value.setRadius(s);
    },
    setLatLng(s) {
      o.value.setLatLng(s);
    }
  };
  return { options: r, methods: l };
}, Ot = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  circleMarkerProps: se,
  setupCircleMarker: je
}, Symbol.toStringTag, { value: "Module" })), Pe = {
  ...se,
  /**
   * Radius of the circle in meters.
   */
  radius: {
    type: Number
  }
}, Qe = (t, o, e) => {
  const { options: n, methods: a } = je(t, o, e), r = f(
    t,
    Pe,
    n
  ), l = {
    ...a
  };
  return { options: r, methods: l };
}, St = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  circleProps: Pe,
  setupCircle: Qe
}, Symbol.toStringTag, { value: "Module" })), Vt = S({
  name: "LCircle",
  props: Pe,
  setup(t, o) {
    const e = c(), n = c(!1), a = O(h), r = y(M), { options: l, methods: s } = Qe(t, e, o);
    return _(async () => {
      const { circle: i } = a ? v.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(i(t.latLng, l));
      const { listeners: u } = T(o.attrs);
      e.value.on(u), L(s, e.value, t), r({
        ...t,
        ...s,
        leafletObject: e.value
      }), n.value = !0, g(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return A(this.ready, this.$slots);
  }
}), xt = S({
  name: "LCircleMarker",
  props: se,
  setup(t, o) {
    const e = c(), n = c(!1), a = O(h), r = y(M), { options: l, methods: s } = je(
      t,
      e,
      o
    );
    return _(async () => {
      const { circleMarker: i } = a ? v.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(
        i(t.latLng, l)
      );
      const { listeners: u } = T(o.attrs);
      e.value.on(u), L(s, e.value, t), r({
        ...t,
        ...s,
        leafletObject: e.value
      }), n.value = !0, g(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return A(this.ready, this.$slots);
  }
}), F = {
  ...W,
  position: {
    type: String
  }
}, K = (t, o) => {
  const { options: e, methods: n } = J(t), a = f(
    t,
    F,
    e
  ), r = {
    ...n,
    setPosition(l) {
      o.value && o.value.setPosition(l);
    }
  };
  return ye(() => {
    o.value && o.value.remove();
  }), { options: a, methods: r };
}, Xe = (t) => t.default ? U("div", { ref: "root" }, t.default()) : null, _t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  controlProps: F,
  renderLControl: Xe,
  setupControl: K
}, Symbol.toStringTag, { value: "Module" })), Rt = S({
  name: "LControl",
  props: {
    ...F,
    disableClickPropagation: {
      type: Boolean,
      custom: !0,
      default: !0
    },
    disableScrollPropagation: {
      type: Boolean,
      custom: !0,
      default: !1
    }
  },
  setup(t, o) {
    const e = c(), n = c(), a = O(h), r = y(H), { options: l, methods: s } = K(t, e);
    return _(async () => {
      const { Control: i, DomEvent: u } = a ? v.L : await import("leaflet/dist/leaflet-src.esm"), d = i.extend({
        onAdd() {
          return n.value;
        }
      });
      e.value = j(new d(l)), L(s, e.value, t), r({ leafletObject: e.value }), t.disableClickPropagation && n.value && u.disableClickPropagation(n.value), t.disableScrollPropagation && n.value && u.disableScrollPropagation(n.value), g(() => o.emit("ready", e.value));
    }), { root: n, leafletObject: e };
  },
  render() {
    return Xe(this.$slots);
  }
}), Ce = {
  ...F,
  prefix: {
    type: String
  }
}, Ye = (t, o) => {
  const { options: e, methods: n } = K(
    t,
    o
  ), a = f(
    t,
    Ce,
    e
  ), r = {
    ...n,
    setPrefix(l) {
      o.value.setPrefix(l);
    }
  };
  return { options: a, methods: r };
}, jt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  controlAttributionProps: Ce,
  setupControlAttribution: Ye
}, Symbol.toStringTag, { value: "Module" })), eo = S({
  name: "LControlAttribution",
  props: Ce,
  setup(t, o) {
    const e = c(), n = O(h), a = y(H), { options: r, methods: l } = Ye(t, e);
    return _(async () => {
      const { control: s } = n ? v.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(
        s.attribution(r)
      ), L(l, e.value, t), a({ leafletObject: e.value }), g(() => o.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
}), Te = {
  ...F,
  collapsed: {
    type: Boolean,
    default: void 0
  },
  autoZIndex: {
    type: Boolean,
    default: void 0
  },
  hideSingleBase: {
    type: Boolean,
    default: void 0
  },
  sortLayers: {
    type: Boolean,
    default: void 0
  },
  sortFunction: {
    type: Function
  }
}, Ve = (t, o) => {
  const { options: e } = K(t, o);
  return { options: f(
    t,
    Te,
    e
  ), methods: {
    addLayer(r) {
      r.layerType === "base" ? o.value.addBaseLayer(r.leafletObject, r.name) : r.layerType === "overlay" && o.value.addOverlay(r.leafletObject, r.name);
    },
    removeLayer(r) {
      o.value.removeLayer(r.leafletObject);
    }
  } };
}, Pt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  controlLayersProps: Te,
  setupControlLayers: Ve
}, Symbol.toStringTag, { value: "Module" })), to = S({
  name: "LControlLayers",
  props: Te,
  setup(t, o) {
    const e = c(), n = O(h), a = y(ve), { options: r, methods: l } = Ve(t, e);
    return _(async () => {
      const { control: s } = n ? v.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(
        s.layers(void 0, void 0, r)
      ), L(l, e.value, t), a({
        ...t,
        ...l,
        leafletObject: e.value
      }), g(() => o.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
}), Me = {
  ...F,
  maxWidth: {
    type: Number
  },
  metric: {
    type: Boolean,
    default: void 0
  },
  imperial: {
    type: Boolean,
    default: void 0
  },
  updateWhenIdle: {
    type: Boolean,
    default: void 0
  }
}, xe = (t, o) => {
  const { options: e, methods: n } = K(
    t,
    o
  );
  return { options: f(
    t,
    Me,
    e
  ), methods: n };
}, Ct = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  controlScaleProps: Me,
  setupControlScale: xe
}, Symbol.toStringTag, { value: "Module" })), oo = S({
  name: "LControlScale",
  props: Me,
  setup(t, o) {
    const e = c(), n = O(h), a = y(H), { options: r, methods: l } = xe(t, e);
    return _(async () => {
      const { control: s } = n ? v.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(s.scale(r)), L(l, e.value, t), a({ leafletObject: e.value }), g(() => o.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
}), Be = {
  ...F,
  zoomInText: {
    type: String
  },
  zoomInTitle: {
    type: String
  },
  zoomOutText: {
    type: String
  },
  zoomOutTitle: {
    type: String
  }
}, Re = (t, o) => {
  const { options: e, methods: n } = K(
    t,
    o
  );
  return { options: f(
    t,
    Be,
    e
  ), methods: n };
}, Tt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  controlZoomProps: Be,
  setupControlZoom: Re
}, Symbol.toStringTag, { value: "Module" })), no = S({
  name: "LControlZoom",
  props: Be,
  setup(t, o) {
    const e = c(), n = O(h), a = y(H), { options: r, methods: l } = Re(t, e);
    return _(async () => {
      const { control: s } = n ? v.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(s.zoom(r)), L(l, e.value, t), a({ leafletObject: e.value }), g(() => o.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
}), oe = {
  ...D
}, ae = (t, o, e) => {
  const { options: n, methods: a } = q(
    t,
    o,
    e
  ), r = f(
    t,
    oe,
    n
  ), l = {
    ...a,
    addLayer(s) {
      o.value.addLayer(s.leafletObject);
    },
    removeLayer(s) {
      o.value.removeLayer(s.leafletObject);
    }
  };
  return G(M, l.addLayer), G(ee, l.removeLayer), { options: r, methods: l };
}, Mt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  layerGroupProps: oe,
  setupLayerGroup: ae
}, Symbol.toStringTag, { value: "Module" })), we = {
  ...oe
}, et = (t, o, e) => {
  const { options: n, methods: a } = ae(
    t,
    o,
    e
  ), r = f(
    t,
    we,
    n
  ), l = {
    ...a
  };
  return { options: r, methods: l };
}, Bt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  featureGroupProps: we,
  setupFeatureGroup: et
}, Symbol.toStringTag, { value: "Module" })), ro = S({
  props: we,
  setup(t, o) {
    const e = c(), n = c(!1), a = O(h), r = y(M), { methods: l, options: s } = et(
      t,
      e,
      o
    );
    return _(async () => {
      const { featureGroup: i } = a ? v.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(
        i(void 0, s)
      );
      const { listeners: u } = T(o.attrs);
      e.value.on(u), L(l, e.value, t), r({
        ...t,
        ...l,
        leafletObject: e.value
      }), n.value = !0, g(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return A(this.ready, this.$slots);
  }
}), Ie = {
  ...oe,
  geojson: {
    type: [Object, Array],
    custom: !0
  },
  optionsStyle: {
    type: Function,
    custom: !0
  }
}, tt = (t, o, e) => {
  const { options: n, methods: a } = ae(
    t,
    o,
    e
  ), r = f(
    t,
    Ie,
    n
  );
  Object.prototype.hasOwnProperty.call(t, "optionsStyle") && (r.style = t.optionsStyle);
  const l = {
    ...a,
    setGeojson(s) {
      o.value.clearLayers(), o.value.addData(s);
    },
    setOptionsStyle(s) {
      o.value.setStyle(s);
    },
    getGeoJSONData() {
      return o.value.toGeoJSON();
    },
    getBounds() {
      return o.value.getBounds();
    }
  };
  return { options: r, methods: l };
}, wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  geoJSONProps: Ie,
  setupGeoJSON: tt
}, Symbol.toStringTag, { value: "Module" })), so = S({
  props: Ie,
  setup(t, o) {
    const e = c(), n = c(!1), a = O(h), r = y(M), { methods: l, options: s } = tt(t, e, o);
    return _(async () => {
      const { geoJSON: i } = a ? v.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(i(t.geojson, s));
      const { listeners: u } = T(o.attrs);
      e.value.on(u), L(l, e.value, t), r({
        ...t,
        ...l,
        leafletObject: e.value
      }), n.value = !0, g(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return A(this.ready, this.$slots);
  }
}), le = {
  ...D,
  opacity: {
    type: Number
  },
  zIndex: {
    type: Number
  },
  tileSize: {
    type: [Number, Array, Object]
  },
  noWrap: {
    type: Boolean,
    default: void 0
  },
  minZoom: {
    type: Number
  },
  maxZoom: {
    type: Number
  },
  className: {
    type: String
  }
}, Ae = (t, o, e) => {
  const { options: n, methods: a } = q(
    t,
    o,
    e
  ), r = f(
    t,
    le,
    n
  ), l = {
    ...a,
    setTileComponent() {
      var s;
      (s = o.value) == null || s.redraw();
    }
  };
  return ye(() => {
    o.value.off();
  }), { options: r, methods: l };
}, ot = (t, o, e, n) => t.extend({
  initialize(a) {
    this.tileComponents = {}, this.on("tileunload", this._unloadTile), e.setOptions(this, a);
  },
  createTile(a) {
    const r = this._tileCoordsToKey(a);
    this.tileComponents[r] = o.create("div");
    const l = U({ setup: n, props: ["coords"] }, { coords: a });
    return vt(l, this.tileComponents[r]), this.tileComponents[r];
  },
  _unloadTile(a) {
    const r = this._tileCoordsToKey(a.coords);
    this.tileComponents[r] && (this.tileComponents[r].innerHTML = "", this.tileComponents[r] = void 0);
  }
}), It = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CreateVueGridLayer: ot,
  gridLayerProps: le,
  setupGridLayer: Ae
}, Symbol.toStringTag, { value: "Module" })), ao = S({
  props: {
    ...le,
    childRender: {
      type: Function,
      required: !0
    }
  },
  setup(t, o) {
    const e = c(), n = c(null), a = c(!1), r = O(h), l = y(M), { options: s, methods: i } = Ae(t, e, o);
    return _(async () => {
      const { GridLayer: u, DomUtil: d, Util: m } = r ? v.L : await import("leaflet/dist/leaflet-src.esm"), w = ot(
        u,
        d,
        m,
        t.childRender
      );
      e.value = j(new w(s));
      const { listeners: b } = T(o.attrs);
      e.value.on(b), L(i, e.value, t), l({
        ...t,
        ...i,
        leafletObject: e.value
      }), a.value = !0, g(() => o.emit("ready", e.value));
    }), { root: n, ready: a, leafletObject: e };
  },
  render() {
    return this.ready ? U("div", { style: { display: "none" }, ref: "root" }) : null;
  }
}), pe = {
  iconUrl: {
    type: String
  },
  iconRetinaUrl: {
    type: String
  },
  iconSize: {
    type: [Object, Array]
  },
  iconAnchor: {
    type: [Object, Array]
  },
  popupAnchor: {
    type: [Object, Array]
  },
  tooltipAnchor: {
    type: [Object, Array]
  },
  shadowUrl: {
    type: String
  },
  shadowRetinaUrl: {
    type: String
  },
  shadowSize: {
    type: [Object, Array]
  },
  shadowAnchor: {
    type: [Object, Array]
  },
  bgPos: {
    type: [Object, Array]
  },
  className: {
    type: String
  }
}, At = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  iconProps: pe
}, Symbol.toStringTag, { value: "Module" })), lo = S({
  name: "LIcon",
  props: {
    ...pe,
    ...W
  },
  setup(t, o) {
    const e = c(), n = O(h), a = y(be), r = y(fe), l = y(ge);
    let s, i, u, d, m;
    const w = (N, P, B) => {
      const I = N && N.innerHTML;
      if (!P) {
        B && m && a() && r(I);
        return;
      }
      const { listeners: E } = T(o.attrs);
      m && i(m, E);
      const { options: ce } = J(t), $ = f(
        t,
        pe,
        ce
      );
      I && ($.html = I), m = $.html ? u($) : d($), s(m, E), l(m);
    }, b = () => {
      g(() => w(e.value, !0, !1));
    }, z = () => {
      g(() => w(e.value, !1, !0));
    }, Z = {
      setIconUrl: b,
      setIconRetinaUrl: b,
      setIconSize: b,
      setIconAnchor: b,
      setPopupAnchor: b,
      setTooltipAnchor: b,
      setShadowUrl: b,
      setShadowRetinaUrl: b,
      setShadowAnchor: b,
      setBgPos: b,
      setClassName: b,
      setHtml: b
    };
    return _(async () => {
      const {
        DomEvent: N,
        divIcon: P,
        icon: B
      } = n ? v.L : await import("leaflet/dist/leaflet-src.esm");
      s = N.on, i = N.off, u = P, d = B, L(Z, {}, t), new MutationObserver(z).observe(e.value, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      }), b();
    }), { root: e };
  },
  render() {
    const t = this.$slots.default ? this.$slots.default() : void 0;
    return U("div", { ref: "root" }, t);
  }
}), Ge = {
  ...D,
  opacity: {
    type: Number
  },
  alt: {
    type: String
  },
  interactive: {
    type: Boolean,
    default: void 0
  },
  crossOrigin: {
    type: Boolean,
    default: void 0
  },
  errorOverlayUrl: {
    type: String
  },
  zIndex: {
    type: Number
  },
  className: {
    type: String
  },
  url: {
    type: String,
    required: !0,
    custom: !0
  },
  bounds: {
    type: [Array, Object],
    required: !0,
    custom: !0
  }
}, nt = (t, o, e) => {
  const { options: n, methods: a } = q(
    t,
    o,
    e
  ), r = f(
    t,
    Ge,
    n
  ), l = {
    ...a,
    /**
     * Sets the opacity of the overlay.
     * @param {number} opacity
     */
    setOpacity(s) {
      return o.value.setOpacity(s);
    },
    /**
     * Changes the URL of the image.
     * @param {string} url
     */
    setUrl(s) {
      return o.value.setUrl(s);
    },
    /**
     * Update the bounds that this ImageOverlay covers
     * @param {LatLngBounds | Array<Array<number>>} bounds
     */
    setBounds(s) {
      return o.value.setBounds(s);
    },
    /**
     * Get the bounds that this ImageOverlay covers
     * @returns {LatLngBounds}
     */
    getBounds() {
      return o.value.getBounds();
    },
    /**
     * Returns the instance of HTMLImageElement used by this overlay.
     * @returns {HTMLElement}
     */
    getElement() {
      return o.value.getElement();
    },
    /**
     * Brings the layer to the top of all overlays.
     */
    bringToFront() {
      return o.value.bringToFront();
    },
    /**
     * Brings the layer to the bottom of all overlays.
     */
    bringToBack() {
      return o.value.bringToBack();
    },
    /**
     * Changes the zIndex of the image overlay.
     * @param {number} zIndex
     */
    setZIndex(s) {
      return o.value.setZIndex(s);
    }
  };
  return { options: r, methods: l };
}, Gt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  imageOverlayProps: Ge,
  setupImageOverlay: nt
}, Symbol.toStringTag, { value: "Module" })), io = S({
  name: "LImageOverlay",
  props: Ge,
  setup(t, o) {
    const e = c(), n = c(!1), a = O(h), r = y(M), { options: l, methods: s } = nt(
      t,
      e,
      o
    );
    return _(async () => {
      const { imageOverlay: i } = a ? v.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(
        i(t.url, t.bounds, l)
      );
      const { listeners: u } = T(o.attrs);
      e.value.on(u), L(s, e.value, t), r({
        ...t,
        ...s,
        leafletObject: e.value
      }), n.value = !0, g(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return A(this.ready, this.$slots);
  }
}), uo = S({
  props: oe,
  setup(t, o) {
    const e = c(), n = c(!1), a = O(h), r = y(M), { methods: l } = ae(t, e, o);
    return _(async () => {
      const { layerGroup: s } = a ? v.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(
        s(void 0, t.options)
      );
      const { listeners: i } = T(o.attrs);
      e.value.on(i), L(l, e.value, t), r({
        ...t,
        ...l,
        leafletObject: e.value
      }), n.value = !0, g(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return A(this.ready, this.$slots);
  }
});
function rt(t, o, e) {
  var n, a, r;
  o === void 0 && (o = 50), e === void 0 && (e = {});
  var l = (n = e.isImmediate) != null && n, s = (a = e.callback) != null && a, i = e.maxWait, u = Date.now(), d = [];
  function m() {
    if (i !== void 0) {
      var b = Date.now() - u;
      if (b + o >= i)
        return i - b;
    }
    return o;
  }
  var w = function() {
    var b = [].slice.call(arguments), z = this;
    return new Promise(function(Z, N) {
      var P = l && r === void 0;
      if (r !== void 0 && clearTimeout(r), r = setTimeout(function() {
        if (r = void 0, u = Date.now(), !l) {
          var I = t.apply(z, b);
          s && s(I), d.forEach(function(E) {
            return (0, E.resolve)(I);
          }), d = [];
        }
      }, m()), P) {
        var B = t.apply(z, b);
        return s && s(B), Z(B);
      }
      d.push({ resolve: Z, reject: N });
    });
  };
  return w.cancel = function(b) {
    r !== void 0 && clearTimeout(r), d.forEach(function(z) {
      return (0, z.reject)(b);
    }), d = [];
  }, w;
}
const We = {
  ...W,
  /**
   * The center of the map, supports .sync modifier
   */
  center: {
    type: [Object, Array]
  },
  /**
   * The bounds of the map, supports .sync modifier
   */
  bounds: {
    type: [Array, Object]
  },
  /**
   * The max bounds of the map
   */
  maxBounds: {
    type: [Array, Object]
  },
  /**
   * The zoom of the map, supports .sync modifier
   */
  zoom: {
    type: Number
  },
  /**
   * The minZoom of the map
   */
  minZoom: {
    type: Number
  },
  /**
   * The maxZoom of the map
   */
  maxZoom: {
    type: Number
  },
  /**
   * The paddingBottomRight of the map
   */
  paddingBottomRight: {
    type: [Object, Array]
  },
  /**
   * The paddingTopLeft of the map
   */
  paddingTopLeft: {
    type: Object
  },
  /**
   * The padding of the map
   */
  padding: {
    type: Object
  },
  /**
   * The worldCopyJump option for the map
   */
  worldCopyJump: {
    type: Boolean,
    default: void 0
  },
  /**
   * The CRS to use for the map. Can be an object that defines a coordinate reference
   * system for projecting geographical points into screen coordinates and back
   * (see https://leafletjs.com/reference-1.7.1.html#crs-l-crs-base), or a string
   * name identifying one of Leaflet's defined CRSs, such as "EPSG4326".
   */
  crs: {
    type: [String, Object]
  },
  maxBoundsViscosity: {
    type: Number
  },
  inertia: {
    type: Boolean,
    default: void 0
  },
  inertiaDeceleration: {
    type: Number
  },
  inertiaMaxSpeed: {
    type: Number
  },
  easeLinearity: {
    type: Number
  },
  zoomAnimation: {
    type: Boolean,
    default: void 0
  },
  zoomAnimationThreshold: {
    type: Number
  },
  fadeAnimation: {
    type: Boolean,
    default: void 0
  },
  markerZoomAnimation: {
    type: Boolean,
    default: void 0
  },
  noBlockingAnimations: {
    type: Boolean,
    default: void 0
  },
  useGlobalLeaflet: {
    type: Boolean,
    default: !0,
    custom: !0
  }
}, co = S({
  inheritAttrs: !1,
  emits: ["ready", "update:zoom", "update:center", "update:bounds"],
  props: We,
  setup(t, o) {
    const e = c(), n = bt({
      ready: !1,
      layersToAdd: [],
      layersInControl: []
    }), { options: a } = J(t), r = f(
      t,
      We,
      a
    ), { listeners: l, attrs: s } = T(o.attrs), i = Y(M), u = Y(ee), d = Y(H), m = Y(
      ve
    );
    G(h, t.useGlobalLeaflet);
    const w = ne(() => {
      const P = {};
      return t.noBlockingAnimations && (P.animate = !1), P;
    }), b = ne(() => {
      const P = w.value;
      return t.padding && (P.padding = t.padding), t.paddingTopLeft && (P.paddingTopLeft = t.paddingTopLeft), t.paddingBottomRight && (P.paddingBottomRight = t.paddingBottomRight), P;
    }), z = {
      moveend: rt((P) => {
        n.leafletRef && (o.emit("update:zoom", n.leafletRef.getZoom()), o.emit("update:center", n.leafletRef.getCenter()), o.emit("update:bounds", n.leafletRef.getBounds()));
      }),
      overlayadd(P) {
        const B = n.layersInControl.find((I) => I.name === P.name);
        B && B.updateVisibleProp(!0);
      },
      overlayremove(P) {
        const B = n.layersInControl.find((I) => I.name === P.name);
        B && B.updateVisibleProp(!1);
      }
    };
    _(async () => {
      t.useGlobalLeaflet && (v.L = v.L || await import("leaflet"));
      const { map: P, CRS: B, Icon: I, latLngBounds: E, latLng: ce, stamp: $ } = t.useGlobalLeaflet ? v.L : await import("leaflet/dist/leaflet-src.esm");
      try {
        r.beforeMapMount && await r.beforeMapMount();
      } catch (p) {
        console.error(
          `The following error occurred running the provided beforeMapMount hook ${p.message}`
        );
      }
      await qe(I);
      const mt = typeof r.crs == "string" ? B[r.crs] : r.crs;
      r.crs = mt || B.EPSG3857;
      const Q = {
        addLayer(p) {
          p.layerType !== void 0 && (n.layerControl === void 0 ? n.layersToAdd.push(p) : n.layersInControl.find(
            (X) => $(X.leafletObject) === $(p.leafletObject)
          ) || (n.layerControl.addLayer(p), n.layersInControl.push(p))), p.visible !== !1 && n.leafletRef.addLayer(p.leafletObject);
        },
        removeLayer(p) {
          p.layerType !== void 0 && (n.layerControl === void 0 ? n.layersToAdd = n.layersToAdd.filter(
            (C) => C.name !== p.name
          ) : (n.layerControl.removeLayer(p.leafletObject), n.layersInControl = n.layersInControl.filter(
            (C) => $(C.leafletObject) !== $(p.leafletObject)
          ))), n.leafletRef.removeLayer(p.leafletObject);
        },
        registerLayerControl(p) {
          n.layerControl = p, n.layersToAdd.forEach((C) => {
            n.layerControl.addLayer(C);
          }), n.layersToAdd = [], d(p);
        },
        registerControl(p) {
          n.leafletRef.addControl(p.leafletObject);
        },
        setZoom(p) {
          const C = n.leafletRef.getZoom();
          p !== C && n.leafletRef.setZoom(p, w.value);
        },
        setCrs(p) {
          const C = n.leafletRef.getBounds();
          n.leafletRef.options.crs = p, n.leafletRef.fitBounds(C, {
            animate: !1,
            padding: [0, 0]
          });
        },
        fitBounds(p) {
          n.leafletRef.fitBounds(p, b.value);
        },
        setBounds(p) {
          if (!p)
            return;
          const C = E(p);
          if (!C.isValid())
            return;
          !(n.lastSetBounds || n.leafletRef.getBounds()).equals(C, 0) && (n.lastSetBounds = C, n.leafletRef.fitBounds(C));
        },
        setCenter(p) {
          if (p == null)
            return;
          const C = ce(p), X = n.lastSetCenter || n.leafletRef.getCenter();
          (X.lat !== C.lat || X.lng !== C.lng) && (n.lastSetCenter = C, n.leafletRef.panTo(C, w.value));
        }
      };
      V(i, Q.addLayer), V(u, Q.removeLayer), V(d, Q.registerControl), V(m, Q.registerLayerControl), n.leafletRef = j(P(e.value, r)), L(Q, n.leafletRef, t), de(n.leafletRef, z), de(n.leafletRef, l), n.ready = !0, g(() => o.emit("ready", n.leafletRef));
    }), R(() => {
      me(z), n.leafletRef && (n.leafletRef.off(), n.leafletRef.remove());
    });
    const Z = ne(() => n.leafletRef), N = ne(() => n.ready);
    return { root: e, ready: N, leafletObject: Z, attrs: s };
  },
  render({ attrs: t }) {
    return t.style || (t.style = {}), t.style.width || (t.style.width = "100%"), t.style.height || (t.style.height = "100%"), U(
      "div",
      {
        ...t,
        ref: "root"
      },
      this.ready && this.$slots.default ? this.$slots.default() : {}
    );
  }
}), zt = ["Symbol(Comment)", "Symbol(Text)"], Nt = ["LTooltip", "LPopup"], ze = {
  ...D,
  draggable: {
    type: Boolean,
    default: void 0
  },
  icon: {
    type: [Object]
  },
  zIndexOffset: {
    type: Number
  },
  latLng: {
    type: [Object, Array],
    custom: !0,
    required: !0
  }
}, st = (t, o, e) => {
  const { options: n, methods: a } = q(
    t,
    o,
    e
  ), r = f(
    t,
    ze,
    n
  ), l = {
    ...a,
    setDraggable(s) {
      o.value.dragging && (s ? o.value.dragging.enable() : o.value.dragging.disable());
    },
    latLngSync(s) {
      e.emit("update:latLng", s.latlng), e.emit("update:lat-lng", s.latlng);
    },
    setLatLng(s) {
      if (s != null && o.value) {
        const i = o.value.getLatLng();
        (!i || !i.equals(s)) && o.value.setLatLng(s);
      }
    }
  };
  return { options: r, methods: l };
}, at = (t, o) => {
  const e = o.slots.default && o.slots.default();
  return e && e.length && e.some($t);
};
function $t(t) {
  return !(zt.includes(t.type.toString()) || Nt.includes(t.type.name));
}
const kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  markerProps: ze,
  setupMarker: st,
  shouldBlankIcon: at
}, Symbol.toStringTag, { value: "Module" })), po = S({
  name: "LMarker",
  props: ze,
  setup(t, o) {
    const e = c(), n = c(!1), a = O(h), r = y(M);
    G(
      be,
      () => {
        var u;
        return !!((u = e.value) != null && u.getElement());
      }
    ), G(fe, (u) => {
      var m, w;
      const d = k((m = e.value) == null ? void 0 : m.getElement) && ((w = e.value) == null ? void 0 : w.getElement());
      d && (d.innerHTML = u);
    }), G(
      ge,
      (u) => {
        var d;
        return ((d = e.value) == null ? void 0 : d.setIcon) && e.value.setIcon(u);
      }
    );
    const { options: l, methods: s } = st(t, e, o), i = {
      moveHandler: rt(s.latLngSync)
    };
    return _(async () => {
      const { marker: u, divIcon: d } = a ? v.L : await import("leaflet/dist/leaflet-src.esm");
      at(l, o) && (l.icon = d({ className: "" })), e.value = j(u(t.latLng, l));
      const { listeners: m } = T(o.attrs);
      e.value.on(m), e.value.on("move", i.moveHandler), L(s, e.value, t), r({
        ...t,
        ...s,
        leafletObject: e.value
      }), n.value = !0, g(() => o.emit("ready", e.value));
    }), R(() => me(i)), { ready: n, leafletObject: e };
  },
  render() {
    return A(this.ready, this.$slots);
  }
}), ie = {
  ...te,
  smoothFactor: {
    type: Number
  },
  noClip: {
    type: Boolean,
    default: void 0
  },
  latLngs: {
    type: Array,
    required: !0,
    custom: !0
  }
}, Ne = (t, o, e) => {
  const { options: n, methods: a } = re(
    t,
    o,
    e
  ), r = f(
    t,
    ie,
    n
  ), l = {
    ...a,
    setSmoothFactor(s) {
      o.value.setStyle({ smoothFactor: s });
    },
    setNoClip(s) {
      o.value.setStyle({ noClip: s });
    },
    addLatLng(s) {
      o.value.addLatLng(s);
    }
  };
  return { options: r, methods: l };
}, Ut = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  polylineProps: ie,
  setupPolyline: Ne
}, Symbol.toStringTag, { value: "Module" })), x = {
  ...ie
}, $e = (t, o, e) => {
  const { options: n, methods: a } = Ne(
    t,
    o,
    e
  ), r = f(
    t,
    x,
    n
  ), l = {
    ...a,
    toGeoJSON(s) {
      return o.value.toGeoJSON(s);
    }
  };
  return { options: r, methods: l };
}, Dt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  polygonProps: x,
  setupPolygon: $e
}, Symbol.toStringTag, { value: "Module" })), yo = S({
  name: "LPolygon",
  props: x,
  setup(t, o) {
    const e = c(), n = c(!1), a = O(h), r = y(M), { options: l, methods: s } = $e(t, e, o);
    return _(async () => {
      const { polygon: i } = a ? v.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(i(t.latLngs, l));
      const { listeners: u } = T(o.attrs);
      e.value.on(u), L(s, e.value, t), r({
        ...t,
        ...s,
        leafletObject: e.value
      }), n.value = !0, g(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return A(this.ready, this.$slots);
  }
}), mo = S({
  name: "LPolyline",
  props: ie,
  setup(t, o) {
    const e = c(), n = c(!1), a = O(h), r = y(M), { options: l, methods: s } = Ne(t, e, o);
    return _(async () => {
      const { polyline: i } = a ? v.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(
        i(t.latLngs, l)
      );
      const { listeners: u } = T(o.attrs);
      e.value.on(u), L(s, e.value, t), r({
        ...t,
        ...s,
        leafletObject: e.value
      }), n.value = !0, g(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return A(this.ready, this.$slots);
  }
}), lt = {
  ...te,
  offset: {
    type: Number
  },
  smoothFactor: {
    type: Number
  },
  noClip: {
    type: Boolean,
    default: void 0
  },
  latLngs: {
    type: Array,
    required: !0,
    custom: !0
  }
}, Ft = (t, o, e) => {
  const { options: n, methods: a } = re(
    t,
    o,
    e
  ), r = f(
    t,
    lt,
    n
  );
  console.log(r);
  const l = {
    ...a,
    setSmoothFactor(s) {
      o.value.setStyle({ smoothFactor: s });
    },
    setNoClip(s) {
      o.value.setStyle({ noClip: s });
    },
    addLatLng(s) {
      o.value.addLatLng(s);
    }
  };
  return { options: r, methods: l };
}, vo = S({
  name: "LMulticolorPolyline",
  props: lt,
  setup(t, o) {
    const e = c(), n = c(!1), a = O(h), r = y(M), { options: l, methods: s } = Ft(t, e, o);
    return _(async () => {
      const { polyline: i } = a ? v.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(
        i(t.latLngs, l)
      );
      const { listeners: u } = T(o.attrs);
      e.value.on(u), L(s, e.value, t), r({
        ...t,
        ...s,
        leafletObject: e.value
      }), n.value = !0, g(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return A(this.ready, this.$slots);
  }
}), ke = {
  ...W,
  content: {
    type: String,
    default: null
  }
}, Ue = (t, o) => {
  const { options: e, methods: n } = J(t), a = {
    ...n,
    setContent(r) {
      o.value && r !== null && r !== void 0 && o.value.setContent(r);
    }
  };
  return { options: e, methods: a };
}, De = (t) => t.default ? U("div", { ref: "root" }, t.default()) : null, Zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  popperProps: ke,
  render: De,
  setupPopper: Ue
}, Symbol.toStringTag, { value: "Module" })), it = {
  ...ke,
  latLng: {
    type: [Object, Array],
    default: () => []
  }
}, ut = (t, o) => {
  const { options: e, methods: n } = Ue(t, o);
  return { options: e, methods: n };
}, Et = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  popupProps: it,
  setupPopup: ut
}, Symbol.toStringTag, { value: "Module" })), bo = S({
  name: "LPopup",
  props: it,
  setup(t, o) {
    const e = c(), n = c(null), a = O(h), r = y(Le), l = y(Oe), { options: s, methods: i } = ut(t, e);
    return _(async () => {
      const { popup: u } = a ? v.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(u(s)), t.latLng !== void 0 && e.value.setLatLng(t.latLng), L(i, e.value, t);
      const { listeners: d } = T(o.attrs);
      e.value.on(d), e.value.setContent(t.content || n.value || ""), r(e.value), g(() => o.emit("ready", e.value));
    }), R(() => {
      l();
    }), { root: n, leafletObject: e };
  },
  render() {
    return De(this.$slots);
  }
}), Fe = {
  ...x,
  latLngs: {
    ...x.latLngs,
    required: !1
  },
  bounds: {
    type: Object,
    custom: !0
  }
}, ct = (t, o, e) => {
  const { options: n, methods: a } = $e(
    t,
    o,
    e
  ), r = f(
    t,
    Fe,
    n
  ), l = {
    ...a,
    setBounds(s) {
      o.value.setBounds(s);
    },
    setLatLngs(s) {
      o.value.setBounds(s);
    }
  };
  return { options: r, methods: l };
}, Ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  rectangleProps: Fe,
  setupRectangle: ct
}, Symbol.toStringTag, { value: "Module" })), fo = S({
  name: "LRectangle",
  props: Fe,
  setup(t, o) {
    const e = c(), n = c(!1), a = O(h), r = y(M), { options: l, methods: s } = ct(t, e, o);
    return _(async () => {
      const { rectangle: i, latLngBounds: u } = a ? v.L : await import("leaflet/dist/leaflet-src.esm"), d = t.bounds ? u(t.bounds) : u(t.latLngs || []);
      e.value = j(i(d, l));
      const { listeners: m } = T(o.attrs);
      e.value.on(m), L(s, e.value, t), r({
        ...t,
        ...s,
        leafletObject: e.value
      }), n.value = !0, g(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return A(this.ready, this.$slots);
  }
}), ue = {
  ...le,
  tms: {
    type: Boolean,
    default: void 0
  },
  subdomains: {
    type: [String, Array],
    validator: (t) => typeof t == "string" ? !0 : Array.isArray(t) ? t.every((o) => typeof o == "string") : !1
  },
  detectRetina: {
    type: Boolean,
    default: void 0
  },
  url: {
    type: String,
    required: !0,
    custom: !0
  }
}, Ze = (t, o, e) => {
  const { options: n, methods: a } = Ae(t, o, e), r = f(
    t,
    ue,
    n
  ), l = {
    ...a
  };
  return { options: r, methods: l };
}, Wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  setupTileLayer: Ze,
  tileLayerProps: ue
}, Symbol.toStringTag, { value: "Module" })), go = S({
  props: ue,
  setup(t, o) {
    const e = c(), n = O(h), a = y(M), { options: r, methods: l } = Ze(t, e, o);
    return _(async () => {
      const { tileLayer: s } = n ? v.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(s(t.url, r));
      const { listeners: i } = T(o.attrs);
      e.value.on(i), L(l, e.value, t), a({
        ...t,
        ...l,
        leafletObject: e.value
      }), g(() => o.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
}), dt = {
  ...ke
}, pt = (t, o) => {
  const { options: e, methods: n } = Ue(t, o), a = y(Se);
  return R(() => {
    a();
  }), { options: e, methods: n };
}, Jt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  setupTooltip: pt,
  tooltipProps: dt
}, Symbol.toStringTag, { value: "Module" })), Lo = S({
  name: "LTooltip",
  props: dt,
  setup(t, o) {
    const e = c(), n = c(null), a = O(h), r = y(he), { options: l, methods: s } = pt(t, e);
    return _(async () => {
      const { tooltip: i } = a ? v.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(i(l)), L(s, e.value, t);
      const { listeners: u } = T(o.attrs);
      e.value.on(u), e.value.setContent(t.content || n.value || ""), r(e.value), g(() => o.emit("ready", e.value));
    }), { root: n, leafletObject: e };
  },
  render() {
    return De(this.$slots);
  }
}), Ee = {
  ...ue,
  layers: {
    type: String,
    required: !0
  },
  styles: {
    type: String
  },
  format: {
    type: String
  },
  transparent: {
    type: Boolean,
    default: void 0
  },
  version: {
    type: String
  },
  crs: {
    type: Object
  },
  uppercase: {
    type: Boolean,
    default: void 0
  }
}, yt = (t, o, e) => {
  const { options: n, methods: a } = Ze(t, o, e);
  return {
    options: f(
      t,
      Ee,
      n
    ),
    methods: {
      ...a
    }
  };
}, qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  setupWMSTileLayer: yt,
  wmsTileLayerProps: Ee
}, Symbol.toStringTag, { value: "Module" })), ho = S({
  props: Ee,
  setup(t, o) {
    const e = c(), n = O(h), a = y(M), { options: r, methods: l } = yt(
      t,
      e,
      o
    );
    return _(async () => {
      const { tileLayer: s } = n ? v.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(
        s.wms(t.url, r)
      );
      const { listeners: i } = T(o.attrs);
      e.value.on(i), L(l, e.value, t), a({
        ...t,
        ...l,
        leafletObject: e.value
      }), g(() => o.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
}), Oo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Circle: St,
  CircleMarker: Ot,
  Component: ft,
  Control: _t,
  ControlAttribution: jt,
  ControlLayers: Pt,
  ControlScale: Ct,
  ControlZoom: Tt,
  FeatureGroup: Bt,
  GeoJSON: wt,
  GridLayer: It,
  Icon: At,
  ImageOverlay: Gt,
  InteractiveLayer: Lt,
  Layer: gt,
  LayerGroup: Mt,
  Marker: kt,
  Path: ht,
  Polygon: Dt,
  Polyline: Ut,
  Popper: Zt,
  Popup: Et,
  Rectangle: Ht,
  TileLayer: Wt,
  Tooltip: Jt,
  WmsTileLayer: qt
}, Symbol.toStringTag, { value: "Module" }));
export {
  Oo as Functions,
  Yt as InjectionKeys,
  Vt as LCircle,
  xt as LCircleMarker,
  Rt as LControl,
  eo as LControlAttribution,
  to as LControlLayers,
  oo as LControlScale,
  no as LControlZoom,
  ro as LFeatureGroup,
  so as LGeoJson,
  ao as LGridLayer,
  lo as LIcon,
  io as LImageOverlay,
  uo as LLayerGroup,
  co as LMap,
  po as LMarker,
  vo as LMulticolorPolyline,
  yo as LPolygon,
  mo as LPolyline,
  bo as LPopup,
  fo as LRectangle,
  go as LTileLayer,
  Lo as LTooltip,
  ho as LWmsTileLayer,
  Xt as Utilities
};
