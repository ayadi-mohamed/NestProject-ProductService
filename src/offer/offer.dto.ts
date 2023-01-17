/* eslint-disable prettier/prettier */
import { IsNotEmpty, 
  IsNumber, 
  IsOptional, 
  IsString } 
  from 'class-validator';
import { AddRequestOffer,  GetRequestOffer, RemoveRequestOffer, RestoreRequestOffer, SearchRequestOffer, SoftDltRequestOffer, UpdateRequestOffer } from './offer.pb';

export class getRequestDto implements GetRequestOffer {
  @IsNumber({ allowInfinity: false, allowNaN: false })
  public readonly idOffer: number;
}

export class addRequestDto implements  AddRequestOffer {

  @IsNumber({ allowInfinity: false, allowNaN: false })
  public readonly idUser: number;

  @IsString()
  @IsNotEmpty()
  public readonly topic: string;

  @IsString()
  @IsNotEmpty()
  public readonly description: string;

  @IsNotEmpty()
  public readonly  availability: boolean;

}

export class searchRequestDto implements SearchRequestOffer {
  @IsNumber({ allowInfinity: false, allowNaN: false })
  public readonly idUser: number;
}

export class removeRequestDto implements RemoveRequestOffer {
  @IsNumber({ allowInfinity: false, allowNaN: false })
  public readonly idOffer: number;
}

export class updateRequestDto implements UpdateRequestOffer {
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

export class softDltRequestDto implements SoftDltRequestOffer {
  @IsNumber({ allowInfinity: false, allowNaN: false })
  public readonly idOffer: number;
}

export class restoreRequestDto implements RestoreRequestOffer {
  @IsNumber({ allowInfinity: false, allowNaN: false })
  public readonly idOffer: number;
}


