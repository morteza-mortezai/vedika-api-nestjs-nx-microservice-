import { Module } from '@nestjs/common';
import { UserDataSource } from './user.data-source';
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from '../entity/user.entity';
import { GenericRepository, TypeormModule } from '@libs/common';
import { Repository, EntityManager } from 'typeorm'


@Module({
    imports: [
        TypeormModule,
        TypeOrmModule.forFeature([User])
    ],
    controllers: [],
    providers: [UserDataSource,
        {
            provide: 'userRepository',
            useFactory: (manager: EntityManager) => (new GenericRepository(new Repository(User, manager))),
            inject: [EntityManager]
        },
    ],
    exports: [UserDataSource]
})
export class DataSourceModule { }
