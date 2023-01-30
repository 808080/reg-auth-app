import {
	Model,
	Table,
	Column,
	Length,
	IsEmail,
	Is,
} from 'sequelize-typescript';

@Table
export default class User extends Model {
	@Length({ min: 5 })
	@Column
	name!: string;

	@IsEmail
	@Column
	email!: string;

	@Length({ min: 8 })
	@Is('Password', (value) => {
		if (!/^(?=.*[0-9])(?=.*[a-zA-Z])(?=\S+$).{8,}$/.test(value)) {
			throw new Error('Password must contain atleast one character and one digit');
		}
	})
	@Column
	password!: string;
}