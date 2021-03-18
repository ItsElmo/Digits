import { Field, Int, ObjectType } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@ObjectType()
@Entity('users')
export class User {

	@Field(() => Int)
	@PrimaryGeneratedColumn()
	id: number;
	@Field()
	@Column('text')
	email: string;
	@Column('text')
	password: string;
}
