/**
 * Reponsitory là nơi chứa các hàm thao tác với database như tạo, sửa, xóa, lấy dữ liệu, ...
 * Reponsitory không trực tiếp trả về response cho client mà nó sẽ trả về dữ liệu cho service và service sẽ trả về response cho controller
 * Reponsitory không trực tiếp gọi API, xử lý dữ liệu, tính toán, ... mà nó sẽ gọi các hàm từ ORM (Object Relational Mapping) như TypeORM, Sequelize, ...
 *
 */

import UserDTO from 'src/modules/user/user.dto'

class UserReponsitory {
  async create(user: UserDTO) {
    // save user to database
  }
}
export default UserReponsitory
