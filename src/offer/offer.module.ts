/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { OfferController } from './offer.controller';
import { OfferService } from './offer.service';
import { Offer } from './entity/offer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Offer])],
  controllers: [OfferController],
  providers: [OfferService],
})
export class OfferModule {}
