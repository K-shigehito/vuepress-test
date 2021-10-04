---
title: VuePress study
meta:
  - name: description
    content: 説明
---

# 見出し

## 見出し 2

### 見出し 3

本文

## 絵文字変換

- :smile:
- :zipper_mouth_face:
- :thinking:
- :mask:

## カスタムブロック

::: tip
test
:::

::: warning
test
:::

::: danger
test
:::

## コードブロック

```js{5}
export default {
  name: "MyComponent",
  data() {
    return {
      message: "ハイライト",
    };
  },
};
```

## コンポーネント

<MyComponent />
