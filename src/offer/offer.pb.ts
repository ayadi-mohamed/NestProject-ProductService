/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "offer";

export interface AddRequest {
  idUser: number;
  topic: string;
  description: string;
  availability: boolean;
}

export interface AddResponse {
  status: number;
  error: string[];
  idOffer: number;
}

export interface GetData {
  idOffer: number;
  idUser: number;
  topic: string;
  description: string;
  availability: boolean;
}

export interface GetRequest {
  idOffer: number;
}

export interface GetResponse {
  status: number;
  error: string[];
  data: GetData | undefined;
}

export interface SearchData {
  idOffer: number;
  idUser: number;
  topic: string;
  description: string;
  availability: boolean;
}

export interface SearchRequest {
  idUser: number;
}

export interface SearchResponse {
  status: number;
  error: string[];
  data: SearchData[];
}

export interface ListData {
  idOffer: number;
  idUser: number;
  topic: string;
  description: string;
  availability: boolean;
}

export interface ListRequest {
}

export interface ListResponse {
  status: number;
  error: string[];
  data: ListData[];
}

export interface RemoveRequest {
  idOffer: number;
}

export interface RemoveResponse {
  status: number;
  error: string[];
  idOffer: number;
}

export interface updateData {
  idOffer: number;
  idUser: number;
  topic: string;
  description: string;
  availability: boolean;
}

export interface updateRequest {
  idOffer: number;
  idUser?: number | undefined;
  topic?: string | undefined;
  description?: string | undefined;
  availability?: boolean | undefined;
}

export interface updateResponse {
  status: number;
  error: string[];
  data: updateData | undefined;
}

export const OFFER_PACKAGE_NAME = "offer";

export interface OfferServiceClient {
  add(request: AddRequest): Observable<AddResponse>;

  getById(request: GetRequest): Observable<GetResponse>;

  search(request: SearchRequest): Observable<SearchResponse>;

  list(request: ListRequest): Observable<ListResponse>;

  remove(request: RemoveRequest): Observable<RemoveResponse>;

  update(request: updateRequest): Observable<updateResponse>;
}

export interface OfferServiceController {
  add(request: AddRequest): Promise<AddResponse> | Observable<AddResponse> | AddResponse;

  getById(request: GetRequest): Promise<GetResponse> | Observable<GetResponse> | GetResponse;

  search(request: SearchRequest): Promise<SearchResponse> | Observable<SearchResponse> | SearchResponse;

  list(request: ListRequest): Promise<ListResponse> | Observable<ListResponse> | ListResponse;

  remove(request: RemoveRequest): Promise<RemoveResponse> | Observable<RemoveResponse> | RemoveResponse;

  update(request: updateRequest): Promise<updateResponse> | Observable<updateResponse> | updateResponse;
}

export function OfferServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["add", "getById", "search", "list", "remove", "update"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("OfferService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("OfferService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const OFFER_SERVICE_NAME = "OfferService";
