import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "short_urls" })
export class ShortUrlEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 2048 })
  url: string;

  @Column({ type: "varchar", length: 8, unique: true })
  shortCode: string;

  @Column({ type: "int", default: 0 })
  accessCount: number

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;
}
