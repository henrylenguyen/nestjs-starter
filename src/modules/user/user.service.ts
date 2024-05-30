import { Injectable } from '@nestjs/common'
import UserDTO from 'src/modules/user/user.dto'

/**
 * Service là nơi chứa các logic xử lý, các hàm xử lý dữ liệu, các hàm gọi API, các hàm tính toán, ...
 * Service không trực tiếp trả về response cho client mà nó sẽ trả về dữ liệu cho controller và controller sẽ trả về response cho client
 * injectable là một decorator được sử dụng để đánh dấu một class là một provider
 * Provider là một class được sử dụng để cung cấp các dependency cho các controller, service, module khác
 */
@Injectable()
class UserService {
  createUser(user: UserDTO) {
    console.log('user:', user)
    user.id = 1
    user.createdAt = new Date()
    user.updatedAt = new Date()
    return UserDTO.plainToClass(user)
  }
}

export default UserService
