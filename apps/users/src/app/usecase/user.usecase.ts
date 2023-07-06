import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserDataSource } from '../data-source/user.data-source';
import { User } from '../entity/user.entity';

@Injectable()
export class UserUseCase {
  constructor(
    private readonly userDataSource: UserDataSource
  ) { }

  createUser(createUserdata: CreateUserDto): Promise<User> {
    return this.userDataSource.insert(createUserdata)
  }

}
