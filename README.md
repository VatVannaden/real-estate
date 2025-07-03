# 🏠 Real Estate Website

**Modern Real Estate Website** built with:

- ⚛️ [React](https://react.dev/)
- 🟦 [TypeScript](https://www.typescriptlang.org/)
- ⚡ [Vite](https://vitejs.dev/)
- 🎨 Tailwind CSS
- ✉️ EmailJS for contact form submissions

👉 [View this repo on GitHub](https://github.com/VatVannaden/real-estate)

---

## ✨ Features

✅ **Responsive Design**  
Beautiful layouts that look great on desktop and mobile.

✅ **Navigation Bar**  
Reusable and responsive NavBar component.

✅ **Hero Section**  
Big header with background image and call-to-action buttons.

✅ **Contact Form**  
Sends emails directly via EmailJS.

✅ **TypeScript Strict Mode**  
Modern type safety for a reliable codebase.

✅ **Vite HMR**  
Lightning-fast development with Hot Module Reloading.

---

## 🔥 Quick Start

### Clone the Repo

```bash
git clone https://github.com/VatVannaden/real-estate.git
cd real-estate
```

### Install Dependencies

```bash
npm install
```

### Run the Dev Server

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

---

## 📦 Production Build

To create a production build:

```bash
npm run build
```

---

## ✉️ EmailJS Integration

This project uses **EmailJS** to handle form submissions.

### How to set it up:

1. Sign up at [EmailJS](https://www.emailjs.com/)

2. Create an **Email Service** (e.g. Gmail)

3. Create an **Email Template** with variables:
   ```
   {{Name}}
   {{Email}}
   {{Message}}
   ```

   Example template content:

   ```html
   <div>
     <strong>Name:</strong> {{Name}} <br />
     <strong>Email:</strong> {{Email}} <br />
     <strong>Message:</strong> {{Message}}
   </div>
   ```

4. Copy your:
   - Service ID → e.g. `service_upyn189`
   - Template ID → e.g. `template_i9oyuf3`
   - Public Key → e.g. `vYEOVJ3RqP71JVAtR`

5. Update your React component with your IDs:

   ```tsx
   emailjs.sendForm(
     'service_upyn189',
     'template_i9oyuf3',
     form.current,
     'vYEOVJ3RqP71JVAtR'
   );
   ```

✅ **Important:** The form field names (`name` attributes) must exactly match your template variables!

| Form Field Name | Template Variable |
| --------------- | ----------------- |
| `Name`          | `{{Name}}`        |
| `Email`         | `{{Email}}`       |
| `Message`       | `{{Message}}`     |

---

## 🧹 ESLint Configuration

This project uses TypeScript and ESLint for code quality.

### Recommended Type-Checked Config

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

---

### Optional React Plugins

For React-specific linting:

```js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

---

## ❗ Known Issues

- Ensure EmailJS variables in your template match your form inputs exactly.
- Double-check your Service ID, Template ID, and Public Key.

---

## 🙏 Credits

This project was inspired by [@LamaDev's Real Estate Website Tutorial](https://www.youtube.com/watch?v=AdcUinE5iYo) on YouTube.  
Thanks for the great walkthrough and UI/UX guide! 🙌

---

## 📜 License

MIT

---
