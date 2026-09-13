# React Compound Components — Kiến thức đã học

> **Mục tiêu:** Hiểu lý thuyết và tự xây dựng Compound Components bằng React + TypeScript + Tailwind CSS.

---

## 1. Compound Components là gì?

**Compound Components** là một pattern thiết kế component trong React.

Trong pattern này:

- Một **component cha** quản lý logic/state chung.
- Các **component con** đảm nhiệm từng phần giao diện.
- Các component con **phối hợp với nhau** để tạo thành một component hoàn chỉnh.
- Thường sử dụng **Context** để chia sẻ state giữa các component con.

Có thể nhớ ngắn gọn:

> **Cha quản lý logic → con đảm nhiệm UI → các con phối hợp với nhau.**

---

## 2. Ví dụ Accordion

Một Accordion có thể được thiết kế như sau:

```tsx
<Acordion>
  <Acordion.Item index={0}>
    <Acordion.Header>
      React là gì?
    </Acordion.Header>

    <Acordion.Content>
      React là thư viện JavaScript để xây dựng UI.
    </Acordion.Content>
  </Acordion.Item>
</Acordion>
```

Cấu trúc:

```text
Acordion
│
├── Item
│   ├── Header
│   └── Content
│
├── Item
│   ├── Header
│   └── Content
│
└── Item
    ├── Header
    └── Content
```

---

# 3. Những phần đã thực hành

## 3.1. Component cha

Tạo component `Acordion`:

```tsx
type AcordionChildren = {
  children: React.ReactNode;
};

const Acordion = ({ children }: AcordionChildren) => {
  return (
    <div>
      {children}
    </div>
  );
};
```

Component cha nhận `children` để chứa các component con.

---

## 3.2. Component Item

```tsx
type ItemProp = {
  index: number;
  children: React.ReactNode;
};

function Item({ index, children }: ItemProp) {
  return (
    <div>
      Item {index}
      {children}
    </div>
  );
}
```

`index` dùng để xác định Item.

Ví dụ:

```tsx
<Acordion.Item index={0}>
```

thì Item có index bằng `0`.

---

## 3.3. Component Header

```tsx
function Header({ children }: AcordionChildren) {
  return (
    <button>
      {children}
    </button>
  );
}
```

`Header` là phần người dùng click.

---

## 3.4. Component Content

```tsx
function Content({ children }: AcordionChildren) {
  return (
    <div>
      {children}
    </div>
  );
}
```

`Content` chứa nội dung của Item.

---

# 4. React.ReactNode

Khi component nhận `children`, nên dùng:

```tsx
children: React.ReactNode;
```

Thay vì:

```tsx
children: string;
```

Vì `ReactNode` cho phép truyền nhiều loại nội dung React.

Ví dụ:

```tsx
<Acordion.Header>
  React là gì?
</Acordion.Header>
```

Hoặc:

```tsx
<Acordion.Header>
  <span>React là gì?</span>
</Acordion.Header>
```

Hoặc:

```tsx
<Acordion.Header>
  <strong>React</strong> là gì?
</Acordion.Header>
```

---

# 5. Gắn component con vào component cha

Đã thực hành:

```tsx
Acordion.Item = Item;
Acordion.Header = Header;
Acordion.Content = Content;
```

Nhờ đó có thể sử dụng:

```tsx
<Acordion>
  <Acordion.Item index={0}>
    <Acordion.Header>
      React là gì?
    </Acordion.Header>

    <Acordion.Content>
      React là thư viện JavaScript.
    </Acordion.Content>
  </Acordion.Item>
</Acordion>
```

Đây là cách tạo API sử dụng rất đặc trưng của Compound Components.

---

# 6. Component API là gì?

Cần phân biệt **API** trong các ngữ cảnh khác nhau.

## Backend/Web API

Đây là loại API thường gặp khi làm Frontend:

```text
React
  ↓
GET /api/patients
  ↓
Backend
  ↓
Database
```

Ví dụ:

```http
GET https://example.com/api/patients
```

Đây là **Web API / REST API**.

---

## Component API

Component API không nhất thiết là URL Backend.

Nó có thể hiểu là:

> **Cách developer sử dụng một component.**

Ví dụ API sử dụng của `Acordion`:

```tsx
<Acordion>
  <Acordion.Item>
    <Acordion.Header />
    <Acordion.Content />
  </Acordion.Item>
</Acordion>
```

Ở đây:

```text
Acordion
Acordion.Item
Acordion.Header
Acordion.Content
```

là những phần mà component cung cấp để developer sử dụng.

---

# 7. useState trong Compound Components

Component cha thường quản lý state chung.

Ví dụ Accordion:

```tsx
const [activeItem, setActiveItem] = useState<number | null>(null);
```

Ý nghĩa:

```text
null → chưa có Item nào mở

0 → Item 0 đang mở

1 → Item 1 đang mở

2 → Item 2 đang mở
```

Tư tưởng:

```text
Acordion
   │
   └── quản lý activeItem
```

Trong khi:

```text
Header
   │
   └── người dùng click
```

Sau khi click, Header cần có cách tác động đến state của Acordion.

---

# 8. Vấn đề hiện tại

Hiện tại chúng ta mới xây được **cấu trúc**.

Các component đã tồn tại:

```text
Acordion
Item
Header
Content
```

Nhưng chúng chưa thực sự phối hợp state với nhau.

Ví dụ hiện tại:

```text
Click Header
      ↓
chưa thay đổi activeItem
      ↓
Content vẫn hiển thị
```

---

# 9. Context — phần tiếp theo sẽ học

Vấn đề:

```text
Acordion
   │
   └── Item
        │
        ├── Header
        │
        └── Content
```

`activeItem` nằm ở `Acordion`, nhưng `Header` và `Content` nằm sâu bên trong.

Nếu truyền props qua từng component:

```text
Acordion
   ↓ props
Item
   ↓ props
Header
```

sẽ dẫn đến **prop drilling**.

Vì vậy Compound Components thường kết hợp với:

```tsx
createContext()
useContext()
```

Context giúp các component con sử dụng state/logic chung của `Acordion` mà không cần truyền props qua từng tầng.

---

# 10. Trạng thái bài học hiện tại

```text
Compound Components
        │
        ├── Khái niệm                    ✅
        │
        ├── Parent / Children             ✅
        │
        ├── children                      ✅
        │
        ├── React.ReactNode               ✅
        │
        ├── Item / Header / Content       ✅
        │
        ├── Gắn component con vào Acordion ✅
        │
        ├── Tailwind CSS                  ✅
        │
        ├── useState                      🟡 Đã bắt đầu
        │
        ├── Context                       ⏳ Chưa học
        │
        ├── useContext                    ⏳ Chưa học
        │
        └── Header → State → Content      ⏳ Chưa hoàn thành
```

---

# 11. Những điều cần nhớ

### Công thức Compound Components

```text
Parent
  ↓
Quản lý state / logic
  ↓
Children
  ↓
Đảm nhiệm từng phần UI
  ↓
Context
  ↓
Chia sẻ state / logic
```

### Một câu để nhớ

> **Compound Components là cách thiết kế một nhóm component có quan hệ với nhau, trong đó component cha quản lý logic chung và các component con phối hợp để tạo thành một UI hoàn chỉnh.**

---

# 12. Ví dụ các UI thường dùng Compound Components

Pattern này thường phù hợp với:

- Accordion
- Tabs
- Modal
- Dropdown
- Select
- Menu
- Form
- Carousel

Ví dụ:

```tsx
<Tabs>
  <Tabs.List>
    <Tabs.Tab />
    <Tabs.Tab />
  </Tabs.List>

  <Tabs.Panel />
  <Tabs.Panel />
</Tabs>
```

Hoặc:

```tsx
<Modal>
  <Modal.Trigger />
  <Modal.Content>
    <Modal.Header />
    <Modal.Body />
    <Modal.Footer />
  </Modal.Content>
</Modal>
```

---

## Tiến độ thực hành Accordion

Đã hoàn thành phần **cấu trúc + TypeScript + giao diện Tailwind**.

Phần tiếp theo:

```text
Context
   ↓
useContext
   ↓
chia sẻ state
   ↓
Header click
   ↓
thay đổi activeItem
   ↓
Content mở / đóng
```
