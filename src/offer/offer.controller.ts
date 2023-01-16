/* eslint-disable prettier/prettier */
import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AddRequestDto, GetRequestDto, removeRequestDto, searchRequestDto, updateRequestDto } from './offer.dto';
import { AddResponse, GetResponse, ListResponse, OFFER_SERVICE_NAME, RemoveResponse, SearchResponse, updateResponse } from './offer.pb';
import { OfferService } from './offer.service';

@Controller()
export class OfferController {
  @Inject(OfferService)
  private readonly service: OfferService;

  @GrpcMethod(OFFER_SERVICE_NAME, 'add')
  private add(payload: AddRequestDto): Promise<AddResponse> {
    return this.service.add(payload);
  }

  @GrpcMethod(OFFER_SERVICE_NAME, 'getById')
  private getById(payload: GetRequestDto): Promise<GetResponse> {
    return this.service.getById(payload);
  }

  @GrpcMethod(OFFER_SERVICE_NAME, 'search')
  private search(payload: searchRequestDto): Promise<SearchResponse> {
    return this.service.search(payload);
  }

  @GrpcMethod(OFFER_SERVICE_NAME, 'list')
  private list(): Promise<ListResponse> {
    return this.service.list();
  }

  @GrpcMethod(OFFER_SERVICE_NAME, 'remove')
  private remove(payload: removeRequestDto): Promise<RemoveResponse> {
    return this.service.remove(payload);
  }

  @GrpcMethod(OFFER_SERVICE_NAME, 'update')
  private update(payload: updateRequestDto): Promise<updateResponse> {
    return this.service.update(payload);
  }

}
