function createScript(src) {
  return {
    type: 'script',
    props: { src },
  }
}

function createTitle(title) {
  return {
    type: 'title',
    children: title,
  }
}

export const header = {
  global: [
    createScript(
      'https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js'
    ),
  ],
  Home: [createTitle('Home')],
  Error: [createTitle('Error')],
}
