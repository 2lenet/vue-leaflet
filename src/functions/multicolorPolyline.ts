import type L from "leaflet";
import type { PropType } from "vue";

import { propsToLeafletOptions } from "@src/utils";

import { pathProps, setupPath } from "./path";

export const multicolorPolylineProps = {
  ...pathProps,
  offset: {
    type: Number,
  },
  smoothFactor: {
    type: Number,
  },
  noClip: {
    type: Boolean,
    default: undefined,
  },
  latLngs: {
    type: Array as PropType<L.LatLngExpression[]>,
    required: true,
    custom: true,
  },
} as const;

export const setupMulticolorPolyline = (props, leafletRef, context) => {
  const { options: pathOptions, methods: pathMethods } = setupPath(
    props,
    leafletRef,
    context
  );

  const options = propsToLeafletOptions<L.PolylineOptions>(
    props,
    multicolorPolylineProps,
    pathOptions
  );
  console.log(options)
  const methods = {
    ...pathMethods,
    setSmoothFactor(smoothFactor) {
      leafletRef.value.setStyle({ smoothFactor });
    },
    setNoClip(noClip) {
      leafletRef.value.setStyle({ noClip });
    },
    addLatLng(latLng) {
      leafletRef.value.addLatLng(latLng);
    },
  };

  return { options, methods };
};
