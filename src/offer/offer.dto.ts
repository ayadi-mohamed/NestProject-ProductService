/* eslint-disable prettier/prettier */
import { IsNotEmpty, 
  IsNumber, 
  IsOptional, 
  IsString } 
  from '@nestjs/class-validator';
import { AddRequest,  GetRequest, RemoveRequest, SearchRequest, updateRequest } from './offer.pb';

export class GetRequestDto implements GetRequest {
  @IsNumber({ allowInfinity: false, allowNaN: false })
  public readonly idOffer: number;
}

export class AddRequestDto implements  AddRequest {

  @IsNumber({ allowInfinity: false, allowNaN: false })
  public readonly idUser: number;

  @IsString()
  @IsNotEmpty()
  public readonly topic: string;

  @IsString()
  @IsNotEmpty()
  public readonly description: string;

  public readonly  availability: boolean;

}

export class searchRequestDto implements SearchRequest {
  @IsNumber({ allowInfinity: false, allowNaN: false })
  public readonly idUser: number;
}

export class removeRequestDto implements RemoveRequest {
  @IsNumber({ allowInfinity: false, allowNaN: false })
  public readonly idOffer: number;
}

export class updateRequestDto implements updateRequest {
  @IsNumber({ allowInfinity: false, allowNaN: false })
  public readonly idOffer: number;

  @IsOptional()
  @IsNumber({ allowInfinity: false, allowNaN: false })
  public readonly idUser: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public readonly topic: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public readonly description: string;

  @IsOptional()
  public readonly  availability: boolean;

}



