import type L from "leaflet";
import type { InjectionKey } from "vue";
import type { IControlDefinition, ILayerDefinition } from "./interfaces";
export declare const UseGlobalLeafletInjection: InjectionKey<boolean>;
export declare const AddLayerInjection: InjectionKey<(layer: ILayerDefinition) => void>;
export declare const RemoveLayerInjection: InjectionKey<(layer: ILayerDefinition) => void>;
export declare const RegisterControlInjection: InjectionKey<(control: IControlDefinition) => void>;
export declare const RegisterLayerControlInjection: InjectionKey<(control: IControlDefinition<L.Control.Layers>) => void>;
export declare const CanSetParentHtmlInjection: InjectionKey<() => boolean>;
export declare const SetParentHtmlInjection: InjectionKey<(html: string) => void>;
export declare const SetIconInjection: InjectionKey<(newIcon: L.DivIcon | L.Icon | undefined) => L.Marker<any> | undefined>;
export declare const BindPopupInjection: InjectionKey<(leafletObject: L.Layer | undefined) => void>;
export declare const BindTooltipInjection: InjectionKey<(leafletObject: L.Layer | undefined) => void>;
export declare const UnbindPopupInjection: InjectionKey<() => void>;
export declare const UnbindTooltipInjection: InjectionKey<() => void>;
