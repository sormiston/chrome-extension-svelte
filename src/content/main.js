import App from './App.svelte';

document.addEventListener('selectionchange', () => {
  store.selection = document.getSelection()
})

const store = {
  selection: null,
  subscription: null,
  subscribe(func) {
    this.subscription = func(this)
    return this.subscription
  }
}
const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;