import { randomUUID } from 'crypto';
import { Column, Entity, PrimaryColumn } from 'typeorm';

export enum ProjectStatus {
  PENDING = 'pending',
  ACTIVE = 'active',
  CANCELLED = 'canceled',
  COMPLETED = 'completed',
}

@Entity({ name: 'projects' })
export class Project {
  @PrimaryColumn({ name: 'uuid' })
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ name: 'started_at', nullable: true, type: 'timestamp' })
  started_at: Date | null;

  @Column({ name: 'cancelled_at', nullable: true, type: 'timestamp' })
  cancelled_at: Date | null;

  @Column({ name: 'finished_at', nullable: true, type: 'timestamp' })
  finished_at: Date | null;

  @Column({ name: 'forecasted_at', nullable: true, type: 'timestamp' })
  forecasted_at: Date | null;

  @Column({
    type: 'simple-enum',
    enum: ProjectStatus,
    default: ProjectStatus.PENDING,
  })
  status!: ProjectStatus;

  constructor(
    props: {
      name: string;
      description: string;
      started_at?: Date | null;
      cancelled_at?: Date | null;
      forecasted_at?: Date | null;
    },
    id?: string,
  ) {
    Object.assign(this, props);
    this.id = id ?? randomUUID();
  }
}
