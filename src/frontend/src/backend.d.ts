import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface CustomizationRequest {
    designIdentifier?: string;
    timestamp: Time;
    details: string;
}
export type Time = bigint;
export interface backendInterface {
    getAllRequestsByTimestamp(): Promise<Array<CustomizationRequest>>;
    getRequest(id: string): Promise<CustomizationRequest>;
    submitRequest(id: string, designIdentifier: string | null, details: string): Promise<void>;
}
