/* eslint-disable prettier/prettier */
import { HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Offer } from './entity/offer.entity';
import { AddRequestDto, GetRequestDto, removeRequestDto, searchRequestDto, updateRequestDto } from './offer.dto';
import { AddResponse, GetResponse, ListResponse, RemoveResponse, SearchResponse, updateResponse } from './offer.pb';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OfferService {
  @InjectRepository(Offer)
  private readonly repository: Repository<Offer>;

  public async getById({ idOffer }: GetRequestDto): Promise<GetResponse> {
    const offer: Offer = await this.repository.findOne({ where: { idOffer } });

    if (!offer) {
      return { data: null, error: ['Offer not found'], status: HttpStatus.NOT_FOUND };
    }

    return { data: offer, error: null, status: HttpStatus.OK };
  }

  public async add(payload: AddRequestDto): Promise<AddResponse> {
    const offer: Offer = new Offer();

    offer.idUser = payload.idUser;
    offer.topic = payload.topic;
    offer.description = payload.description;
    offer.availability = payload.availability;

    await this.repository.save(offer);

    return { idOffer: offer.idOffer, error: null, status: HttpStatus.OK };
  }

  public async search({ idUser }: searchRequestDto): Promise<SearchResponse> {
    const offers: Offer[] = await this.repository.find({ where: { idUser } });

    if (!offers) {
      return { data: null, error: ['Offers not found'], status: HttpStatus.NOT_FOUND };
    }

    return { data: offers, error: null, status: HttpStatus.OK };
  }

  public async list(): Promise<ListResponse> {
    const offers: Offer[] = await this.repository.find();

    return { data: offers, error: null, status: HttpStatus.OK };
  }

  public async remove({ idOffer }: removeRequestDto): Promise<RemoveResponse> {
    await this.repository.delete(idOffer);

    return { idOffer: idOffer, error: null, status: HttpStatus.OK };
  }

  public async update(payload: updateRequestDto): Promise<updateResponse> {
    const idOffer = payload.idOffer;
    const offer = await this.repository.preload({
      idOffer,
      ...payload
    });

    if(! offer) {
      return { data: null, error: ['Offer not found'], status: HttpStatus.NOT_FOUND };
    }

    return { data: offer, error: null, status: HttpStatus.OK };
  }

}
