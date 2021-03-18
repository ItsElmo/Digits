import { Arg, Mutation } from 'type-graphql';
import argon2 from 'argon2';
import { User } from '../entity/User';
export class UserResolver {
	@Mutation(() => Boolean)
	async Register(
		@Arg('email') email: string,
		@Arg('password') password: string
	) {
		const hashedPassword = await argon2.hash(password);

		try {
			await User.insert({
				email,
				password: hashedPassword,
			});
		} catch (err) {
			console.log(err);
			return false;
		}
		return true;
	}
}
