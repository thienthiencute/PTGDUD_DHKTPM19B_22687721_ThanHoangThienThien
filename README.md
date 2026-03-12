# Week02 – React Fundamentals & JSX

## 📚 Mục tiêu

Buổi học này giúp làm quen với các kiến thức cơ bản của React:

* Cấu trúc project React
* JSX
* Component
* Props
* State (`useState`)
* Xử lý sự kiện
* Controlled Components
* Style trong React

---

# 📌 Bài tập

## Bài 1 – Student Introduction Page

### Mục tiêu

* Hiểu cách tạo và chia component trong React
* Sử dụng props để truyền dữ liệu

### Component sử dụng

* `Header`
* `Footer`
* `StudentInfo`

### Props hiển thị

* Họ tên
* MSSV
* Lớp

### Kết quả

Trang web hiển thị thông tin sinh viên với layout đơn giản.

---

## Bài 2 – Counter App

### Mục tiêu

* Sử dụng React Hook `useState`
* Xử lý sự kiện trong React

### Chức năng

* Nút **+** tăng số
* Nút **-** giảm số
* Nút **Reset**

### Yêu cầu

* Không cho giá trị nhỏ hơn **0**
* Khi số **> 10** thì hiển thị **màu đỏ**

---

## Bài 3 – Controlled Form

### Mục tiêu

* Quản lý state của input
* Controlled components

### Form nhập thông tin

* Name
* Email

### Chức năng

* Khi người dùng nhập dữ liệu, UI cập nhật ngay bên dưới.

---

## Bài 4 – Status Badge

### Mục tiêu

* Style component trong React
* Dynamic style theo state

### Trạng thái

* `online` → nền **xanh**
* `offline` → nền **xám**
* `busy` → nền **đỏ**

### Chức năng

Có nút bấm để đổi trạng thái.

---

## Bài 5 – Todo List

### Mục tiêu

* Tổng hợp **props + state**

### Component

* `TodoInput`
* `TodoList`
* `TodoItem`

### Luồng dữ liệu

* `todos` state nằm ở **component cha**
* Truyền xuống bằng **props**
* Truyền hàm **add / delete** qua props

### Chức năng

* Thêm công việc
* Hiển thị danh sách công việc
* Xóa công việc

---

# 🛠 Công nghệ sử dụng

* React
* Vite
* JavaScript
* CSS

---

# ▶️ Cách chạy project

Clone repository:

```bash
git clone <repo-url>
```

Cài dependencies:

```bash
npm install
```

Chạy project:

```bash
npm run dev
```

---

# 📂 Cấu trúc thư mục

```
src ├─ components │ ├─ Header.jsx │ ├─ Footer.jsx │ ├─ StudentInfo.jsx │ ├─ Counter.jsx │ ├─ StatusBadge.jsx │ ├─ TodoApp.jsx │ ├─ TodoInput.jsx │ ├─ TodoList.jsx │ └─ TodoItem.jsx ├─ App.jsx └─ main.jsx
```

---

# 👨‍💻 Thông tin sinh viên

**Họ tên:** Thân Hoàng Thiên Thiên
**MSSV:** 22687721
**Môn học:** PTGDUD
**Tuần:** Week 02
****
