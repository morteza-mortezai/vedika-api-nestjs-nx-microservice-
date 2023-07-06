import { Injectable, Inject } from '@nestjs/common';
import { GenericRepository } from '@libs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entity/user.entity';

@Injectable()
export class UserDataSource {

    constructor(
        @Inject('userRepository') private readonly userRepository: GenericRepository<User>
    ) { }

    insert(createUserDto: CreateUserDto): Promise<User> {
        const newUser = this.userRepository.create(createUserDto as User)
        return this.userRepository.save(newUser)
        // return null as any
    }

    findByEmail(email: string): Promise<CreateUserDto | null> {
        // return this.userRepository.findOneBy({ email })
        return null as any
    }

}
