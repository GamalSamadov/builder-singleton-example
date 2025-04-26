class UserSchema {
	constructor(
		public id: string,
		public name: string,
		public email: string,
		public password: string,
		public username: string,
		public createdAt: Date,
		public updatedAt: Date
	) {}
}

export class UserModel {
	/* 
		Builder pattern for UserModel
	*/
	constructor(
		public id: string,
		public name: string,
		public email: string,
		public password: string,
		public username: string,
		public createdAt: Date,
		public updatedAt: Date
	) {}

	setId(id: string): this {
		this.id = id
		return this
	}

	setName(name: string): this {
		this.name = name
		return this
	}

	setEmail(email: string): this {
		this.email = email
		return this
	}

	setPassword(password: string): this {
		this.password = password
		return this
	}

	setUsername(username: string): this {
		this.username = username
		return this
	}

	setCreatedAt(createdAt: Date): this {
		this.createdAt = createdAt
		return this
	}

	setUpdatedAt(updatedAt: Date): this {
		this.updatedAt = updatedAt
		return this
	}

	build(): UserSchema {
		return new UserSchema(
			this.id,
			this.name,
			this.email,
			this.password,
			this.username,
			this.createdAt,
			this.updatedAt
		)
	}
}
