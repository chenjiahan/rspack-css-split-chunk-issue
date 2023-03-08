import { ref } from "vue";
import vueLogo from "./assets/vue.svg";
import "./App.css";

console.log(vueLogo);

export default {
  name: "App",

  setup() {
    const count = ref(0);
    const add = () => count.value++;

    return () => (
      <div class="App">
        <h1>Hello world!</h1>
        <div>
          <a href="https://vuejs.org" target="_blank">
            <img src={vueLogo} class="logo vue" alt="Vue logo" />
          </a>
        </div>
        <h1>Rspack + Vue JSX</h1>
        <div class="card">
          <button onClick={add}>count is {count.value}</button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p class="read-the-docs">
          Click on the Rspack and Vue logos to learn more
        </p>
      </div>
    );
  },
};
