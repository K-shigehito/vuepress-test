---
title: VuePress study
meta:
  - name: description
    content: 説明
sidebar: true
---

[[toc]]

# 見出し1
## 見出し2
### 見出し3
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
  name: 'MyComponent',
  data() {
    return {
      message: 'ハイライト'
    }
  }
}
```

## コンポーネント
<MyComponent />
