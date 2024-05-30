import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

/**
 * Entity decorator là một decorator được sử dụng để đánh dấu một class là entity.
 * Entity là một class dùng để tương tác với database thông qua ORM (Object Relational Mapping) như TypeORM, Sequelize, ...
 * Entity sẽ tương ứng với một bảng trong database
 * Entity sẽ chứa các property (ánh xạ với các cột trong bảng)
 */
@Entity({
  name: 'users' // Tên bảng trong database
})
export default class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string
  @Column({
    unique: true, // Email là duy nhất
    length: 100 // Độ dài tối đa của email
  })
  email: string
  @Column()
  password: string
  @Column()
  name: string
  @Column({
    default: true
  })
  status: boolean
  @Column({
    type: 'enum',
    enum: ['user', 'admin'],
    default: 'user'
  })
  role: string
}
