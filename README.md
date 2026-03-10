# React UI Practice – Tuần 01

## 📌 Giới thiệu

Project này được xây dựng để luyện tập **React cơ bản và CSS cho component**.
Mục tiêu là làm quen với cách tạo **component**, sử dụng **props**, và **style giao diện bằng CSS**.

## 🛠 Công nghệ sử dụng

* React
* Vite
* JavaScript (ES6)
* CSS

---

# 📚 Các bài đã thực hiện

## 1️⃣ Product Card

Tạo component **ProductCard** hiển thị thông tin sản phẩm.

**Chức năng**

* Hiển thị ảnh sản phẩm
* Tên sản phẩm
* Giá sản phẩm
* Nút **Add to cart**
* Hiệu ứng hover khi di chuột

**Kiến thức sử dụng**

* Tách CSS riêng cho component
* `border-radius`
* `box-shadow`
* Hover effect

---

## 2️⃣ Button Component

Tạo component **Button** có style thay đổi theo props.

**Props**

* `type="primary"`
* `type="danger"`
* `type="success"`

**Yêu cầu**

* Mỗi type có màu khác nhau
* Hover đổi màu đậm hơn
* Không viết style trực tiếp trong JSX

**Kiến thức**

* Props
* Class CSS động
* Tái sử dụng component

---

## 3️⃣ Form đăng nhập

Thiết kế giao diện **Login Form**.

**Thành phần**

* Username
* Password
* Nút Login

**Yêu cầu**

* Form căn giữa màn hình
* Input có hiệu ứng khi focus
* Button full width

**Kiến thức**

* Flexbox
* `:focus`
* Spacing và layout

---

## 4️⃣ Alert / Notification

Tạo component **Alert** hiển thị thông báo.

**Loại thông báo**

* success
* warning
* error

**Yêu cầu**

* Màu nền khác nhau theo type
* Có nút đóng (×)
* Hiệu ứng fade in / fade out

**Kiến thức**

* Conditional class
* CSS transition
* State trong React

---

## 5️⃣ Responsive Layout

Tạo trang **Product List** có layout responsive.

**Bố cục**

* Desktop → 3 cột
* Tablet → 2 cột
* Mobile → 1 cột

**Kiến thức**

* CSS Grid / Flexbox
* Media Query
* Responsive Design

---

# 📂 Cấu trúc project

```
src
 ├─ assets
 │   └─ images
 ├─ components
 │   ├─ ProductCard
 │   ├─ Button
 │   ├─ LoginForm
 │   └─ Alert
 ├─ App.jsx
 └─ main.jsx
```

---

# ▶ Cách chạy project

Cài đặt thư viện:

```
npm install
```

Chạy project:

```
npm run dev
```

Mở trình duyệt tại:

```
http://localhost:5174
```

---

# 🎯 Kết quả đạt được

* Hiểu cách tạo **React component**
* Tách **CSS cho từng component**
* Tạo **UI component tái sử dụng**
* Làm quen với **responsive layout**
* Luyện tập **React hooks cơ bản**

---

# 👨‍💻 Thông tin sinh viên

Tên: Thân Hoàng Thiên Thiên
MSSV: 22687721
Môn học: Phát triển giao diện ứng dụng
