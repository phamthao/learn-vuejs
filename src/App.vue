<script setup>

</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/profile">Profile</a>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#" data-toggle="modal" data-target="#exampleModal">Login</a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="container-fluid">
    <h1 class="bd-title">Quản lý users</h1>
    <hr>
    <button type="button" class="btn btn-primary mb-1 float-right">Thêm</button>
    <table class="table table-bordered">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Username</th>
          <th scope="col">Fullname</th>
          <th scope="col">Email</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>user1</td>
          <td>Họ và tên (user1)</td>
          <td>user1@gmail.com</td>
          <td>
            <div class="btn-group float-right" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-primary">Sửa</button>
              <button type="button" class="btn btn-danger">Xóa</button>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>user1</td>
          <td>Họ và tên (user1)</td>
          <td>user1@gmail.com</td>
          <td>
            <div class="btn-group float-right" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-primary">Sửa</button>
              <button type="button" class="btn btn-danger">Xóa</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-end">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <div class="container">
    <form>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="username">Username</label>
          <input type="text" name="username" class="form-control">
        </div>
        <div class="form-group col-md-6">
          <label for="password">Password</label>
          <input type="password" name="password" class="form-control">
        </div>
        <div class="form-group col-md-6">
          <label for="fullname">Fullname</label>
          <input type="text" name="fullname" class="form-control">
        </div>
        <div class="form-group col-md-6">
          <label for="email">Email</label>
          <input type="text" name="email" class="form-control">
        </div>
      </div>
      <button type="submit" class="btn btn-secondary float-right">Thoát</button>
      <button type="submit" class="btn btn-primary float-right mr-1">Lưu</button>
    </form>
  </div>

  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="alert alert-danger alert-dismissible fade show" role="alert">
            Nội dung thông báo
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form>
            <div class="form-group">
              <label for="username">Username</label>
              <input type="text" name="username" class="form-control">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" name="password" class="form-control">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary">Đăng nhập</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Thoát</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
