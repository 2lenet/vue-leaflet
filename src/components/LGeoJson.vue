<script>
import { onMounted, ref, inject } from "vue";
import { remapEvents, propsBinder } from "../utils.js";
import { props, setup as geoJSONSetup } from "../functions/geoJSON";
import { render } from "../functions/layer";

export default {
  props,
  setup(props, context) {
    const leafletRef = ref({});
    const ready = ref(false);

    const addLayer = inject("addLayer");

    const { methods, options } = geoJSONSetup(props, leafletRef);

    onMounted(async () => {
      const { geoJSON, DomEvent, setOptions } = await import(
        "leaflet/dist/leaflet-src.esm"
      );

      leafletRef.value = geoJSON(props.geojson, options);

      const listeners = remapEvents(context.attrs);
      DomEvent.on(leafletRef.value, listeners);

      propsBinder(methods, leafletRef.value, props, setOptions);
      addLayer({
        ...props,
        ...methods,
        leafletObject: leafletRef.value,
      });
      ready.value = true;
    });
    return render(ready, context);
  },
};
</script>