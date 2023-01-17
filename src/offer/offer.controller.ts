/* eslint-disable prettier/prettier */
import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { addRequestDto, getRequestDto, removeRequestDto, restoreRequestDto, searchRequestDto, softDltRequestDto, updateRequestDto } from './offer.dto';
import { AddResponseOffer, GetResponseOffer, ListResponseOffer, OFFER_SERVICE_NAME, RemoveResponseOffer, RestoreResponseOffer, SearchResponseOffer, SoftDltResponseOffer, UpdateResponseOffer } from './offer.pb';
import { OfferService } from './offer.service';

@Controller()
export class OfferController {
  @Inject(OfferService)
  private readonly service: OfferService;

  @GrpcMethod(OFFER_SERVICE_NAME, 'addOffer')
  private addOffer(payload: addRequestDto): Promise<AddResponseOffer> {
    return this.service.addOffer(payload);
  }

  @GrpcMethod(OFFER_SERVICE_NAME, 'getOfferById')
  private getOfferById(payload: getRequestDto): Promise<GetResponseOffer> {
    return this.service.getOfferById(payload);
  }

  @GrpcMethod(OFFER_SERVICE_NAME, 'searchOfferByEmployer')
  private searchOfferByEmployer(payload: searchRequestDto): Promise<SearchResponseOffer> {
    return this.service.searchOfferByEmployer(payload);
  }

  @GrpcMethod(OFFER_SERVICE_NAME, 'listOffers')
  private listOffers(): Promise<ListResponseOffer> {
    return this.service.listOffers();
  }

  @GrpcMethod(OFFER_SERVICE_NAME, 'removeOffer')
  private removeOffer(payload: removeRequestDto): Promise<RemoveResponseOffer> {
    return this.service.removeOffer(payload);
  }

  @GrpcMethod(OFFER_SERVICE_NAME, 'updateOffer')
  private updateOffer(payload: updateRequestDto): Promise<UpdateResponseOffer> {
    return this.service.updateOffer(payload);
  }

  @GrpcMethod(OFFER_SERVICE_NAME, 'softDeleteOffer')
  private softDeleteOffer(payload: softDltRequestDto): Promise<SoftDltResponseOffer> {
    return this.service.softDeleteOffer(payload);
  }

  @GrpcMethod(OFFER_SERVICE_NAME, 'restoreOffer')
  private restoreOffer(payload: restoreRequestDto): Promise<RestoreResponseOffer> {
    return this.service.restoreOffer(payload);
  }

}
