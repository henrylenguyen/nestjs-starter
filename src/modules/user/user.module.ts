import { Module } from '@nestjs/common'
import userController from 'src/modules/user/user.controller'
import UserService from 'src/modules/user/user.service'

/**
 * Providers là một thùng chứa (container) cho các service, factory, helper, ... trong NestJS
 * Providers được sử dụng để chia sẻ logic và dữ liệu giữa các module, controller, service,... để tránh việc module này phụ thuộc vào module khác dẫn đến việc khó kiểm soát và bảo trì
 *useClass là một property của provide được sử dụng để chỉ định một class sẽ được sử dụng để tạo một instance của provider, nó linh hoạt trong việc chuyển đổi và sử dụng các class khác nhau
 */
@Module({
  controllers: [userController],
  providers: [
    {
      provide: 'USER_SERVICE',
      useClass: UserService
    }
  ]
})
export default class UserModule {}
