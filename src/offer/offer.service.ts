/* eslint-disable prettier/prettier */
import { HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Offer } from './entity/offer.entity';
import { addRequestDto, getRequestDto, removeRequestDto, restoreRequestDto, searchRequestDto, softDltRequestDto, updateRequestDto } from './offer.dto';
import { AddResponseOffer, GetResponseOffer, ListResponseOffer, RemoveResponseOffer, RestoreResponseOffer, SearchResponseOffer, SoftDltResponseOffer, UpdateResponseOffer } from './offer.pb';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OfferService {
  @InjectRepository(Offer)
  private readonly repository: Repository<Offer>;

  public async getOfferById({ idOffer }: getRequestDto): Promise<GetResponseOffer> {
    const offer: Offer = await this.repository.findOne({ where: { idOffer } });

    if (!offer) {
      return { data: null, error: ['Offer not found'], status: HttpStatus.NOT_FOUND };
    }

    return { data: offer, error: null, status: HttpStatus.OK };
  }

  public async addOffer(payload: addRequestDto): Promise<AddResponseOffer> {
    const offer: Offer = new Offer();

    offer.idUser = payload.idUser;
    offer.topic = payload.topic;
    offer.description = payload.description;
    offer.availability = payload.availability;

    await this.repository.save(offer);

    return { idOffer: offer.idOffer, error: null, status: HttpStatus.OK };
  }

  public async searchOfferByEmployer({ idUser }: searchRequestDto): Promise<SearchResponseOffer> {
    const offers: Offer[] = await this.repository.find({ where: { idUser } });

    if (!offers) {
      return { data: null, error: ['Offers not found'], status: HttpStatus.NOT_FOUND };
    }

    return { data: offers, error: null, status: HttpStatus.OK };
  }

  public async listOffers(): Promise<ListResponseOffer> {
    const offers: Offer[] = await this.repository.find();

    return { data: offers, error: null, status: HttpStatus.OK };
  }

  public async removeOffer({ idOffer }: removeRequestDto): Promise<RemoveResponseOffer> {
    await this.repository.delete(idOffer);

    return { idOffer: idOffer, error: null, status: HttpStatus.OK };
  }

  public async updateOffer(payload: updateRequestDto): Promise<UpdateResponseOffer> {
    const idOffer = payload.idOffer;
 
    const offer = await this.repository.preload({
      idOffer,
      ...payload
    });

    if(! offer) {
      return { data: null, error: ['Offer not found'], status: HttpStatus.NOT_FOUND };
    }
    await this.repository.save(offer);
    return { data: offer, error: null, status: HttpStatus.OK };
  }

  public async softDeleteOffer({ idOffer }: softDltRequestDto): Promise<SoftDltResponseOffer> {
    const offer: Offer = await this.repository.findOne({ where: { idOffer } });

    if (!offer) {
      return { idOffer: null, error: ['Offer not found'], status: HttpStatus.NOT_FOUND };
    }

    this.repository.softDelete(idOffer);
    return { idOffer: idOffer, error: null, status: HttpStatus.OK };
  }
  public async restoreOffer({ idOffer }: restoreRequestDto): Promise<RestoreResponseOffer> {
   
    await this.repository.restore(idOffer);
    const offer = await this.repository.findOne({ where: { idOffer } });
    return { data: offer, error: null, status: HttpStatus.OK };
  }
}

