/* eslint-disable prettier/prettier */
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Offer extends BaseEntity {
  @PrimaryGeneratedColumn()
  public idOffer!: number;

  @Column({ type: 'number' })
  public idUser!: number;

  @Column({ type: 'varchar' })
  public topic!: string;

  @Column({ type: 'varchar' })
  public description!: string;

  @Column({ type: 'boolean' })
  public availability!: boolean;
  

}
