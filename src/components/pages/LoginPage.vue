<template>
    <h1 class="bd-title text-center">Đăng nhập</h1>
    <div class="card">
        <div class="card-body">
            <Alert isShow="true" message="Nội dung thông báo" />
            <form>
                <FormInputGroup label="Username" name="username" />
                <FormInputGroup label="Password" name="password" />
            </form>
            <div class="text-center">
                <Button class="btn-primary">Đăng nhập</Button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    width: 25rem;
    margin: 0 auto;
}
</style>