## 📖 React Flipbook Component

A lightweight and customizable React component to create a **realistic flipbook effect** for digital books, catalogs, or magazines.

![image](https://github.com/user-attachments/assets/1ed3d194-1191-4034-936c-6e4ac848c5b3)


---

### ✨ Features

* 📘 Smooth page-flipping animation
* 🧩 Easy to integrate into any React project
* 🎯 Supports dynamic content (images, text, components)
* 🛠️ Lightweight and dependency-free (except React)
* 📱 Responsive and mobile-friendly

---

### 🚀 Getting Started

#### 1. Install the package

```bash
npm install react-pageflip
# or
yarn add react-pageflip
```

#### 2. Usage

```tsx
import HTMLFlipBook from "react-pageflip";

const pages = [
  <div className="page">Page 1</div>,
  <div className="page">Page 2</div>,
  <div className="page">Page 3</div>,
];

function MyBook() {
  return <FlipBookContainer>
            <HTMLFlipBook
              width={410}
              height={690}
              style={{ transition: "all 0s ease" }}
              maxShadowOpacity={0.2}
              drawShadow={false}
              showCover={false}
            >
              <div className="demoPage left">
                <div className="text-container">
                  <div>TobiramA</div>
                  <div>
                    <p>
                      Lorem Ipsum is fish text often used in print and web design.
                      Lorem Ipsum has been the standard "fish" for Latin texts since
                      the early 16th century. At the time, an unnamed printer
                      created a large collection of font sizes and shapes, using
                      Lorem Ipsum to print samples. Lorem Ipsum not only
                      successfully survived five centuries without noticeable
                      changes, but also stepped into electronic design. It has been
                      popularized in modern times by the publication of Letraset
                      sheets with Lorem Ipsum patterns in the 60s and, more
                      recently, by layout programs such as Aldus PageMaker, which
                      use Lorem Ipsum in their templates.
                    </p>
                  </div>
                </div>
              </div>
            </HTMLFlipBook>
          </FlipBookContainer>;
}
```

---

### 💡 Use Cases

* E-books & educational content
* Product catalogs or magazines
* Storytelling apps or interactive resumes

---

### 🤝 Contributing

Pull requests are welcome! If you find bugs or want to improve this component, feel free to open an issue or PR.

---

### 📄 License

MIT © 2025 Aozora

---
