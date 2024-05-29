import UserDTO from 'src/modules/user/user.dto'

/**
 * Service là nơi chứa các logic xử lý, các hàm xử lý dữ liệu, các hàm gọi API, các hàm tính toán, ...
 * Service không trực tiếp trả về response cho client mà nó sẽ trả về dữ liệu cho controller và controller sẽ trả về response cho client
 *
 */

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
